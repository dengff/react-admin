import {Tag} from "antd";
import {ProCard} from "@ant-design/pro-components";
import React from "react";
import styled from "styled-components";

const Warp = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  margin-bottom: 4px;

  .content {
    flex: 1 1 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 4px;
    text-decoration: none;
    font-size: 13px;
    cursor: pointer;
  }

`;

const data = [
  {
    type: "活动",
    color: "#fff3e8",
    fontColor: "#f77234",
    key: "1",
    content: "内容最新优惠活动",
  },
  {
    type: "消息",
    color: "#e8fffb",
    fontColor: "#14c9c9",

    key: "2",
    content: "新增内容尚未通过审核，详情请点击查看。",
  },
  {
    type: "通知",
    color: "#e8f3ff",
    fontColor: "#165dff",
    key: "3",
    content: "当前产品试用期即将结束，如需续费请点击查看。",
  },
  {
    type: "通知",
    color: "#e8f3ff",
    fontColor: "#165dff",
    key: "4",
    content: "1 月新系统升级计划通知",
  },
  {
    type: "消息",
    color: "#e8fffb",
    fontColor: "#14c9c9",
    key: "5",
    content: "新增内容已经通过审核，详情请点击查看。",
  },
];
export const Announcement = () => {

  return (
    <ProCard style={{margin: "10px 0"}} title="公告" extra={<a>查看更多</a>}>
      {data.map(item => <Warp key={item.key}>
        <Tag style={{
          color: item.fontColor,
        }} color={item.color}>{item.type}</Tag>
        <span className="content">{item.content}</span>
      </Warp>)
      }


    </ProCard>
  );
};

export default Announcement;