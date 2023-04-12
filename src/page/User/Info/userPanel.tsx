import {Avatar, Space, Tag} from "antd";
import {GithubOutlined, UserOutlined} from "@ant-design/icons";
import {LocationIcon} from "@/components/Icon";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {useMemo} from "react";
import {getLightColor} from "@/utils/colorTools";
import React from "react";
import {selectGlobal} from "@/store/global/selectors";
import {selectTheme} from "@/store/theme/selectors";

const Warp = styled.div<{ BGColor?: string | false }>`
  height: 240px;
  display: flex;
  position: relative;
  background: ${(props) => `linear-gradient(128deg, ${props?.BGColor}, #72ece933)`};

  .user-mes {
    width: 100%;
    justify-content: center;
    flex-direction: column;
    gap: 14px !important;
  }
`;

const tagList = [
  {
    tagColor: "rgba(180,129,224,0.26)",
    text: "react 18",
    textColor: "#752aa8",
  },
  {
    tagColor: "rgba(125,234,154,0.37)",
    text: "redux",
    textColor: "#17d543",
  },
  {
    tagColor: "rgba(222,116,105,0.29)",
    text: "react-router V6",
    textColor: "rgba(213,39,23,0.82)",
  },
  {
    tagColor: "rgba(252,129,171,0.36)",
    text: "antd design",
    textColor: "#FF5C93",
  },
  {
    tagColor: "rgba(152,236,220,0.47)",
    text: "vite",
    textColor: "#14c9c9",
  },
  {
    tagColor: "#bdcef5",
    text: "webpack 5",
    textColor: "#165dff",
  },

];
const UserPanel = () => {
  const {userInfo} = useSelector(selectGlobal);
  const {token: {colorPrimary}} = useSelector(selectTheme);
  const BGColor = useMemo(() => getLightColor(colorPrimary, 0.82), [colorPrimary]);

  return (
    <Warp BGColor={BGColor}>
      <Space direction={"horizontal"} className="user-mes">
        <Avatar size={66} src={userInfo?.avatar}></Avatar>
        <span>{userInfo?.name}</span>
        <div style={{display: "flex", gap: "32px"}}>
          <Space>
            <UserOutlined/>
            前端开发工程师
          </Space>
          <Space>
            <LocationIcon/>
            广州
          </Space>

          <Space><GithubOutlined/>
            <a target={'_blank'} href={'https://github.com/dengff/react-admin'}>https://github.com/dengff/react-admin</a>
          </Space>

        </div>
        <Space>
          <span>标签：</span>
          {
            tagList.map(item => <Tag key={item.text} color={item.tagColor}>
            <span style={{color: item.textColor}}>
                {item.text}
            </span>
            </Tag>)
          }
        </Space>
      </Space>

    </Warp>
  );
};
export default UserPanel;