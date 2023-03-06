import HeaderBreadcrumb
  from '@/page/Layout/components/Header/ToolBarLeft/Header-Breadcrumb.jsx';
import HeaderRight
  from '@/page/Layout/components/Header/ToolBarRight/index.jsx';
import HeaderTabs
  from '@/page/Layout/components/Header/HeaderTabs/Header-Tabs.jsx';
import React, {useState} from 'react';
import CollapseIcon
  from '@/page/Layout/components/Header/ToolBarLeft/HeaderCollapseIcon.jsx';
import {Divider} from 'antd';
import Auth from '@/components/Auth.jsx';
import {useSelector} from 'react-redux';

export default (props) => {
  const {pageConfig} = useSelector(state => state.topHeader);
  const {layoutItems} = pageConfig ?? {};
  return (
    <div>
      <div style={{
        display: 'flex', 'alignItems': 'center', gap: '10px', height: '38px',
      }}>
        <CollapseIcon/>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}>
          <Auth
            auth={layoutItems?.includes('breadcrumb')}
            render={() => <HeaderBreadcrumb/>
            }
            fallback={<span></span>}
          />
          <HeaderRight/>
        </div>
      </div>
      <Divider style={{margin: '4px 0'}}></Divider>
      {
        layoutItems?.includes('tabs') && <HeaderTabs/>
      }
    </div>);
}