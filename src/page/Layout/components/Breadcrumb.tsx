import {Breadcrumb} from 'antd';
import React from 'react';
import {matchRoutes, useLocation} from 'react-router-dom';
import {routeConfig} from '@/router';
import Auth from '@/components/Auth';
import {useSelector} from 'react-redux';

const HeaderBreadcrumb = (props) => {
  const {pageConfig} = useSelector((state: any) => state.topHeader);
  const {layoutItems} = pageConfig ?? {};
  const location = useLocation();
  const match = matchRoutes<any>(routeConfig, location);
  const routeMatch = match.map(inner => ({title: inner.route?.meta?.title}));
  return (
    <Auth
      auth={layoutItems?.includes('breadcrumb')}
      render={() => (
        <Breadcrumb separator=">" items={routeMatch}>
        </Breadcrumb>)
      }
      fallback={<span></span>}
    />
  );
};

export default HeaderBreadcrumb;