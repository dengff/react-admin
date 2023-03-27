import {Menu} from 'antd';
import React, {useCallback, useImperativeHandle, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {shallowEqual, useSelector} from 'react-redux';
import {menuIcon} from '@/components/Icon';
import Icon from '@ant-design/icons';
import routes from '@/router/routes';

const MenuLayout = ({menuRef, ...args}) => {
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState([]);
  const {userInfo} = useSelector(state => state.global, shallowEqual);
  const {pathname} = useLocation();

  const toMenuList = (list) => {
    return list.map(item => {
      return {
        ...item,
        label: item?.meta?.title,
        key: item.path,
        title: item?.meta?.title,
        icon: menuIcon[item?.meta?.icon] ?
          <Icon component={menuIcon[item?.meta?.icon]}/> :
          null,
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

  const onOpenChange = (keys) => {
    if (keys.includes('rc-menu-more')) return setOpenKeys(keys);
    const latestOpenKey = keys[keys.length - 1];
    if (latestOpenKey?.includes(keys[0])) return setOpenKeys(keys);
    setOpenKeys([latestOpenKey]);
  };
  const handleClick = ({key}) => navigate(key);

  useImperativeHandle(
    menuRef,
    () => ({
      setOpenKeys,
    }),
    [pathname],
  );

  return (
    <Menu
      theme={'dark'}
      selectedKeys={[pathname]}
      mode={'inline'}
      openKeys={openKeys}
      items={menuList}
      onOpenChange={onOpenChange}
      onClick={handleClick}
      {...args}
    />
  );
};

export default MenuLayout;