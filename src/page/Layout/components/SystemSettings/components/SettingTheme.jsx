import {Divider, Form, Space, Switch} from 'antd';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import React, {memo, useLayoutEffect} from 'react';
import {changeColorPrimary, changeTheme} from '@/store/theme/actions';
import {connect, shallowEqual, useSelector} from 'react-redux';
import {HuePicker} from 'react-color';

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
    <>

      <Divider>主题设置</Divider>
      <Form
        initialValues={{
          colorPrimary: colorPrimary,
          isGrey: isGrey,
          isColorWeakness: isColorWeakness,
        }}
      >
        <Space style={{
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <div>灰色模式</div>
          <Form.Item name="isGrey" valuePropName={'checked'}>
            <Switch
              checkedChildren={<CheckOutlined/>}
              unCheckedChildren={<CloseOutlined/>}
              checked={isGrey === true}
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
        <Form.Item valuePropName={'color'} name="colorPrimary"
                   label="主题色">
          <HuePicker onChange={({hex}) => changeColorPrimary(hex)}/>
        </Form.Item>
      </Form>
    </>
  );
});

export default connect(null, {changeTheme, changeColorPrimary})(SettingTheme);