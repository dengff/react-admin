import {Navigate, useRoutes} from "react-router-dom";
import {lazy} from "react";
import routes from "@/router/routes";
import {lazyLoad} from "@/utils/lazyload";
import React from "react";
import type {RouteObj} from "./type";

export const routeConfig: RouteObj[] = [
  {
    path: "/",
    meta: {title: ""},
    element: (<Navigate to="/dashboard/workplace"/>),
  },
  {
    path: "/login",
    element: lazyLoad(lazy(() => import("@/page/Login")))
  },
  {
    element: lazyLoad(lazy(() => import("@/page/Layout"))),
    children: [
      ...routes
    ]
  },
  {
    path: "*",
    element: lazyLoad(lazy(() => import("@/page/Error")))
  }

];

const Router = () => {
  return useRoutes(routeConfig);
};

export default Router;
