import { CtxAction } from "../types/contextAction";
import { InitialState } from "../types/initialState";

export const initialState: InitialState = {
  firstName: null,
  lastName: null,
  accessToken: "",
};

export const reducer = (state: InitialState, action: CtxAction) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
