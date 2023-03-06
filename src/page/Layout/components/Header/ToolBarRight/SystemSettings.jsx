import {Button, Tooltip, Drawer, Divider} from 'antd';
import {SettingOutlined} from '@ant-design/icons';
import React, {useState} from 'react';
import {ProField, ProForm, ProFormCheckbox} from '@ant-design/pro-components';
import {changeLayout} from '@/store/topHeader/actions.js';
import {connect} from 'react-redux';

export const SystemSettings = (props) => {
  const [open, setOpen] = useState(false);
  const {changeLayout, pageConfig = {}} = props;
  const {layoutItems} = pageConfig;
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
        <Button type={'text'}
                icon={<SettingOutlined style={{fontSize: '16px'}}/>}
                onClick={handleClick}
        />
      </Tooltip>
      <Drawer title="系统设置" placement="right" onClose={onClose}
              open={open}>
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
            options={[
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

            ]}
          />
        </ProForm>

        <Divider>主题设置</Divider>

      </Drawer>
    </>

  );
};

export default connect(state => state.topHeader, {changeLayout})(
  SystemSettings);