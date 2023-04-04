import {Dropdown, Tooltip} from "antd";
import React, {memo} from "react";
import {changeComponentSize} from "@/store/theme/actions";
import {useDispatch, useSelector} from "react-redux";
import {SizeIcon} from "@/components/Icon";
import {selectTheme} from "@/store/theme/selectors";
import type {AppDispatch} from "@/store";
import type {ComponentSize} from "@/store/theme/reducers";

const items = [
  {
    label: "默认",
    key: "middle",
    disabled: false,
  },
  {
    label: "小型",
    key: "small",
    disabled: false,
  },
  {
    label: "大型",
    key: "large",
    disabled: false,
  },
];


export const AssemblySize = memo((props) => {
  const {componentSize} = useSelector(selectTheme);
  const dispatch = useDispatch<AppDispatch>();
  const selectList = items.map(item => {
    item.disabled = item.key === componentSize;
    return item;
  });
  return (<Dropdown
    trigger={["click"]}
    menu={{
      items: selectList,
      onClick: ({key}) => {
        dispatch(changeComponentSize(key as ComponentSize));
      },
    }}>
    <Tooltip placement={"left"} title={"组件尺寸"}>
      <span
        className="anticon"
      >
        <SizeIcon/>
      </span>
    </Tooltip>
  </Dropdown>);
});

export default AssemblySize;