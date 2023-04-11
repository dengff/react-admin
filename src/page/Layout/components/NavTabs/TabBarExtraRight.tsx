import {DownOutlined} from "@ant-design/icons";
import {Dropdown, Space} from "antd";
import {useLocation, useNavigate} from "react-router-dom";
import {deleteAllTab, deleteCurrentTab, deleteOtherTab,} from "@/store/topHeader/actions";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {AppDispatch} from "@/store";
import styled from "styled-components";
import {selectTheme} from "@/store/theme/selectors";
import {CloseAllIcon, CloseCurIcon, CloseOtherIcon} from "@/components/Icon";

const Warp = styled.div<{ colorPrimary: string }>`
  .ant-space-item {
    cursor: pointer;
  }

  .ant-space-item:hover {
    color: ${props => props.colorPrimary};
    background-color: #f7f8fa;
  }
`;
const TabBarExtraRight = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {token: {colorPrimary}} = useSelector(selectTheme);
  const items = [
    {
      label: (<Space
        onClick={() => {
          dispatch(deleteCurrentTab(pathname)).then(({key}) => navigate(key));
        }}
      >
        <CloseCurIcon/>
        关闭当前
      </Space>),
      key: "current",
    },
    {
      label: (<Space
        onClick={() => {
          dispatch(deleteOtherTab(pathname));
        }}>
        <CloseOtherIcon/>
        关闭其他
      </Space>),
      key: "other",
    },
    {
      label: (<Space
        onClick={() => {
          dispatch(deleteAllTab(pathname)).finally(() => {
            navigate("/home");
          });
        }}
      >
        <CloseAllIcon/>
        关闭所有</Space>),
      key: "all",
    },
  ];
  return (<Warp colorPrimary={colorPrimary}><Space align={"center"}>
      <Dropdown menu={{items}}>
        <Space>
          <DownOutlined/>
        </Space>
      </Dropdown>
    </Space></Warp>
  );
};

export default TabBarExtraRight;