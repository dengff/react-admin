import React from 'react';
import SystemSettings
  from '@/page/Layout/components/SettingsDrawer';
import FullScreenIcon
  from '@/page/Layout/components/FullScreenIcon';
import UserAvatar
  from '@/page/Layout/components/UserAvatar';
import AssemblySize
  from '@/page/Layout/components/AssemblySize';

const HeaderRight = (props) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
      <AssemblySize/>
      <FullScreenIcon/>
      <SystemSettings/>
      <UserAvatar/>
    </div>
  );

};
export default HeaderRight;