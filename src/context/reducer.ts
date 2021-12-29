import { CtxAction } from "../types/contextAction";
import { InitialState } from "../types/initialState";

export const initialState: InitialState = {
  id: "2",
  firstName: null,
  lastName: null,
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
