import {Outlet} from 'react-router-dom';
import {Layout} from 'antd';
import React from 'react';
import TopHeader from './components/Header/index.jsx';
import {shallowEqual, useSelector} from 'react-redux';
import {Warp} from '@/page/Layout/style.js';
import SideMenu from '@/page/Layout/components/SideMenu.jsx';

const {Header, Sider, Content, Footer} = Layout;

export default () => {
  const {userInfo, collapsed} = useSelector(state => state.global,
    shallowEqual);
  const {pageConfig} = useSelector(state => state.topHeader);
  const {layoutItems} = pageConfig ?? {};
  return (
    <Warp>
      <Layout style={{height: '100%'}}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <SideMenu/>
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
          <Content className={'layout-content'}>
            <section className={'layout-content-section'}
                     style={{padding: '6px 6px', height: '100%'}}>
              <Outlet/>
            </section>
          </Content>
          {layoutItems?.includes('pageFooter') && <Footer
            style={{textAlign: 'center', color: '#d9d9d9'}}
          >
            Dengff Admin Template
          </Footer>
          }
        </Layout>
      </Layout>
    </Warp>
  );
};
