import {useEffect, useRef} from 'react';
import routes from '@/router/routes';
import {useLocation} from 'react-router-dom';

export const useDefaultOpenKeys = (collapsed = false) => {
  const ref = useRef(null);
  const {pathname} = useLocation();
  let result = [];
  const prePath = pathname.split(/\//)?.[1];
  const defaultOpenKeys = (list = routes) => {
    list.forEach(item => {
      if (item.path === pathname) {
        result.push(item.path);
      }
      if (item.path.includes(prePath) && pathname.indexOf(item.path) > -1) {
        result.push(item.path);
      }
      if (item?.children) return defaultOpenKeys(item.children);
    });
    return result;
  };
  useEffect(() => {
    if (collapsed) return ref?.current?.setOpenKeys([]);
    const keys = defaultOpenKeys();
    ref?.current?.setOpenKeys(keys);
  }, [pathname]);

  return [ref];
};