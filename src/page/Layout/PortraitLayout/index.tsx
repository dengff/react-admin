import MenuLayout from "@/page/Layout/components/SiderMenu";
import {Layout} from "antd";
import LayoutContent from "@/page/Layout/Content";
import LayoutFooter from "@/page/Layout/Footer";
import React from "react";
import {Warp} from "@/page/Layout/style";
import PortraitHeader from "@/page/Layout/PortraitLayout/Header";
import HeaderTabs from "@/page/Layout/components/NavTabs";
import {shallowEqual, useSelector} from "react-redux";
import {useDefaultOpenKeys} from "@/page/Layout/components/SiderMenu/hooks";
import {selectTopHeader} from "@/store/topHeader/selectors";
import {TopHeader} from "@/store/topHeader/reducers";

const {Header, Sider} = Layout;

export const PortraitLayout = () => {
  const {collapsed} = useSelector<any, TopHeader>(selectTopHeader, shallowEqual);
  const [ref] = useDefaultOpenKeys();
  return (
    <Warp>
      <Layout style={{height: "100%"}}>
        <Header style={{
          padding: "0 0px",
          background: "#fff",
          height: "auto",
        }}>
          <PortraitHeader/>
        </Header>
        <Layout>
          <Sider
            style={{background: "#fff"}}
            trigger={null}
            collapsible
            collapsed={collapsed}>
            <div className="scrollbar">
              <MenuLayout menuRef={ref} theme={"light"}/>
            </div>
          </Sider>
          <Layout className="site-layout">
            <HeaderTabs style={{
              paddingRight: "14px",
              height: "38px",
              background: "#fff",
            }}/>
            <LayoutContent/>
            <LayoutFooter/>
          </Layout>
        </Layout>
      </Layout>

    </Warp>
  );
};

export default PortraitLayout;