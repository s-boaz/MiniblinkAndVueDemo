import axios from 'axios';
// import { getToken } from '@/utils/auth'

let baseUrl = '/api';
// 创建axios实例
const service = axios.create({
  baseURL: baseUrl, // api base_url
  timeout: 60 * 1000, // 请求超时时间
  withCredentials: true,
  headers: {},
});

// 请求拦截
service.interceptors.request.use(config => {
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken()
    // }
    return config;
  }, error => {
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(response => {
    const { data } = response;
    if (data.code !== 0) {
      // error message
      // alert(data.msg)
      return Promise.reject(data.msg);
    }
    return data;
  }, error => {
    const data = {code: 1, data: {}, msg: '请求失败'};
    if (error && error instanceof Error) {
      data.msg = error.message.indexOf('timeout') !== -1 ? '请求超时' : '请求错误';
    }
    // alert(data.msg)
    return Promise.reject(data)
  }
);

export default service;
