import createAxiosByInterceptors from "@/service";
import type {IResponseLogin, IResUserInfo, IResLogout} from "./type";


export const request = createAxiosByInterceptors({
  baseURL: "https://mock.apifox.cn/m1/1225980-0-default",
});

export const reqLogin = (params: { username: string, password: string }): IResponseLogin => {
  return request.post("/login", {...params});
};
export const reqUserInfo = (token: string): IResUserInfo => request.post("/userInfo", {
  token: token,
});
export const reqLogout = (token: string): IResLogout => request.post("/logout", {
  token: token,
});

export const reqTableDetail = (params: any): any => request.post("/detailInfo", {
  ...params
});


