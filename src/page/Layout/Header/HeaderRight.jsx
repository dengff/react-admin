import React from 'react';
import SystemSettings
  from '@/page/Layout/components/SystemSettings';
import FullScreenIcon
  from '@/page/Layout/components/FullScreenIcon';
import UserAvatar
  from '@/page/Layout/components/UserAvatar.jsx';
import AssemblySize
  from '@/page/Layout/components/AssemblySize';

const HeaderRight = (props) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}
         align={'center'}>
      <AssemblySize/>
      <FullScreenIcon/>
      <SystemSettings/>
      <UserAvatar/>
    </div>
  );

};
export default HeaderRight;