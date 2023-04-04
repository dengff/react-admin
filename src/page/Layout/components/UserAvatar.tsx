import {Avatar, Dropdown, Modal} from "antd";
import React from "react";
import {ExclamationCircleFilled, UserOutlined} from "@ant-design/icons";
import {logout} from "@/store/global/actions";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LogoutIcon} from "@/components/Icon";
import {selectGlobal} from "@/store/global/selectors";

const {confirm} = Modal;

const UserAvatar = () => {
  const {userInfo, token} = useSelector(selectGlobal);
  const dispatch = useDispatch<any>();
  const navigator = useNavigate();
  const items = [
    {
      label: <span onClick={(e) => {
        navigator("/user/info");
      }
      }>
        个人中心
      </span>,
      key: "/user/info",
      icon: <UserOutlined/>,
    },
    {
      label: <span onClick={() => {
        confirm({
          title: "温馨提示",
          icon: <ExclamationCircleFilled/>,
          content: "是否确认退出",
          onOk() {
            dispatch(logout(token));
          },
        });
      }}>
        退出登录
      </span>,
      key: "logout",
      icon: <LogoutIcon/>,
    },
  ];
  return (
    <Dropdown trigger={["click"]} placement={"bottomLeft"} menu={{items}}>
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