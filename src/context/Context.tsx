import React, { createContext, useContext, useReducer } from "react";
import { CtxAction } from "../types/contextAction";
import { InitialState } from "../types/initialState";

export const StateProviderContext = createContext(
  {} as [InitialState, React.Dispatch<CtxAction>]
);

interface Props {
  initialState: InitialState;
  reducer: (state: InitialState, action: CtxAction) => InitialState;
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
