import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";
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

export const fetchAllStreams = () => {
  return async (dispatch) => {
    const res = await streams.get("/streams");
    dispatch({ type: FETCH_STREAMS, payload: res.data });
  };
};

export const fetchSingleStream = (id) => {
  return async (dispatch) => {
    const res = await streams.get(`/streams/${id}`);
    dispatch({
      type: FETCH_STREAM,
      payload: res.data,
    });
  };
};

export const updateStream = (id, content) => {
  return async (dispatch) => {
    const res = await streams.put(`/streams/${id}`, content);
    dispatch({ type: EDIT_STREAM, payload: res.data });
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
  };
};
