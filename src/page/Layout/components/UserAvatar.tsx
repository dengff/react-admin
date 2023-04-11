import {Avatar, Dropdown, message, Modal, Space} from "antd";
import React from "react";
import {ExclamationCircleFilled, UserOutlined} from "@ant-design/icons";
import {getUserInfo, login, logout} from "@/store/global/actions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LogoutIcon, SwitchIcon} from "@/components/Icon";
import {selectGlobal} from "@/store/global/selectors";
import type {MenuProps} from "antd";
import {AppDispatch} from "@/store";

const {confirm} = Modal;

const UserAvatar = () => {
  const {userInfo, token} = useSelector(selectGlobal);
  const dispatch = useDispatch<AppDispatch>();
  const navigator = useNavigate();
  const onClick = (key: string) => {
    dispatch(login({username: key, password: "123456"})).then(res => {
      const {token} = res?.data;
      dispatch(getUserInfo(token)).then(res => message.success("success"));
    });
  };
  const items: MenuProps["items"] = [
    {
      label: <Space>
        <SwitchIcon/>
        切换角色
      </Space>,
      key: "switchRoles",
      children: [
        {
          label: (<Space onClick={event => onClick("admin")}>
            <UserOutlined/>
            Admin
          </Space>),
          key: "admin",
          disabled:token === 'admin'
        },
        {
          label: (<Space onClick={event => onClick("editor")}>
            <UserOutlined/>
            Editor
          </Space>),
          key: "editor",
          disabled:token === 'editor'
        },
        {
          label: (<Space onClick={event => onClick("guest")}>
            <UserOutlined/>
            Guest
          </Space>),
          key: "guest",
          disabled:token === 'guest'
        },
      ]
    },
    {
      label: (<Space
        onClick={(e) => {
          navigator("/user/info");
        }}>
        <UserOutlined/>
        个人中心
      </Space>),
      key: "/user/info",
    },
    {
      type: "divider",
      key: "divider"
    },
    {
      label: (<Space
        onClick={() => {
          confirm({
            title: "温馨提示",
            icon: <ExclamationCircleFilled/>,
            content: "是否确认退出",
            onOk() {
              dispatch(logout(token));
            },
          });
        }}>
        <LogoutIcon/>
        退出登录
      </Space>),
      key: "logout",
    },
  ];
  return (
    <Dropdown placement={"bottomLeft"} menu={{items}}>
      <Avatar
        style={{
          cursor: "pointer",
        }}
        size={28}
        src={<img src={userInfo?.avatar} alt="avatar"/>}
      >
      </Avatar>
    </Dropdown>
  );
};

export default UserAvatar;