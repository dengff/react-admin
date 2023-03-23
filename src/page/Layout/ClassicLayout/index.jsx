import {Warp} from '@/page/Layout/style';
import {Layout} from 'antd';
import Logo from '@/page/Layout/components/Logo';
import MenuLayout from '@/page/Layout/components/MenuLayout';
import ClassicHeader from './Header/index';
import LayoutContent from '@/page/Layout/Content';
import LayoutFooter from '@/page/Layout/Footer';
import React, {useEffect, useRef} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';

const {Header, Sider} = Layout;

export const ClassicLayout = () => {

  const {collapsed} = useSelector(state => state.global,
    shallowEqual);
  const {pageConfig} = useSelector(state => state.topHeader);
  const {layoutMode} = pageConfig ?? {};
  const {pathname} = useLocation();
  const ref = useRef(null);
  useEffect(() => {
    const keys = ref.current?.defaultOpenKeys();
    ref.current?.setOpenKeys(keys);
  }, [pathname, layoutMode]);
  return (

    <Warp>
      <Layout style={{height: '100%'}}>
        <Sider style={{background:'#fff'}} trigger={null} collapsible
               collapsed={collapsed}>
          <Logo mode={'classicLayout'}/>
          <div className="scrollbar">
            <MenuLayout ref={ref} theme={"light"}/>
          </div>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="layout-header"
            style={{padding: '0 14px'}}
          >
            <ClassicHeader/>
          </Header>
          <LayoutContent/>
          <LayoutFooter/>
        </Layout>
      </Layout>

    </Warp>

  );
};

export default ClassicLayout;