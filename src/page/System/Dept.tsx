import {
  ModalForm,
  ProFormDigit,
  ProFormSwitch,
  ProFormText,
  ProFormTreeSelect,
  ProTable,
} from '@ant-design/pro-components';
import {Button, message, Popconfirm, Space} from 'antd';
import {DeleteOutlined, EditOutlined, PlusOutlined} from '@ant-design/icons';
import {useImperativeHandle, useRef, useState} from 'react';
import React from 'react';
import type {ProColumns,ProFormInstance} from "@ant-design/pro-components"

interface InformRef extends ProFormInstance{
  setModalVisit: (b: boolean)=>void
}
const ModalFormComp = ({formRef, formTitle, rowData, ...args}) => {
  const [modalVisit, setModalVisit] = useState(false);
  useImperativeHandle(formRef, () => {
    return {
      setModalVisit,
    };
  });
  return <ModalForm

    title={formTitle}
    open={modalVisit}
    layout={'horizontal'}
    onOpenChange={setModalVisit}
    modalProps={{
      destroyOnClose: true,
    }}
    initialValues={{
      ...rowData,
      status: rowData?.['status'] === 0,
    }}
    labelCol={{span: 3}}
    onFinish={async (values) => {
      const data = {
        ...values,
        status: values?.['status'] ? 0 : 1,
      };
      console.log(data);
      message.success('提交成功');
      return true;
    }}
  >
    <ProFormTreeSelect
      name="parentId"
      label="上级部门"
      proFieldProps={{

      }}
      fieldProps={{
        fieldNames: {
          label: 'deptName',
          value: 'id',
        },
        treeData:[
          {
            deptName: `公司 I`,
            id: 97,
            children: [
              {
                deptName: `IT 平台`,
                id: 120,
              },
              {
                deptName: `产品部`,
                id: 121,
              },
              {
                deptName: `测试部`,
                id: 122,
              },
            ],
          },
          {
            deptName: `公司 II`,
            id: 103,
          },
        ],
      }}
    />

    <ProFormText name="deptName" label="部门名称"
                 placeholder="请输入名称"/>
    <ProFormDigit
      name="key" label="排序"
      placeholder=""

    />
    <ProFormSwitch
      name="status" label="状态"
      placeholder=""
      checkedChildren="正常"
      unCheckedChildren="禁用"
    />
  </ModalForm>;
};

const result = [
  {
    key: 1,
    deptName: `公司 I`,
    status: 0,
    id: 97,
    creationTime: 1602572994055,
    children: [
      {
        key: 1,
        deptName: `IT 平台`,
        status: 0,
        parentId: 97,
        creationTime: 1602572994666,
      },
      {
        key: 2,
        deptName: `产品部`,
        status: 0,
        parentId: 97,
        creationTime: 1602572994777,
      },
      {
        key: 3,
        deptName: `测试部`,
        status: 1,
        parentId: 97,
        creationTime: 1602572994999,
      },
    ],
  },
  {
    key: 2,
    deptName: `公司 II`,
    status: 1,
    id: 103,
    creationTime: 1603698994055,
  },
]
const Dept = () => {
  const formRef = useRef<InformRef>();
  const [formTitle, setFormTitle] = useState('');
  const [rowData, setRowData] = useState(null);
  const columns: ProColumns[] = [

    {
      title: '部门名称',
      valueType: 'text',
      dataIndex: 'deptName',
    },
    {
      title: '排序',
      search: false,
      dataIndex: 'key',
    },
    {
      title: '创建时间',
      search: false,
      valueType: 'date',
      dataIndex: 'creationTime',
    },
    {
      title: '状态',
      valueType: 'select',
      dataIndex: 'status',
      valueEnum: {
        0: {text: '正常', status: 'success'},
        1: {text: '禁用', status: 'Error'},
      },
    },
    {
      title: '操作',
      // width: 80,
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
            setFormTitle('新增部门');
            setRowData({});
            formRef.current?.setModalVisit(true);
          }
          }></Button>

          {row.parentId &&
            <Button
              type={'text'}
              size={'small'}
              icon={<EditOutlined style={{color: '#52c41a'}}/>}
              key="add" onClick={() => {
              setFormTitle('编辑部门');
              setRowData(row);
              formRef.current?.setModalVisit(true);
            }
            }></Button>
          }


          <Popconfirm
            title="删除此行"
          >
            <Button
              type={'text'}
              size={'small'}
              danger icon={<DeleteOutlined/>}
              key="delete"></Button>
          </Popconfirm>
        </Space>;

      },
    },

  ];
  return (
    <>
      <ProTable
        columns={columns}
        request={() =>
          Promise.resolve({
            data: result,
            success: true,
          })
        }
        rowKey="deptName"
        pagination={false}

        toolBarRender={() => [
          <Button
            icon={<PlusOutlined/>}
            key="set"
            type={'primary'}
            onClick={() => {
              setFormTitle('新增部门');
              setRowData({});
              formRef.current?.setModalVisit(true);
            }}
          >
            新增部门
          </Button>,
        ]}
        options={false}
        dateFormatter="string"
      />
      <ModalFormComp {...{formRef, formTitle, rowData}}/>

    </>

  );
};

export default Dept;