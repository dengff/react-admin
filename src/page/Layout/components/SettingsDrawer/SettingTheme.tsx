import {Divider, Form, Space, Switch} from "antd";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";
import React, {memo, useLayoutEffect} from "react";
import {changeColorPrimary, changeTheme} from "@/store/theme/actions";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {ThemeIcon} from "@/components/Icon";
import ColorPicker from "@/components/ColorPicker";
import {selectTheme} from "@/store/theme/selectors";
import type {ITheme} from "@/store/theme/reducers";
import type {AppDispatch, RootState} from "@/store";

const SettingTheme = memo(() => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    token: {colorPrimary},
    themeMode: {
      isGrey,
      isColorWeakness,
    }
  } = useSelector<RootState, ITheme>(selectTheme, shallowEqual);

  // TODO 有bug 待解决
  useLayoutEffect(() => {
    dispatch(changeTheme({
      isGrey: isGrey,
      isColorWeakness: isColorWeakness,
    }));

  }, []);

  return (
    <>
      <Divider><Space>
        <ThemeIcon/>主题设置
      </Space></Divider>
      <Form
        initialValues={{
          colorPrimary: colorPrimary,
          isGrey: isGrey,
          isColorWeakness: isColorWeakness,
        }}
      >
        <Form.Item valuePropName={"color"} name="colorPrimary"
                   label="主题色">
          <ColorPicker currentColor={colorPrimary} onChange={(value) => {
            console.log(value);
            dispatch(changeColorPrimary(value.hex));

          }}/>
        </Form.Item>
        <Space style={{
          justifyContent: "space-between",
          width: "100%",
        }}>
          <div>灰色模式：</div>
          <Form.Item name="isGrey" valuePropName={"checked"}>
            <Switch
              checkedChildren={<CheckOutlined/>}
              unCheckedChildren={<CloseOutlined/>}
              checked={isGrey}
              onChange={(value) =>
                dispatch(changeTheme({
                    "isGrey": value,
                    "isColorWeakness": false,
                  })
                )
              }
            />
          </Form.Item>
        </Space>
        <Space style={{
          justifyContent: "space-between",
          width: "100%",
        }}>
          <div>色弱模式：</div>
          <Form.Item name={"isColorWeakness"} valuePropName={"checked"}>
            <Switch
              checkedChildren={<CheckOutlined/>}
              unCheckedChildren={<CloseOutlined/>}
              onChange={(value) =>
                dispatch(
                  changeTheme({
                    "isColorWeakness": value,
                    "isGrey": false,
                  })
                )
              }
            />
          </Form.Item>
        </Space>
      </Form>
    </>
  );
});

export default SettingTheme;