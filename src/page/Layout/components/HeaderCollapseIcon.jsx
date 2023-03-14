import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import React from 'react';
import {updateCollapse} from '@/store/global/actions.js';
import {connect} from 'react-redux';

const HeaderCollapseIcon = props => {
  const {collapsed, updateCollapse} = props;
  return (
    <span
      style={{
        cursor: 'pointer',
        transition: 'color 0.3s',
      }}
      onClick={() => updateCollapse(!collapsed)}
    >
      {
        collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>
      }
    </span>
  );

};
export default connect(state => state.global, {updateCollapse})(HeaderCollapseIcon);