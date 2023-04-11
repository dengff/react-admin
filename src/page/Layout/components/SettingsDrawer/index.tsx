import {Button, Divider, Drawer, Space, Tooltip} from "antd";
import {SettingOutlined, SyncOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import SettingPage
  from "@/page/Layout/components/SettingsDrawer/SettingPage";
import SettingTheme
  from "@/page/Layout/components/SettingsDrawer/SettingTheme";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "@/store";
import {resetTopHeaderState} from "@/store/topHeader/actions";
import {resetThemeState} from "@/store/theme/actions";

export const SystemSettings = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
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
        <Divider></Divider>
        <Space style={{width: "100%"}} direction={"vertical"}>
          <Button
            icon={<SyncOutlined/>} type={"primary"} style={{width: "100%"}}
            onClick={() => {
              dispatch(resetThemeState());
              dispatch(resetTopHeaderState());
            }}
          >重置</Button>
        </Space>
      </Drawer>
    </>
  );
};

export default SystemSettings;