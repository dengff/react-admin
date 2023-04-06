import {DownOutlined} from "@ant-design/icons";
import {Dropdown, Space} from "antd";
import {useLocation, useNavigate} from "react-router-dom";
import {deleteAllTab, deleteCurrentTab, deleteOtherTab,} from "@/store/topHeader/actions";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {AppDispatch} from "@/store";
import styled from "styled-components";
import {selectTheme} from "@/store/theme/selectors";

const Warp = styled.div<{ colorPrimary: string }>`
  .ant-space-item {
    cursor: pointer;
    transform: rotate(136deg);
    transition: all .3s .1s;
  }

  .ant-space-item:hover {
    transform: rotate(180deg) scale(1);
    color: ${props => props.colorPrimary};
  }
`;
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
  const {token: {colorPrimary}} = useSelector(selectTheme);
  const onClick = ({key}: { key: string }) => {
    if (key === "current") {
      return dispatch(deleteCurrentTab(pathname)).then(({key}) => navigate(key));
    }
    if (key === "other") return dispatch(deleteOtherTab(pathname));
    if (key === "all") return dispatch(deleteAllTab(pathname)).finally(() => {
      navigate("/home");
    });
  };
  return (<Warp colorPrimary={colorPrimary}><Space align={"center"}>
      <Dropdown menu={{items, onClick}}>
        <Space>
          <DownOutlined/>
        </Space>
      </Dropdown>
    </Space></Warp>
  );
};

export default TabBarExtraRight;