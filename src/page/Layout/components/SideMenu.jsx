import {Menu} from 'antd';
import React, {useState} from 'react';

import styled from 'styled-components';
import {useLocation, useNavigate} from 'react-router-dom';
import {AppstoreOutlined} from '@ant-design/icons';
import routes from '@/router/routes/index.jsx';
import {shallowEqual, useSelector} from 'react-redux';

const logo = 'https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png';
const Warp = styled.div`
  .logo {
    width: 100%;
    display: flex;
    justify-content: space-around;

    img {
      width: auto;
      height: 48px;
    }
  }

  .scrollbar {
    height: calc(100vh - 48px);
    overflow-y: scroll;
  }

  .layout-content::-webkit-scrollbar {
    width: 0;
  }
`;

export const SideMenu = () => {
  const navigate = useNavigate();
  const {userInfo, collapsed} = useSelector(state => state.global,
    shallowEqual);
  const {pageConfig = {}} = useSelector(state => state.topHeader);
  const {layoutItems} = pageConfig;
  const {pathname} = useLocation();
  const toMenuList = (list) => {
    return list.map(item => {
      return {
        ...item,
        label: item?.meta?.title,
        key: item.path,
        title: item?.meta?.title,
        icon: <AppstoreOutlined/>,
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
  const defaultOpenKeys = (menuList) => menuList.filter(
    item => pathname.indexOf(item.path) > -1).map(inner => inner.key);
  const [openKeys, setOpenKeys] = useState(() => defaultOpenKeys(menuList));
  const onOpenChange = (keys) => {
    const latestOpenKey = keys[keys.length - 1];
    if (latestOpenKey?.includes(keys[0])) return setOpenKeys(keys);
    setOpenKeys([latestOpenKey]);
  };
  const handleClick = ({key}) => navigate(key);
  return (
    <Warp>
      {
        layoutItems?.includes('logo') && <div className={'logo'}>
          <img src={logo}/>
        </div>
      }
      <div className={'scrollbar'}>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          openKeys={openKeys}
          items={menuList}
          onOpenChange={onOpenChange}
          onClick={handleClick}
        />
      </div>
    </Warp>

  );
};
export default SideMenu;