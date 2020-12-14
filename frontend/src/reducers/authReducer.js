import { SIGN_IN, SIGN_OUT } from "../actions/types";
const INITAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export const authReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload.userId };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
