import createAxiosByInterceptors from '@/service';

export const request = createAxiosByInterceptors({
  baseURL: 'https://mock.apifox.cn/m1/1225980-0-default',
});

export const reqLogin = (params) => request.post('/login', {

  ...params,

});

export const reqUserInfo = (token) => request.post('/userInfo', {
  token: token,
});
export const reqLogout = (token) => request.post('/logout', {
  token: token,
});


