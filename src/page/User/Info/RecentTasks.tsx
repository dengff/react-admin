import {Avatar, List} from "antd";
import {ProCard} from "@ant-design/pro-components";
import React from "react";

const data = [
  {
    title: "System Bug Fix",
    description: "ASP系统***模块bug修复",
  },
  {
    title: "System Feat",
    description: "ASP系统***新增订单模块",
  },
  {
    title: "System Feat",
    description: "ASP系统新增安全认证功能",
  },
  {
    title: "Bug Fix",
    description: "ASP系统***修复打印显示错位异常",
  }, {
    title: "Bug Fix",
    description: "CMS系统***修复菜单显示",
  },
];
const RecentTasks = () => {
  return (
    <ProCard title="任务通知" extra={<a>更多</a>}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar
                src={`https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=images&key=${index}`}/>}
              title={<a>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </ProCard>
  );
};

export default RecentTasks;