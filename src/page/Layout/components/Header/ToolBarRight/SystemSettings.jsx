import {Divider, Drawer, Form, Space, Switch, Tooltip} from 'antd';
import {CheckOutlined, CloseOutlined, SettingOutlined} from '@ant-design/icons';
import React, {useState, useLayoutEffect} from 'react';
import {ProForm, ProFormCheckbox} from '@ant-design/pro-components';
import {changeLayout} from '@/store/topHeader/actions.js';
import {changeColorPrimary, changeTheme} from '@/store/theme/actions';
import {connect, useSelector} from 'react-redux';
import {HuePicker} from 'react-color';

const showComps = [
  {
    value: 'tabs',
    label: '标签页',
  },
  {
    value: 'breadcrumb',
    label: '面包屑',
  },
  {
    value: 'logo',
    label: 'Logo',
  },
  {
    value: 'pageFooter',
    label: '页脚',
  },
];

export const SystemSettings = (props) => {
  const [open, setOpen] = useState(false);
  const {
    changeLayout,
    pageConfig = {},
    changeColorPrimary,
    changeTheme,
  } = props;
  const {layoutItems} = pageConfig;
  const {
    token: {colorPrimary},
    themeMode: {
      isGrey,
      isColorWeakness,
    },
  } = useSelector(state => state.theme);

  // TODO 有bug 待解决
  useLayoutEffect(() => {
    changeTheme({
      isGrey: isGrey,
      isColorWeakness: isColorWeakness,
    });
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  function handleClick() {
    setOpen(true);
  }

  return (
    <>
      <Tooltip style={{display: 'flex', alignItems: 'center'}}
               placement="bottom" title={'系统设置'}>
        <SettingOutlined onClick={handleClick}/>
      </Tooltip>
      <Drawer title="系统设置" placement="right" onClose={onClose}
              open={open} width={410}>
        <Divider>界面显示</Divider>
        <ProForm
          submitter={{
            render: () => null,
          }}
        >
          <ProFormCheckbox.Group
            label={''}
            name="layoutItems"
            initialValue={
              layoutItems
            }
            fieldProps={{
              onChange: (val) => changeLayout(val),
            }
            }
            options={showComps}
          />
        </ProForm>
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
      </Drawer>
    </>
  );
};

export default connect(state => state.topHeader,
  {changeLayout, changeTheme, changeColorPrimary})(
  SystemSettings);