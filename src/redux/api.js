import axios from "axios";

export const getBlogsApi = () => {
  return axios.get(`https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/`);
};

export const getSingleBlogsApi = (id) => {
  return axios.get(
    `https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`
  );
};
