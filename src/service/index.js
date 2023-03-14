import axios from 'axios';

let loadingInstance = null;
let requestNum = 0;
const addLoading = () => {
  // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
  requestNum++;
  if (requestNum === 1) {
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
    baseURL: '/default-api',
    headers: {
      'x-access-token': 'bqddxxwqmfncffacvbpkuxvwvqrhln',
    },
    timeout: 3000,    //超时配置
    withCredentials: true,  //跨域携带cookie
    ...config,   // 自定义配置覆盖基本配置
  });

  // 添加请求拦截器
  instance.interceptors.request.use(
    function(config) {
      // 在发送请求之前做些什么
      const {loading = true} = config;
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
      /* // config设置responseType为blob 处理文件下载
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
    function(error) {
      // 对响应错误做点什么
      const {loading = true} = error.config;
      if (loading) cancelLoading();
      if (error.response) {
        if (error.response.status === 401) {
        }
      }
      return Promise.reject(error);
    },
  );
  return instance;
};

export default createAxiosByInterceptors;