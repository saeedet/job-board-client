import React from "react";
import AuthMiddleware from "./AuthMiddleware";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  NormalizedCacheObject,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwtDecode, { JwtPayload } from "jwt-decode";
import axios from "axios";
import { onError } from "@apollo/client/link/error";
import { useContextProvider } from "../context/Context";

const ApolloMiddleware: React.FC = () => {
  const [{ accessToken }, dispatch] = useContextProvider();

  const tokenRefreshLink = new TokenRefreshLink({
    accessTokenField: "accessToken",
    isTokenValidOrUndefined: () => {
      if (!accessToken) {
        return false;
      }
      try {
        const { exp } = jwtDecode<JwtPayload>(accessToken);
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
      return axios.get("http://localhost:4000/refresh_token", {
        withCredentials: true,
      });
    },
    handleFetch: (accessToken) => {
      dispatch({
        type: "SET_ACCESSTOKEN",
        payload: accessToken,
      });
    },
    handleError: (err) => {
      // full control over handling token fetch Error
      console.warn("Your refresh token is invalid. Try to relogin");
      console.error(err);
    },
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) => {
        if (path && path[0] === "login") {
          dispatch({
            type: "SET_ERROR",
            payload: {
              path: path[0],
              message,
            },
          });
          return;
        }
        return console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const authLink = new ApolloLink((operation, forward) => {
    // Use the setContext method to set the HTTP headers.
    operation.setContext({
      headers: {
        authorization: accessToken ? `Bearer ${accessToken}` : "",
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
  return (
    <ApolloProvider client={client}>
      <AuthMiddleware />
    </ApolloProvider>
  );
};

export default ApolloMiddleware;
