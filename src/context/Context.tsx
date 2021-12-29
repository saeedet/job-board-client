import React, { createContext, useContext, useReducer } from "react";
import { CtxAction } from "../types/contextAction";
import { InitialState } from "../types/initialState";
import { UserContext } from "../types/userContext";
import { initialState, reducer } from "./reducer";

export const StateProviderContext = createContext({} as any);

interface Props {
  initialState: InitialState;
  reducer: any;
  children: JSX.Element;
}

export const StateProvider: React.FC<Props> = ({
  initialState,
  reducer,
  children,
}) => (
  <StateProviderContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateProviderContext.Provider>
);

export const useContextProvider = () => useContext(StateProviderContext);
