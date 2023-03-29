import {WaterMark} from '@ant-design/pro-components';
import type {WaterMarkProps} from "@ant-design/pro-components"
import React from 'react';
const AuthPage = (props:WaterMarkProps) => {

  return (
    <WaterMark {...props} style={{height: '100%'}}>
      <div style={{height: '100%'}}>
      </div>
    </WaterMark>);
};

export default AuthPage;