/* eslint-disable no-unused-vars */
import {
  post,
  fetch
} from "../axios";

import example from "./example"

var api = {
  ...example
};

// 登录
api.auth = params => {
  return new Promise((resolve, reject) => {
    return post("/api/auth", params).then(res => {
      resolve(res);
    });
  });
};

export default api;