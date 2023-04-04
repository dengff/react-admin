import {matchRoutes, useLocation} from "react-router-dom";
import {routeConfig} from "@/router";
import {UserInfo} from "@/common/api/type";

export const currentRoute = () => {
  const location = useLocation();
  const matches = matchRoutes(routeConfig, location)!;
  const route = matches.find(item => item.pathname === location.pathname)!;
  return {
    matches,
    route
  };
};
export const getToken = () => {
  const token = JSON.parse(localStorage.getItem("token")!);
  if (token) return token;
  return undefined;

};

export const setToken = (token: string) => {
  if (!token) return;
  localStorage.setItem("token", JSON.stringify(token));

};

export const setUserInfo = (info: UserInfo) => {

  localStorage.setItem("user-info", JSON.stringify(info));

};
export const getUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem("user-info")!);
  if (userInfo) return userInfo;
  return undefined;

};