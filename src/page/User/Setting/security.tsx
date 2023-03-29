import {List} from 'antd';
import React from 'react';

const data = [
  {
    title: '登陆密码',
    description: '已设置。密码至少6位字符，支持数字、字母和除空格外的特殊字符，且必须同时包含数字和大小写字母。',
    actionText:"修改"
  },
  {
    title: '密保问题',
    description: '您暂未设置密保问题，密保问题可以有效的保护账号的安全。',
    actionText:"设置"
  },
  {
    title: '实名认证',
    description: '您暂未实名登记，实名登记可以有效的保护账号的安全。',
    actionText:"认证"
  },
  {
    title: '安全手机',
    description: '已绑定： 177******10',
    actionText:"修改"
  },
  {
    title: '安全邮箱',
    description: '您暂未设置邮箱，绑定邮箱可以用来找回密码、接收通知等。',
    actionText:"设置"
  },
];

const Security = () => {

  return (

    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[<a key="list-load-more">{item.actionText}</a>]}
        >
          <List.Item.Meta
            title={<a>{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );

};

export default Security;