import blogsReducer from "./BolgsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  blogsReducer,
});

export default rootReducer;
