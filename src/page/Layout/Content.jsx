import {Outlet} from 'react-router-dom';
import React from 'react';
import {Layout} from 'antd';

const {Content} = Layout;

export default () => {

  return (
    <Content className={'layout-content'}>
      <section className={'layout-content-section'}
               style={{padding: '6px 6px', height: '100%'}}>
        <Outlet/>
      </section>
    </Content>
  );
}