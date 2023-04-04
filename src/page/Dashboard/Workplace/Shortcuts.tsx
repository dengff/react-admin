import {ProCard} from "@ant-design/pro-components";
import {UserOutlined} from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import {message} from "antd";
import {
  AuthIcon,
  DashboardIcon,
  FormIcon,
  SystemIcon,
  TableIcon,
} from "@/components/Icon";
import {useNavigate} from "react-router-dom";

const Warp = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, 1fr);

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      color: #1677ff;
      background: #f7f8fa;
    }
  }

`;
type Shortcuts = {
  title: string
  icon: JSX.Element
  path?: string
}[]
const shortcuts: Shortcuts = [
  {title: "个人中心", icon: <UserOutlined/>, path: "/user/info"},
  {title: "主控台", icon: <DashboardIcon/>},
  {title: "表单", icon: <FormIcon/>},
  {title: "权限管理", icon: <AuthIcon/>, path: "/auth/comp"},
  {title: "系统设置", icon: <SystemIcon/>},
  {title: "表格", icon: <TableIcon/>},
];
const recentShortcuts = [
  {title: "系统设置", icon: <SystemIcon/>},
  {title: "表格", icon: <TableIcon/>},
  {title: "表单", icon: <FormIcon/>},
  {title: "权限管理", icon: <AuthIcon/>, path: "/auth/comp"},
];
const Item = (props: { list: Shortcuts }) => {
  const navigate = useNavigate();
  const {list = []} = props;
  const handelClick = ({title, path}: { title: string, path?: string }) => {
    path && navigate(path);
    message.info(title);

  };
  return (
    <div>
      <Warp>
        {list.map(item => (
          <div onClick={() => handelClick(item)} key={item.title}
               className={"item"}>
            <div>{item.icon}</div>
            <div style={{fontSize: "12px"}}>{item.title}</div>

          </div>))}
      </Warp>
    </div>

  );
};
export const Shortcuts = () => {
  return (
    <ProCard.Group>
      <ProCard split={"horizontal"}>
        <ProCard title="快捷入口" extra={<a>查看更多</a>}>
          <Item list={shortcuts}/>
        </ProCard>
        <ProCard title="最近访问">
          <Item list={recentShortcuts}/>
        </ProCard>
      </ProCard>
    </ProCard.Group>
  );
};
export default Shortcuts;