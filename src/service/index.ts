import type {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import axios from "axios";

const defaultConfig = {
  baseURL: "/default-api",
  headers: {
    "x-access-token": "bqddxxwqmfncffacvbpkuxvwvqrhln",
  },
  timeout: 3000,
  withCredentials: true,
};

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
    function (response: AxiosResponse) {
      const {data} = response;
      const {code, message} = data;
      if (data instanceof ArrayBuffer) return data;
      const codeMap: { [key: number | string]: any } = {
        200: () => data,
        "default": () => {
          return Promise.reject(response.data);
        },
      };
      return codeMap[code] ? codeMap[code]() : codeMap["default"]();
    },
    function (error: AxiosError) {
      return Promise.reject(error);
    },
  );
  return instance;
};

export default createAxiosByInterceptors;