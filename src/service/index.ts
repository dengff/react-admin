import type {AxiosError, AxiosInstance, AxiosRequestConfig} from "axios"
import axios from 'axios';

const defaultConfig = {
  baseURL: '/default-api',
  headers: {
    'x-access-token': 'bqddxxwqmfncffacvbpkuxvwvqrhln',
  },
  timeout: 3000,
  withCredentials: true,
}

const createAxiosByInterceptors = (config: AxiosRequestConfig = defaultConfig) => {
  const instance: AxiosInstance = axios.create({
    ...config,
  });

  instance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    },
  );
  instance.interceptors.response.use(
    function (response) {
      const {code, data, message, cache, timeout} = response.data;
      /*
       if (response.data instanceof Blob) {
         // return downloadFile(response);
       }
       */
      const codeMap = {
        200: () => {
          return response.data;
        },
        401: () => {
        },
        default: () => {
          return Promise.reject(response.data);
        },
      };
      return codeMap[code] ? codeMap[code]() : codeMap['default']();
    },
    function (error: AxiosError) {
      return Promise.reject(error);
    },
  );
  return instance;
};

export default createAxiosByInterceptors;