import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types";
import streams from "../apis/streams";
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: {
      userId: userId,
    },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// export const createStreams = formValues => async dispatch => {

// }

export const createStreams = (formValues) => {
  return async (dispatch) => {
    const res = await streams.post("/streams", formValues);

    dispatch({ type: CREATE_STREAM, payload: res.data });
  };
};
