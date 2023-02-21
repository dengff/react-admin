

import createAxiosByInterceptors from '@/service';
const request = createAxiosByInterceptors({
  // baseURL:'afasfasf' // 可以覆盖基础config
});

export const reqLogin = (params)=>request.post("/login",{

  ...params

})

export const reqUserInfo = (token)=>request.post("/userInfo",{
  token:token
})