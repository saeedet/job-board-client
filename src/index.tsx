import ReactDOM from "react-dom";
import "./styles/index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  NormalizedCacheObject,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import AuthMiddleware from "./AuthMiddleware";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import { getAccessToken, setAccessToken } from "./utils/accessToken";
import jwtDecode, { JwtPayload } from "jwt-decode";
import axios from "axios";
import { onError } from "@apollo/client/link/error";
import { StateProvider } from "./context/Context";
import { initialState, reducer } from "./context/reducer";

const tokenRefreshLink = new TokenRefreshLink({
  accessTokenField: "accessToken",
  isTokenValidOrUndefined: () => {
    const token = getAccessToken();

    if (!token) {
      return false;
    }
    try {
      const { exp } = jwtDecode<JwtPayload>(token);
      if (Date.now() >= exp! * 1000) {
        return false;
      } else {
        return true;
      }
    } catch {
      return false;
    }
  },
  fetchAccessToken: () => {
    return axios.post("http://localhost:4000/refresh_token", {
      withCredentials: true,
    });
  },
  handleFetch: (accessToken) => {
    setAccessToken(accessToken);
  },
  handleError: (err) => {
    // full control over handling token fetch Error
    console.warn("Your refresh token is invalid. Try to relogin");
    console.error(err);
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = new ApolloLink((operation, forward) => {
  const token = getAccessToken();

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: ApolloLink.from([
    tokenRefreshLink,
    errorLink,
    authLink,
    new HttpLink({
      uri: process.env.REACT_APP_GRAPHQL_URI,
      credentials: "include",
    }),
  ]),

  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <AuthMiddleware />
      </BrowserRouter>
    </StateProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
