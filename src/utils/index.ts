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
  const token = localStorage.getItem("token");
  if (token !== null) return JSON.parse(token);

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
  const userInfo = localStorage.getItem("user-info");
  if (userInfo !== null) return JSON.parse(userInfo);
  return undefined;

};