import axios from "axios";

export const _axios = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {},
});


