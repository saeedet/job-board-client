import ReactDOM from "react-dom";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./context/Context";
import { initialState, reducer } from "./context/reducer";
import ApolloMiddleware from "./middlewares/ApolloMiddleware";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
      <ApolloMiddleware />
    </BrowserRouter>
  </StateProvider>,
  document.getElementById("root")
);
