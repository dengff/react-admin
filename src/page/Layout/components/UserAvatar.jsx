import {Avatar, Dropdown, Modal} from 'antd';
import React from 'react';
import {ExclamationCircleFilled, UserOutlined} from '@ant-design/icons';
import {logout} from '@/store/global/actions.js';
import {connect, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {LogoutIcon} from '@/components/Icon';
const {confirm} = Modal;

const UserAvatar = (props)=>{
  const {userInfo, token} = useSelector(state => state.global);
  const {logout} = props;
const navigator = useNavigate()
  const items = [
    {
      label: '个人中心',
      key: '/user/info',
      icon: <UserOutlined/>
    },
    {
      label: '退出登录',
      key: 'logout',
      icon: <LogoutIcon/>
    },
  ];

  function handleClick({key}) {
    if (key === 'logout') {
      confirm({
        title: '温馨提示',
        icon: <ExclamationCircleFilled/>,
        content: '是否确认退出',
        onOk() {
          logout(token);
        },
        onCancel() {
        },
      });
    }
    if(key === "/user/info") return navigator(key)
  }

  return (
    <Dropdown placement={"bottomLeft"} menu={{items, onClick: handleClick}}>
      <Avatar
        style={{
          cursor:"pointer"
        }}
        size={28}
        src={<img src={userInfo?.avatar} alt="avatar"/>}
      >
      </Avatar>
    </Dropdown>
  )
}

export default connect(null,{logout})(UserAvatar)