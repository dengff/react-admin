import {Outlet, useNavigate, matchRoutes, useLocation} from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AppstoreOutlined,
  DownOutlined,
} from '@ant-design/icons';
import {Layout, Menu, Dropdown, Button, Space} from 'antd';
import React, {useEffect, useState,} from 'react';
import TopHeader from './components/header';
import {useSelector, shallowEqual} from 'react-redux';

const {Header, Sider, Content} = Layout;
import style from './index.module.scss';
import routes from '@/router/routes/index.jsx';
import {routeConfig} from '@/router/index.jsx';

export default () => {
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
        icon: <AppstoreOutlined/>,
        children: item?.children?.length && toMenuList(item?.children),
      };
    }).
      filter(
        inner => (userInfo?.role === 'admin' || !inner?.meta?.roles?.length ||
          inner?.meta?.roles?.includes(userInfo?.role)));
  };
  const menuList = toMenuList(routes);
  const defaultOpenKeys = (menuList) => menuList.filter(
    item => pathname.indexOf(item.path) > -1).map(inner => inner.key);
  const [openKeys, setOpenKeys] = useState(() => defaultOpenKeys(menuList));
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };
  const handleClick = ({key}) => navigate(key);
  return (
    <Layout style={{height: '100%'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={style.logo}>
          <img src="../../../public/image/logo.9c5c7141.png"/>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          openKeys={openKeys}
          items={menuList}
          onOpenChange={onOpenChange}
          onClick={handleClick}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: '0 20px',
            background: '#fff',
            height: 'auto',
          }}
        >
          <TopHeader/>
        </Header>
        <Content
          style={{
            margin: '18px 16px',
            height: '100%',
            overflowY: 'auto',
            overflowX: 'hidden',
            borderRadius: '4px',
            boxShadow: '0 2px 6px',
          }}
        >
          <section>
            <Outlet/>
          </section>
        </Content>
      </Layout>
    </Layout>
  );
};
