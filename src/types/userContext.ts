import { Dispatch, SetStateAction } from "react";
import { CtxAction } from "./contextAction";
import { InitialState } from "./initialState";

export interface UserContext {
  user: InitialState;
  dispatch: Dispatch<SetStateAction<CtxAction>>;
}
