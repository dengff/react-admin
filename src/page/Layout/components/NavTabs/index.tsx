import {Tabs} from "antd";
import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {currentRoute} from "@/utils";
import {addTabs, deleteCurrentTab} from "@/store/topHeader/actions";
import TabBarExtraRight from "@/page/Layout/components/NavTabs/TabBarExtraRight";
import {AuthControl} from "@/components/Auth";
import {selectTopHeader} from "@/store/topHeader/selectors";
import type {TopHeader} from "@/store/topHeader/reducers";
import type {AppDispatch, RootState} from "@/store";

const HeaderTabs = (props: { style?: React.CSSProperties }) => {
  const {style} = props;
  const {route} = currentRoute();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  let {tabList, activeKey, pageConfig} = useSelector<RootState, TopHeader>(selectTopHeader, shallowEqual);
  const {layoutItems} = pageConfig ?? {};
  useEffect(() => {
    const {pathname} = location;
    dispatch(addTabs(route, pathname));
  }, [location.pathname]);

  const onEdit = (targetKey: string) => {
    dispatch(deleteCurrentTab(targetKey)).then(({key}: { key: string }) => navigate(key));
  };
  const onTabClick = (key: string) => navigate(key);
  return (
    <AuthControl
      permissionControl={() => layoutItems?.includes("tabs")}
    >
      <Tabs
        type="editable-card"
        hideAdd
        size={"small"}
        onChange={() => {
        }}
        tabBarGutter={-1}
        animated
        onEdit={targetKey => onEdit(targetKey as string)}
        onTabClick={onTabClick}
        activeKey={activeKey}
        items={tabList}
        tabBarExtraContent={<TabBarExtraRight/>}
        style={style}
      />
    </AuthControl>
  );
};

export default HeaderTabs;