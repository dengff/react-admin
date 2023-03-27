import {
  ModalForm,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import {Button, message, Popconfirm, Space} from 'antd';
import {DeleteOutlined, PlusOutlined} from '@ant-design/icons';
import {useImperativeHandle, useRef, useState} from 'react';

const ModalFormComp = ({formRef, ...args}) => {
  const [modalVisit, setModalVisit] = useState(false);
  useImperativeHandle(formRef, () => {
    return {
      setModalVisit,
    };
  });
  return <ModalForm

    title={'新增角色'}
    open={modalVisit}
    layout={'horizontal'}
    onOpenChange={setModalVisit}
    modalProps={{
      destroyOnClose: true,
    }}
    labelCol={{span: 3}}
    onFinish={async (values) => {
      message.success('提交成功');
      return true;
    }}
  >
    <ProFormText
      name="role"
      label="角色名称"
      placeholder="请输入名称"/>
    <ProFormTextArea
      name="roleDesc"
      label="角色描述"
      placeholder="请输入名称"/>
    <ProFormSwitch
      name="status"
      label="状态"
      placeholder=""
      checkedChildren="启用"
      unCheckedChildren="禁用"
    />
  </ModalForm>;
};

const result = [
  {
    key: 1,
    role: `Admin`,
    roleDesc: '拥有系统全部操作权限',
    status: 0,
    id: 97,
    creationTime: 1602572994055,
  },
  {
    key: 2,
    role: `Guest`,
    roleDesc: '拥有系统全部操作权限',
    status: 1,
    id: 103,
    creationTime: 1603698994055,
  },
];
const Role = () => {
  const formRef = useRef();
  const columns = [
    {
      title: '序号',
      dataIndex: 'key',
    },

    {
      title: '角色名称',
      valueType: 'text',
      dataIndex: 'role',
    },
    {
      title: '状态',
      valueType: 'select',
      dataIndex: 'status',
      valueEnum: {
        0: {text: '启用', status: 'success'},
        1: {text: '禁用', status: 'Error'},
      },
    },
    {
      title: '角色描述',
      valueType: 'textArea',
      dataIndex: 'roleDesc',
    },
    {
      title: '创建时间',
      valueType: 'date',
      dataIndex: 'creationTime',
    },

    {
      title: '操作',
      key: 'option',
      valueType: 'option',
      fixed: 'right',
      render: (_, row, index, action) => {
        return <Space>
          <Button
            type={'text'}
            key="edit"
            size={'small'}
            icon={<PlusOutlined style={{color: '#9b59b6'}}/>} onClick={() => {
            formRef.current?.setModalVisit(true);
          }
          }></Button>

          <Popconfirm
            title="删除此行"
          >
            <Button
              type={'text'}
              size={'small'}
              danger icon={<DeleteOutlined/>}
              key="delete"></Button>
          </Popconfirm>

        </Space>

      },
    },

  ];
  return (
    <>
      <ProTable
        search={false}
        columns={columns}
        request={() =>
          Promise.resolve({
            data: result,
            success: true,
          })
        }
        rowKey="role"
        pagination={false}

        toolBarRender={() => [
          <Button
            icon={<PlusOutlined/>}
            key="set"
            type={'primary'}
            onClick={() => {
              formRef.current?.setModalVisit(true);
            }}
          >
            新增角色
          </Button>,
        ]}
        options={false}
        dateFormatter="string"
      />
      <ModalFormComp {...{formRef}}/>

    </>

  );
};

export default Role;