import React from 'react';
import SystemSettings
  from '@/page/Layout/components/Header/ToolBarRight/SystemSettings.jsx';
import FullScreenIcon
  from '@/page/Layout/components/Header/ToolBarRight/FullScreenIcon';
import UserAvatar
  from '@/page/Layout/components/Header/ToolBarRight/UserAvatar.jsx';

const HeaderRight = (props) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}
         align={'center'} size={'middle'}>
      <FullScreenIcon/>
      <SystemSettings/>
      <UserAvatar/>
    </div>
  );

};
export default HeaderRight;