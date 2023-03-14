import {Breadcrumb} from 'antd';
import React from 'react';
import {matchRoutes, useLocation} from 'react-router-dom';
import {routeConfig} from '@/router';
import Auth from '@/components/Auth';
import {useSelector} from 'react-redux';

const HeaderBreadcrumb = (props) => {
  const {pageConfig} = useSelector(state => state.topHeader);
  const {layoutItems} = pageConfig ?? {};
  const location = useLocation();
  const match = matchRoutes(routeConfig, location);
  const routeMatch = match.filter(
    item => item.pathname !== '/' && item.pathname !== '/home');
  return (
    <Auth
      auth={layoutItems?.includes('breadcrumb')}
      render={() => <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <span>首页</span>
        </Breadcrumb.Item>
        {
          routeMatch.map(item => (
            <Breadcrumb.Item key={item?.pathname}>
              <span>{item?.route?.meta?.title}</span>
            </Breadcrumb.Item>
          ))
        }
      </Breadcrumb>}
      fallback={<span></span>}
    />
  );
};

export default HeaderBreadcrumb;