import {Breadcrumb} from "antd";
import React from "react";
import {AuthControl} from "@/components/Auth";
import {useSelector} from "react-redux";
import {selectTopHeader} from "@/store/topHeader/selectors";
import {currentRoute} from "@/utils";


const HeaderBreadcrumb = () => {
  const {pageConfig} = useSelector(selectTopHeader);
  const {layoutItems} = pageConfig ?? {};
  const {matches} = currentRoute();
  const routeMatch = matches.map(inner => ({title: inner.route?.meta?.title}));
  return (
    <AuthControl
      permissionControl={() => !!layoutItems?.includes("breadcrumb")}
      backup={<span></span>}
    >
      <Breadcrumb separator=">" items={routeMatch}/>
    </AuthControl>
  );
};

export default HeaderBreadcrumb;