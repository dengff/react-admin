import {ProCard} from '@ant-design/pro-components';
import {UserOutlined} from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import {message} from 'antd';

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

const shortcuts = [
  {title: '主控台', icon: <UserOutlined/>},
  {title: '列表', icon: <UserOutlined/>},
  {title: '表单', icon: <UserOutlined/>},
  {title: '权限管理', icon: <UserOutlined/>},
  {title: '系统管理', icon: <UserOutlined/>},
  {title: '消息', icon: <UserOutlined/>},
  {title: '系统设置', icon: <UserOutlined/>},
  {title: '表格', icon: <UserOutlined/>},
];
const recentShortcuts = [
  {title: '系统设置', icon: <UserOutlined/>},
  {title: '表格', icon: <UserOutlined/>},
  {title: '表单', icon: <UserOutlined/>},
  {title: '权限管理', icon: <UserOutlined/>},
];
const Item = (props) => {
  const {list = []} = props;
  const handelClick = ({title}) => {
    message.info(title);
  };
  return (
    <div>
      <Warp>
        {list.map(item => (
          <div onClick={() => handelClick(item)} key={item.title}
               className={'item'}>
            <div>{item.icon}</div>
            <div style={{fontSize:"12px"}}>{item.title}</div>

          </div>))}
      </Warp>
    </div>

  );
};
export const Shortcuts = () => {
  return (
    <ProCard.Group>
      <ProCard split={'horizontal'}>
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