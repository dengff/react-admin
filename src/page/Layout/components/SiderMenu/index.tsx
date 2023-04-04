import {Menu} from "antd";
import React, {useImperativeHandle, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {shallowEqual, useSelector} from "react-redux";
import {menuIcon} from "@/components/Icon";
import Icon from "@ant-design/icons";
import routes from "@/router/routes";
import {selectGlobal} from "@/store/global/selectors";
import type {GlobalState} from "@/store/global/reducers";
import type {RouteObj} from "@/router/type";
import type {IProps} from "@/page/Layout/components/SiderMenu/type";

const MenuLayout = ({menuRef, ...args}: IProps) => {
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const {userInfo} = useSelector<any, GlobalState>(selectGlobal, shallowEqual);
  const {pathname} = useLocation();

  const toMenuList = (list: RouteObj[]): any[] => {
    return list.map(item => {
      return {
        ...item,
        label: item?.meta?.title,
        key: item.path,
        title: item?.meta?.title,
        icon: menuIcon[item?.meta?.icon!] ?
          <Icon component={menuIcon[item?.meta?.icon!]}/> :
          null,
        children: item?.children?.length && toMenuList(item?.children),
      };
    }).filter(inner => {
      if (inner?.meta?.hideInMenu === true) return false;
      if (userInfo?.role === "admin" || !inner?.meta?.auth?.roles?.length ||
        inner?.meta?.auth?.roles?.includes(userInfo?.role)) {
        return true;
      }
    });
  };

  const menuList = toMenuList(routes);
  const onOpenChange = (keys: string[]) => {
    if (keys.includes("rc-menu-more")) return setOpenKeys(keys);
    const latestOpenKey = keys[keys.length - 1];
    if (latestOpenKey?.includes(keys[0])) return setOpenKeys(keys);
    setOpenKeys([latestOpenKey]);
  };
  const handleClick = ({key}: { key: string }) => navigate(key);

  useImperativeHandle(
    menuRef,
    () => ({
      setOpenKeys,
    }),
    [pathname],
  );

  return (
    <Menu
      theme={"dark"}
      selectedKeys={[pathname]}
      mode={"inline"}
      openKeys={openKeys}
      items={menuList}
      onOpenChange={onOpenChange}
      onClick={handleClick}
      {...args}
    />
  );
};

export default MenuLayout;