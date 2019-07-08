/* eslint-disable no-unused-vars */
import {
  post
} from "../axios";

var api = {};

// 查询预定列表
api.queryReserve = params => {
  return new Promise((resolve, reject) => {
    return post("/api/user/queryReserve", params).then(res => {
      resolve(res);
    });
  });
};

api.queryNewReserve = params => {
  return new Promise((resolve, reject) => {
    return post("/api/user/queryNewReserve", params).then(res => {
      resolve(res);
    });
  });
};
// 取消预定
api.cancelReserve = params => {
  return new Promise((resolve, reject) => {
    return post("/api/cancelReserve", params).then(res => {
      resolve(res);
    });
  });
};
// 完成预定
api.okReserve = params => {
  return new Promise((resolve, reject) => {
    return post("/api/okReserve", params).then(res => {
      resolve(res);
    });
  });
};

// 查询日期列表
api.queryReserveNotDate = params => {
  return new Promise((resolve, reject) => {
    return post("/api/user/queryReserveNotDate", params).then(res => {
      resolve(res);
    });
  });
};
// 添加日期
api.addReserveNotDate = params => {
  return new Promise((resolve, reject) => {
    return post("/api/user/addReserveNotDate", params).then(res => {
      resolve(res);
    });
  });
};
// 更新日期
api.updateReserveNotDate = params => {
  return new Promise((resolve, reject) => {
    return post("/api/user/updateReserveNotDate", params).then(res => {
      resolve(res);
    });
  });
};
// 删除日期
api.deleteReserveNotDate = params => {
  return new Promise((resolve, reject) => {
    return post("/api/user/deleteReserveNotDate", params).then(res => {
      resolve(res);
    });
  });
};
// 查询日期
api.queryReserveNotDateById = params => {
  return new Promise((resolve, reject) => {
    return post("/api/user/queryReserveNotDateById", params).then(res => {
      resolve(res);
    });
  });
};

export default api;