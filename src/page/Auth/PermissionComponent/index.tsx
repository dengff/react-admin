import {
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormRadio,
} from '@ant-design/pro-components';
import React, {useEffect, useRef, useState} from 'react';
import Auth from '@/components/Auth';
import {Button, Divider, Space} from 'antd';
import {currentRoute} from '@/utils';
import type {FormInstance} from "@ant-design/pro-components";

const authEnum = [
  'save',
  'edit',
  'submit',
  'view',
];

const PermissionComponent = (props:any) => {
  const refFrom = useRef<FormInstance|null>();
  const [authStatus, setAuthStatus] = useState([]);

  /*获取当前路由下的控件权限信息*/
  const {route: {meta}} = currentRoute();
  const {auth: {permissionBtn}} = meta;

  /**/
  const [role, setRole] = useState('admin');
  useEffect(() => {
    setAuthStatus(permissionBtn);
  }, []);

  return <div style={{background:"#fff"}}>
    <ProForm
      formRef={refFrom}
      layout={'horizontal'}
      title={'其他权限'}
      initialValues={{
        authStatus: ['save'],
      }}
      submitter={{
        render: (props, doms) => {
          return [
            <Space>
              <Button
                onClick={() => {
                  refFrom.current.resetFields();
                  setAuthStatus(['save']);
                }}>
                重置
              </Button>
            </Space>,
          ];
        },
      }}
      onValuesChange={(changeVal, values) => {
        const {authStatus = []} = values;
        setAuthStatus(authStatus);
      }}
    >
      <ProForm.Group>
        <ProFormCheckbox.Group
          label={'切换权限测试'}
          name="authStatus"
          options={authEnum}
        />
        <ProForm.Item label={'按钮组'}>
          <Space size={[12, 12]}>
            <Auth
              render={() =>
                <Button size={'small'} type={'primary'}>Save</Button>}
              auth={() => authStatus.find(item => ['save'].includes(item))}
            />
            <Auth
              render={() => <Button size={'small'}
                                    type={'primary'}>Edit</Button>}
              auth={() => authStatus.find(item => ['edit'].includes(item))}
            />
            <Auth
              render={() => <Button size={'small'}
                                    type={'primary'}>Submit</Button>}
              auth={() => authStatus.find(item => ['submit'].includes(item))}
              fallback={'[没有Submit权限的回显!]'}
            />
            <Auth
              render={() => <Button size={'small'}
                                    type={'primary'}>View</Button>}
              auth={() => authStatus.find(item => ['view'].includes(item))}
            />
          </Space>
        </ProForm.Item>
      </ProForm.Group>
    </ProForm>

    <Divider></Divider>

    <ProForm
      layout={'horizontal'}
      submitter={{
        render: () => null,
      }}
      initialValues={{
        role: 'admin',
      }}
    >
      <ProFormRadio.Group
        name="role"
        label={`切换权限 --> [${role}]`}
        radioType="button"
        fieldProps={{
          onChange: (e) => {
            const {value} = e.target;
            setRole(value);
          },
        }}
        options={[
          {
            value: 'admin',
            label: 'admin',
          },
          {
            value: 'editor',
            label: 'editor',
          }, {
            value: 'guest',
            label: 'guest',
          },
        ]}
      />
    </ProForm>

    <ProCard
      split={'vertical'}
      title={'切换演示'}
      bordered
      headerBordered
      boxShadow
      gutter={8}
      style={{height: '220px'}}
    >
      <Auth
        auth={() => 'admin' === role}

        render={() => (
          <ProCard
            hoverable
            layout={'center'}
            style={{
              height: '100%',
              background: 'linear-gradient(to left, #4BC0C8, #C779D0, #FEAC5E)',
            }}
          >
            <h1>{"Auth-- > [Admin]"}</h1>
          </ProCard>
        )}
      />
      <Auth
        auth={() => ['admin', 'editor'].includes(role)}
        render={() => (
          <ProCard
            layout={'center'}
            hoverable
            style={{
              height: '100%',
              background: 'linear-gradient(to right, #ed4264, #ffedbc,#ed4264)',
            }}
          >
            <h1>
              {"Auth---> [Editor]"}
            </h1>
          </ProCard>
        )}
      />
      <Auth
        auth={() => !['editor'].includes(role)}
        render={() => (
          <ProCard
            layout={'center'}
            hoverable
            style={{
              height: '100%',
              background: 'linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)',
            }}
          >
            <h1>
              {"Auth-- > [Guest]"}
            </h1>
          </ProCard>
        )}
      />
    </ProCard>
  </div>;
};

export default PermissionComponent;