import type {RouteObject} from "react-router"

export type RouteObj = RouteObject & {
  children?: RouteObj[]
  meta?: {
    title?: string,
    icon?: string,
    hideInMenu?: boolean,
    auth?: {
      roles?: string[],
      permissionBtn?: string[],
    },
  }
}