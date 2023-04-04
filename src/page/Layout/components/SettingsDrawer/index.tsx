import {Drawer, Tooltip} from "antd";
import {SettingOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import SettingPage
  from "@/page/Layout/components/SettingsDrawer/SettingPage";
import SettingTheme
  from "@/page/Layout/components/SettingsDrawer/SettingTheme";

export const SystemSettings = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  function handleClick() {
    setOpen(true);
  }

  return (
    <>
      <Tooltip
        style={{display: "flex", alignItems: "center"}}
        placement="bottom"
        title={"系统设置"}
      >
        <SettingOutlined onClick={handleClick}/>
      </Tooltip>
      <Drawer
        title="系统设置"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <SettingPage/>
        <SettingTheme/>

      </Drawer>
    </>
  );
};

export default SystemSettings;