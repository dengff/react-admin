import React from 'react';
import {Layout} from 'antd';
import Auth from '@/components/Auth';
import {useSelector} from 'react-redux';

const {Footer} = Layout;

export default () => {
  const {pageConfig} = useSelector((state:any) => state.topHeader);
  const {layoutItems} = pageConfig ?? {};
  return (
    <Auth
      auth={layoutItems?.includes('pageFooter')}
      render={() => <Footer
        className="layout-footer"
      >
        Dengff Admin Template
      </Footer>}
    />
  );
}