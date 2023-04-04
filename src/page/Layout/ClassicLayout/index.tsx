import {Warp} from "@/page/Layout/style";
import {Layout} from "antd";
import Logo from "@/page/Layout/components/Logo";
import MenuLayout from "@/page/Layout/components/SiderMenu";
import ClassicHeader from "./Header";
import LayoutContent from "@/page/Layout/Content";
import LayoutFooter from "@/page/Layout/Footer";
import React from "react";
import {shallowEqual, useSelector} from "react-redux";
import {useDefaultOpenKeys} from "@/page/Layout/components/SiderMenu/hooks";
import {selectGlobal} from "@/store/global/selectors";

const {Header, Sider} = Layout;

export const ClassicLayout = () => {
  const {collapsed} = useSelector(selectGlobal, shallowEqual);
  const [ref] = useDefaultOpenKeys();
  return (

    <Warp>
      <Layout style={{height: "100%"}}>
        <Sider style={{background: "#fff"}} trigger={null} collapsible
               collapsed={collapsed}>
          <Logo mode={"classicLayout"}/>
          <div className="scrollbar">
            <MenuLayout menuRef={ref} theme={"light"}/>
          </div>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="layout-header"
            style={{padding: "0 14px"}}
          >
            <ClassicHeader/>
          </Header>
          <LayoutContent/>
          <LayoutFooter/>
        </Layout>
      </Layout>

    </Warp>

  );
};

export default ClassicLayout;