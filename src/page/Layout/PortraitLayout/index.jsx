import MenuLayout from '@/page/Layout/components/MenuLayout';
import {Layout} from 'antd';
import LayoutContent from '@/page/Layout/Content';
import LayoutFooter from '@/page/Layout/Footer';
import React, {useEffect, useRef} from 'react';
import {Warp} from '@/page/Layout/style.js';
import PortraitHeader from '@/page/Layout/PortraitLayout/Header';
import HeaderTabs from '@/page/Layout/components/TabsLayout/Header-Tabs';
import {shallowEqual, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';

const {Header, Sider} = Layout;

export const PortraitLayout = () => {
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
        <Header style={{
          padding: '0 0px',
          color: '#fff',
          height: 'auto',
        }}>
          <PortraitHeader/>
        </Header>
        <Layout>
          <Sider
            style={{background: '#fff'}}
            trigger={null}
            collapsible
            collapsed={collapsed}>
            <div className="scrollbar">
              <MenuLayout ref={ref} theme={'light'}/>
            </div>
          </Sider>
          <Layout className="site-layout">
            <HeaderTabs style={{
              paddingRight: '14px',
              height: '38px',
              background: '#fff',
            }}/>
            <LayoutContent/>
            <LayoutFooter/>
          </Layout>
        </Layout>
      </Layout>

    </Warp>
  );
};

export default PortraitLayout;