import {DownOutlined} from "@ant-design/icons";
import {Dropdown, Space} from "antd";
import {useLocation, useNavigate} from "react-router-dom";
import {deleteAllTab, deleteCurrentTab, deleteOtherTab,} from "@/store/topHeader/actions";
import {useDispatch} from "react-redux";
import React from "react";
import {AppDispatch} from "@/store";

const items = [
  {
    label: "关闭当前",
    key: "current",
  },
  {
    label: "关闭其他",
    key: "other",
  },
  {
    label: "关闭所有",
    key: "all",
  },
];
const TabBarExtraRight = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const onClick = ({key}: { key: string }) => {
    if (key === "current") {
      return dispatch(deleteCurrentTab(pathname)).then(({key}) => navigate(key));
    }
    if (key === "other") return dispatch(deleteOtherTab(pathname));
    if (key === "all") return dispatch(deleteAllTab(pathname)).finally(() => {
      navigate("/home");
    });
  };
  return (<Space align={"center"}>
    <Dropdown menu={{items, onClick}}>
      <Space style={{cursor: "pointer"}}>
        <DownOutlined/>
      </Space>
    </Dropdown>
  </Space>);
};

export default TabBarExtraRight;