import {Layout} from 'antd';
import React from 'react';
import {Warp} from '@/page/Layout/style';
import LandscapeHeader from '@/page/Layout/LandscapeLayout/Header';
import LayoutContent from '@/page/Layout/Content';
import LayoutFooter from '@/page/Layout/Footer';

const {Header} = Layout;

const LandscapeLayout = () => {
  return (
    <Warp>
      <Layout style={{height: '100%'}}>
        <Layout className="site-layout">
          <Header
            className="layout-header"
            style={{padding:"0"}}
          >
             <LandscapeHeader/>
          </Header>
          <LayoutContent/>
          <LayoutFooter/>
        </Layout>
      </Layout>
    </Warp>
  );
};
export default LandscapeLayout;
