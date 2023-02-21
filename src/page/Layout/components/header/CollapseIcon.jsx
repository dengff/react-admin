import style from '@/page/Layout/index.module.scss';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import React, {useState} from 'react';
import {updateCollapse} from '@/store/global/actions.js';
import {useSelector} from 'react-redux';
import {connect} from 'react-redux';

const CollapseIcon = props => {
  const {collapsed, updateCollapse} = props;
  return (
    <>
    <span
      onClick={() => updateCollapse(!collapsed)}
      className={style.collapsed}
    >
            {
              collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>
            }
          </span>
    </>
  );

};
export default connect(state => state.global, {updateCollapse})(CollapseIcon);