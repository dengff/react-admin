import {Outlet} from "react-router-dom";
import React from "react";
import {Layout} from "antd";

const {Content} = Layout;

export default () => {

  return (
    <Content className={"layout-content"}>
      <Outlet/>
    </Content>
  );
}