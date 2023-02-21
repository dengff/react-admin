import HeaderBreadcrumb
  from '@/page/Layout/components/header/Header-Breadcrumb.jsx';
import HeaderRight from '@/page/Layout/components/header/Header-right.jsx';
import HeaderTabs from '@/page/Layout/components/header/Header-Tabs.jsx';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import React, {useState} from 'react';
import CollapseIcon from '@/page/Layout/components/header/CollapseIcon.jsx';
import {Col, Row} from 'antd';

export default (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return <>
    <div>
      <div style={{
        display: 'flex', 'alignItems': 'center', gap: '10px', height: '46px',
      }}>
        <CollapseIcon/>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}>
          <HeaderBreadcrumb/>
          <HeaderRight/>
        </div>
      </div>
      <HeaderTabs/>
    </div>

  </>;
}