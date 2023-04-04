import React from "react";
import {Layout} from "antd";
import {AuthControl} from "@/components/Auth";
import {useSelector} from "react-redux";
import {selectTopHeader} from "@/store/topHeader/selectors";

const {Footer} = Layout;

export default () => {
  const {pageConfig} = useSelector(selectTopHeader);
  const {layoutItems} = pageConfig ?? {};
  return (
    <AuthControl
      permissionControl={() => layoutItems?.includes("pageFooter")}
    >
      <Footer
        className="layout-footer"
      >
        Dengff Admin Template
      </Footer>
    </AuthControl>
  );
}