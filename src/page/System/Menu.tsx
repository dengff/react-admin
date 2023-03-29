import {useImperativeHandle, useRef, useState} from 'react';
import {Button, message, Popconfirm, Space, Tag} from 'antd';
import {DeleteOutlined, EditOutlined, PlusOutlined} from '@ant-design/icons';
import {
  ModalForm,
  ProFormSwitch,
  ProFormText,
  ProFormTreeSelect,
  ProTable,
} from '@ant-design/pro-components';
import routes from '@/router/routes';
import {menuIcon} from '@/components/Icon';
import React from 'react';
import type {ProColumns,ProFormInstance} from "@ant-design/pro-components"

interface InformRef extends ProFormInstance{
  setModalVisit: (b: boolean)=>void
}

const toFlatRoutes = (routes) => {
  return routes.map(item => {
    return {
      ...item,
      ...item?.meta,
      children: item?.children?.length && toFlatRoutes(item.children),
    };
  });
};
const result = toFlatRoutes(routes);
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
      name="parentPath"
      label="上一级菜单"
      fieldProps={{
        fieldNames: {
          label: 'deptName',
          value: 'id',
        },
      }}
    />
    <ProFormText name="title" label="菜单名称"
                 placeholder="请输入名称"/>
    <ProFormText name="path" label="菜单路径"
                 placeholder="请输入名称"/>
    <ProFormSwitch
      name="hideInMenu"
      label="是否隐藏"
      placeholder=""
      checkedChildren="是"
      unCheckedChildren="否"
    />
  </ModalForm>;
};

const Menu = () => {
  const formRef = useRef<InformRef>();
  const [formTitle, setFormTitle] = useState('');
  const [rowData, setRowData] = useState(null);
  const columns:ProColumns[] = [

    {
      title: '菜单名称',
      valueType: 'text',
      dataIndex: 'title',
    },
    {
      title: '菜单地址',
      dataIndex: 'path',
    },
    {
      title: '创建者',
      dataIndex: 'creator',
      valueType: 'select',
      hideInTable: true,
      valueEnum: {
        admin: {text: 'Admin'},
        guest: {
          text: 'guest',
        },
      },
    },
    {
      title: '菜单图标',
      valueType: 'text',
      search: false,
      dataIndex: 'icon',
      render: (_, {icon}, index, action) => {
        return <Space>{menuIcon[icon] && menuIcon[icon]()}</Space>;
      },
    },
    {
      title: '是否隐藏菜单',
      valueType: 'switch',
      dataIndex: 'hideInMenu',
      render: (_, row, index, action) => {
        return <Space>
          {row['hideInMenu'] ?
            <Tag color={'warning'}> 隐藏 </Tag>
            :
            <Tag color={'success'}> 显示 </Tag>
          }
        </Space>;

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
            setFormTitle('新增菜单');
            setRowData({});
            formRef.current?.setModalVisit(true);
          }
          }></Button>

          <Button
            type={'text'}
            size={'small'}
            icon={<EditOutlined style={{color: '#52c41a'}}/>}
            key="add" onClick={() => {
            setFormTitle('编辑菜单');
            setRowData(row);
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
        </Space>;

      },
    },

  ];
  return (
    <>
      <ProTable
        columns={columns}
        request={() => {
          message.success('success');
          return Promise.resolve({
            data: result,
            total: result.length,
            success: true,
          });
        }

        }
        rowKey="path"
        pagination={{
          showQuickJumper: true,
        }}
        search={{
          filterType: 'light',
        }}
        cardProps={{bordered: true}}
        headerTitle={
          <Button
            icon={<PlusOutlined/>}
            key="set"
            type={'primary'}
            onClick={() => {
              setFormTitle('新增菜单');
              setRowData({});
              formRef.current?.setModalVisit(true);
            }}
          >
            新增菜单
          </Button>
        }
        options={false}
        dateFormatter="string"
      />
      <ModalFormComp {...{formRef, formTitle, rowData}}/>

    </>

  );
};

export default Menu;