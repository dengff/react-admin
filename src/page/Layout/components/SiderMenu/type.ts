import React from "react";
import type {MenuProps} from "antd";


export type IProps = MenuProps & {
  menuRef: MenuRef
}
export type SetOpenKeys = {
  setOpenKeys: React.Dispatch<React.SetStateAction<string[]>>
}
export type MenuRef = React.RefObject<SetOpenKeys>