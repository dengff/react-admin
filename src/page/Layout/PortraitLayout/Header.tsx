import HeaderBreadcrumb from '@/page/Layout/components/Breadcrumb';
import HeaderRight from '@/page/Layout/Header/HeaderRight';
import React from 'react';
import CollapseIcon from '@/page/Layout/components/CollapseIcon';
import {Warp} from './style';
import Logo from '@/page/Layout/components/Logo';

export default (props) => {
  return (
    <Warp>
      <div className="portrait-header">
        <div className="portrait-header-content">
          <div style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Logo mode={'horizontal'}/>
            <div style={{padding: '0 14px'}}>
              <CollapseIcon/>
            </div>
            <HeaderBreadcrumb/>
          </div>
          <div style={{paddingRight: '14px'}}>
            <HeaderRight/>
          </div>
        </div>
      </div>
    </Warp>);
}