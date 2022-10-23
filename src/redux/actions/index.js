// import * as type from "./actionType";

import { type } from "@testing-library/user-event/dist/type";
import {
  GET_BLOGS_ERROR,
  GET_BLOGS_START,
  GET_BLOGS_SUCCESS,
  GET_SINGLE_BLOGS_START,
  GET_SINGLE_BLOGS_SUCCESS,
  GET_SINGLE_BLOGS_ERROR,
} from "./ActionType";

////////////BLOGS////////////
export const getBlogsStart = () => {
  return {
    type: GET_BLOGS_START,
  };
};

export const getBlogsSuccess = (data) => {
  return {
    type: GET_BLOGS_SUCCESS,
    payload: data,
  };
};
export const getBlogsError = (error) => {
  return {
    type: GET_BLOGS_ERROR,
    payload: error,
  };
};

////////////SINGLE_BLOG/////////////////
export const getSingleBlogsStart = (id) => {
  return {
    type: GET_SINGLE_BLOGS_START,
    payload: id,
  };
};

export const getSingleBlogsSuccess = (data) => {
  return {
    type: GET_SINGLE_BLOGS_SUCCESS,
    payload: data,
  };
};
export const getSingleBlogsError = (error) => {
  return {
    type: GET_SINGLE_BLOGS_ERROR,
    payload: error,
  };
};
