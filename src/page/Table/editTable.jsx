import {EditableProTable} from '@ant-design/pro-components';
import React, {useState} from 'react';
import {Button, message} from 'antd';
import {CopyOutlined} from '@ant-design/icons';

const EditTable = () => {
  const [dataSource, setDateSource] = useState([
    {
      factory: '3',
      index: 0,
      key: 1679556413535,
      materialNumber: 's',
      period: '1',
      remark: '是是是',
      time: '2023-03-06',
    }])
  ;
  const columns = [
    {
      title: '物料号',
      valueType: 'text',
      dataIndex: 'materialNumber',
    },
    {
      title: '期数',
      dataIndex: 'period',
      valueEnum: {
        '1': {
          text: '第一期',
        },
        '2': {
          text: '第二期',
        },
        '3': {
          text: '第三期',
        },
        '4': {
          text: '第四期',
        },
      },
    },
    {
      title: '时间',
      dataIndex: 'time',
      valueType: 'date',
    },
    {
      title: '工厂',
      dataIndex: 'factory',
      valueType: 'select',
      valueEnum: {
        '1': {
          text: '皮革厂',
        },
        '2': {
          text: '橡胶厂',
        },
        '3': {
          text: '制革厂',
        },
      },
    },
    {
      title: '备注',
      dataIndex: 'remark',
    },
    {
      title: '操作',
      valueType: 'option',
      render: (dom, row, index, action) => [
        <a key={'edit'} onClick={() => {
          action.startEditable(row.key);
        }}>编辑</a>,
        <Button
          type={'text'}
          size={'small'}
          key={'copy'}
          icon={<CopyOutlined/>}
          onClick={() => {
            action.addEditRecord({
              ...row,
              key: Date.now(),
            });
          }}>
          复制</Button>,
        <Button type={'text'} size={'small'} danger={true} key={'delete'}
                onClick={() => {
                  setDateSource(
                    dataSource.filter(item => row.key !== item.key));
                }}>删除</Button>,

      ],
    },
  ];

  return <EditableProTable
    columns={columns}
    rowKey="key"
    headerTitle="编辑Table"
    editable={{
      type: 'multiple',
      actionRender: (row, config, dom) => {
        console.log(dom, config, 'dom');
        return [dom.save, dom.cancel];
      },
    }
    }
    value={dataSource}
    onChange={(value) => {
      console.log(value, 'value');
      setDateSource(value);
    }}
    recordCreatorProps={{
      record: () => ({
        'key': Date.now(),
      }),
    }}
    toolBarRender={() => [
      <Button
        type={'primary'}
        disabled={!dataSource.length}
        onClick={() => {
          return new Promise((resolve, reject) => {
            setTimeout(_ => {
              resolve(dataSource);
              message.success('提交成功');
            }, 1500);
          });
        }}>
        提交
      </Button>,
    ]}
  />;
};

export default EditTable;