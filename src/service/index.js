import axios from 'axios';
// import {ElMessage, ElLoading} from 'element-plus';
// import {hexToRgb} from '../utils/theme/tool';
// import { jumpLogin, downloadFile } from "@/utils";

let loadingInstance = null;
let requestNum = 0;
const addLoading = () => {
  // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
  requestNum++;
  if (requestNum === 1) {
    // loadingInstance = ElLoading.service({
    //   fullscreen: true,
    //   text: '正在努力加载中....', // 99,12,169
    //   background: `rgba(${color},0.11)`,
    // });
  }
};

const cancelLoading = () => {
  // 取消loading 如果pending请求数量等于0，关闭loading
  requestNum--;
  if (requestNum === 0) loadingInstance?.close();
};
// createAxiosByInterceptors
const createAxiosByInterceptors = (
  config,
) => {
  const instance = axios.create({
    // baseURL: 'https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e',
    baseURL: '/dev-api',
    headers: {
      'x-access-token': 'bqddxxwqmfncffacvbpkuxvwvqrhln',
    },
    timeout: 1000,    //超时配置
    withCredentials: true,  //跨域携带cookie
    ...config,   // 自定义配置覆盖基本配置
  });

  // 添加请求拦截器
  instance.interceptors.request.use(
    function(config) {
      // 在发送请求之前做些什么
      const {loading = true} = config;
      // console.log('config:', config);
      // config.headers.Authorization = vm.$Cookies.get("vue_admin_token");
      if (loading) addLoading();
      return config;
    },
    function(error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    },
  );
  // 添加响应拦截器
  instance.interceptors.response.use(
    function(response) {
      // 对响应数据做点什么
      const {loading = true, notify = false} = response.config;
      if (loading) cancelLoading();
      const {code, data, message, cache, timeout} = response.data;
      return response.data;

     /* // config设置responseType为blob 处理文件下载
      if (response.data instanceof Blob) {
        // return downloadFile(response);
      }
      const codeMap = {
        200: () => {
          // notify && ElMessage.success(message || 'success');
          return response.data;
        },
        401: () => {
        },
        default: () => {
          // ElMessage.error(message);
          return Promise.reject(response.data);
        },
      };
      return codeMap[code] ? codeMap[code]() : codeMap['default']();*/
    },
    function(error) {
      // 对响应错误做点什么
      const {loading = true} = error.config;
      if (loading) cancelLoading();
      if (error.response) {
        if (error.response.status === 401) {
          // jumpLogin();
        }
      }
      // ElMessage.error(error?.response?.data?.message || '服务端异常');
      return Promise.reject(error);
    },
  );
  return instance;
};

export default createAxiosByInterceptors;