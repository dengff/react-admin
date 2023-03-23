import HeaderRight from '@/page/Layout/Header/HeaderRight';
import {Divider} from 'antd';
import HeaderTabs from '@/page/Layout/components/TabsLayout/Header-Tabs';
import React, {useEffect, useRef} from 'react';
import Logo from '@/page/Layout/components/Logo';
import MenuLayout from '@/page/Layout/components/MenuLayout';
import {Warp} from './style';

export const LandscapeHeader = () => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current?.setOpenKeys([]);
  }, []);
  return (
    <Warp>
      <div className="horizontal-top-header">
        <div className="top-header-content">
          <div style={{display: 'flex', overflow: 'hidden'}}>
            <Logo mode={'horizontal'}/>
            <MenuLayout
              theme={"light"}
              ref={ref} mode={'horizontal'}
              style={{
                height: '50px', lineHeight: '50px',
                width: 'calc(100% - 200px)',
              }}/>
          </div>
          <div className="top-header-right">
            <HeaderRight/>
          </div>
        </div>
        <div style={{padding: '0 8px'}}>
          <Divider style={{margin: '4px 0'}}></Divider>
          <HeaderTabs/>
        </div>
      </div>
    </Warp>
  );
};

export default LandscapeHeader;