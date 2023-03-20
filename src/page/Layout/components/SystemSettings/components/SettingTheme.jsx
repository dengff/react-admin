import {Divider, Form, Popover, Space, Switch} from 'antd';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import React, {memo, useLayoutEffect} from 'react';
import {changeColorPrimary, changeTheme} from '@/store/theme/actions';
import {connect, shallowEqual, useSelector} from 'react-redux';
import {SketchPicker} from 'react-color';
import {Warp} from '@/page/Layout/components/SystemSettings/style';

const presetColors = [
  '#409EFF',
  '#DAA96E',
  '#00cf74',
  '#009688',
  '#27ae60',
  '#ff5c93',
  '#e53935',
  '#14c9c9',
  '#e74c3c',
  '#fd726d',
  '#f39c12',
  '#9b59b6'];
const SettingTheme = memo((props) => {

  const {
    changeColorPrimary,
    changeTheme,
  } = props;
  const {
    token: {colorPrimary},
    themeMode: {
      isGrey,
      isColorWeakness,
    },
  } = useSelector(state => state.theme, shallowEqual);

  // TODO 有bug 待解决
  useLayoutEffect(() => {
    changeTheme({
      isGrey: isGrey,
      isColorWeakness: isColorWeakness,
    });
  }, []);

  return (
    <Warp>

      <Divider>主题设置</Divider>
      <Form
        initialValues={{
          colorPrimary: colorPrimary,
          isGrey: isGrey,
          isColorWeakness: isColorWeakness,
        }}
      >
        <Popover
          overlayInnerStyle={{padding: '0'}}
          trigger="click"
          content={
            <Form.Item valuePropName={'color'} name="colorPrimary"
                       label="">
              <SketchPicker
                presetColors={presetColors}
                onChange={({hex}) => changeColorPrimary(hex)}
              />
            </Form.Item>
          }
          placement={'bottom'}
        >
          <Form.Item label={'主题色'}>
            <div className="theme-input">
              <div className="theme-color"
                   style={{
                     background: colorPrimary,
                   }}
              ></div>
              <span>{colorPrimary}</span>
            </div>
          </Form.Item>
        </Popover>
        <Space style={{
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <div>灰色模式</div>
          <Form.Item name="isGrey" valuePropName={'checked'}>
            <Switch
              checkedChildren={<CheckOutlined/>}
              unCheckedChildren={<CloseOutlined/>}
              checked={isGrey}
              onChange={(value) =>
                changeTheme({
                  'isGrey': value,
                  'isColorWeakness': false,
                })
              }
            />
          </Form.Item>
        </Space>
        <Space style={{
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <div>色弱模式</div>
          <Form.Item name={'isColorWeakness'} valuePropName={'checked'}>
            <Switch
              checkedChildren={<CheckOutlined/>}
              unCheckedChildren={<CloseOutlined/>}
              onChange={(value) =>
                changeTheme({
                  'isColorWeakness': value,
                  'isGrey': false,
                })
              }
            />
          </Form.Item>
        </Space>
      </Form>
    </Warp>
  );
});

export default connect(null, {changeTheme, changeColorPrimary})(SettingTheme);