import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import React from "react";
import {updateCollapse} from "@/store/global/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectGlobal} from "@/store/global/selectors";
import {AppDispatch} from "@/store";

const CollapseIcon = () => {
  const {collapsed} = useSelector(selectGlobal);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <span
      style={{
        cursor: "pointer",
        transition: "color 0.3s",
      }}
      onClick={() => dispatch(updateCollapse(!collapsed))}
    >
      {
        collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>
      }
    </span>
  );

};
export default CollapseIcon;