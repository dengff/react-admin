import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Icon ,{AppstoreOutlined} from '@ant-design/icons';
import routes from '@/router/routes';
import {shallowEqual, useSelector} from 'react-redux';
import {menuIcon} from '@/components/Icon';

export function withMenuHoc(WrapComponent) {
  return forwardRef((props, ref) => {
    const navigate = useNavigate();
    const {userInfo, collapsed} = useSelector(state => state.global,
      shallowEqual);
    const {pathname} = useLocation();
    const toMenuList = (list) => {
      return list.map(item => {
        return {
          ...item,
          label: item?.meta?.title,
          key: item.path,
          title: item?.meta?.title,
          icon: menuIcon[item?.meta?.icon]?<Icon component={menuIcon[item?.meta?.icon]}/>:null,
          children: item?.children?.length && toMenuList(item?.children),
        };
      }).filter(inner => {
        if (inner?.meta?.hideInMenu === true) return false;
        if (userInfo?.role === 'admin' || !inner?.meta?.auth?.roles?.length ||
          inner?.meta?.auth?.roles?.includes(userInfo?.role)) {
          return true;
        }
      });
    };
    const menuList = toMenuList(routes);
    let result = [];
    const defaultOpenKeys = (list = menuList) => {
      list.forEach(item => {
        if (item.path === pathname) {
          result.push(item.path);
        }
        if (pathname.indexOf(item.path) > -1) {
          result.push(item.path);
        }
        if (item?.children) return defaultOpenKeys(item.children);
      });
      return result;
    };
    const [openKeys, setOpenKeys] = useState([]);
    const onOpenChange = (keys) => {
      if (keys.includes('rc-menu-more')) return setOpenKeys(keys);
      const latestOpenKey = keys[keys.length - 1];
      if (latestOpenKey?.includes(keys[0])) return setOpenKeys(keys);
      setOpenKeys([latestOpenKey]);
    };
    const handleClick = ({key}) => navigate(key);

    useImperativeHandle(
      ref,
      () => ({
        setOpenKeys: setOpenKeys,
        defaultOpenKeys: defaultOpenKeys,
      }),
      [pathname],
    );
    return <WrapComponent
      ref={ref}
      {...{
        theme: 'dark',
        selectedKeys: [pathname],
        mode: 'inline',
        openKeys: openKeys,
        items: menuList,
        onOpenChange: onOpenChange,
        onClick: handleClick,
        ...props,
      }}
    />;
  });
}