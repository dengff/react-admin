import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import React from "react";
import {updateCollapse} from "@/store/topHeader/actions";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "@/store";
import {selectTopHeader} from "@/store/topHeader/selectors";
import styled from "styled-components";
import {selectTheme} from "@/store/theme/selectors";

const Warp = styled.span<any>`
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${props => props.colorPrimary};
  }

`;
const CollapseIcon = () => {
  const {collapsed} = useSelector(selectTopHeader);
  const {token: {colorPrimary}} = useSelector(selectTheme);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Warp
      {...{colorPrimary}}
      onClick={() => dispatch(updateCollapse(!collapsed))}
    >
      {
        collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>
      }
    </Warp>
  );

};
export default CollapseIcon;