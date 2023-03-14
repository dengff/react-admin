import HeaderBreadcrumb from '@/page/Layout/components/Header-Breadcrumb.jsx';
import HeaderRight from '@/page/Layout/Header/HeaderRight';
import HeaderTabs from '@/page/Layout/components/TabsLayout/Header-Tabs.jsx';
import React from 'react';
import CollapseIcon from '@/page/Layout/components/HeaderCollapseIcon.jsx';
import {Divider} from 'antd';
import {Warp} from './style';

export default (props) => {
  return (
    <Warp>
      <div className="classic-header">
        <CollapseIcon mode={'inline'}/>
        <div className="classic-header-content">
          <HeaderBreadcrumb/>
          <HeaderRight/>
        </div>
      </div>
      <Divider style={{margin: '4px 0'}}></Divider>
      <HeaderTabs/>
    </Warp>);
}