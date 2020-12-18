import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { streamReducer } from "./streamReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});
