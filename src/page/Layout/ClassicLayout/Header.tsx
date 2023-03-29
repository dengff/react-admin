import HeaderBreadcrumb from '@/page/Layout/components/Breadcrumb';
import HeaderRight from '@/page/Layout/Header/HeaderRight';
import HeaderTabs from '@/page/Layout/components/NavTabs';
import React from 'react';
import CollapseIcon from '@/page/Layout/components/CollapseIcon';
import {Divider} from 'antd';
import {Warp} from './style';

export default () => {
  return (
    <Warp>
      <div className="classic-header">
        <CollapseIcon/>
        <div className="classic-header-content">
          <HeaderBreadcrumb/>
          <HeaderRight/>
        </div>
      </div>
      <Divider style={{margin: '4px 0'}}></Divider>
      <HeaderTabs/>
    </Warp>);
}