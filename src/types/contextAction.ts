export interface CtxAction {
  type: String;
  payload: CtxPayload;
}

export interface CtxPayload {
  firstName?: string | null;
  lastName?: string | null;
  accessToken?: string;
}
