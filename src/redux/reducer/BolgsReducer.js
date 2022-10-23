import { registerUserError } from "../actions";
import {
  GET_BLOGS_ERROR,
  GET_BLOGS_START,
  GET_BLOGS_SUCCESS,
  GET_SINGLE_BLOGS_ERROR,
  GET_SINGLE_BLOGS_START,
  GET_SINGLE_BLOGS_SUCCESS,
} from "../actions/ActionType";

// const initialState = 0;
const initialState = {
  blogs: [],
  SingleBlogs: [],
  loading: false,
  error: null,
};

const blogsReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case GET_BLOGS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };

    case GET_BLOGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    ////////////////////

    case GET_SINGLE_BLOGS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        SingleBlogs: action.payload,
      };

    case GET_SINGLE_BLOGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default blogsReducer;
