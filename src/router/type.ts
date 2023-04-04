import type {RouteObject} from "react-router";

export type RouteObj = RouteObject & {
  children?: RouteObj[]
  meta?: {
    title?: string,
    icon?: string,
    hideInMenu?: boolean,
    auth?: Auth
  }
}
/*
* roles --> 界面权限
* permissionControl --> 组件控件权限
* */
export type Auth = {
  roles?: string[],
  permissionControl?: string[],
}