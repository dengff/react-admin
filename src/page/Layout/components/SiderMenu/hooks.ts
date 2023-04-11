import {useEffect, useRef} from "react";
import routes from "@/router/routes";
import {useLocation} from "react-router-dom";
import type {SetOpenKeys} from "@/page/Layout/components/SiderMenu/type";

export const useDefaultOpenKeys = (collapsed = false) => {
  const ref = useRef<SetOpenKeys>(null);
  const {pathname} = useLocation();
  const defaultOpenKeys = (list= routes):any[] => {
    const prePath = pathname.split(/\//)?.[1];
    return list.flatMap(item => [
      item.path === pathname ? item.path :
        item.path?.includes(prePath) && pathname.indexOf(item.path!) > -1 ? item.path! : [],
      ...(item?.children ? defaultOpenKeys(item.children) : [])
    ]);
  };
  useEffect(() => {
    if (collapsed) return ref?.current?.setOpenKeys([]);
    const keys = defaultOpenKeys();
    ref.current?.setOpenKeys(keys);
  }, [pathname]);

  return [ref];
};