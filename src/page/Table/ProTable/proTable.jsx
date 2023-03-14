import {DownloadOutlined} from '@ant-design/icons';
import {ProTable} from '@ant-design/pro-components';
import {Button, Table} from 'antd';
import {progressEnum, provincesEnum} from '@/common/enum.js';
import {request} from '@/common/api/index.js';
import {useEffect, useRef, useState} from 'react';
import dayjs from 'dayjs';
import {useNavigate, useSearchParams} from 'react-router-dom';
/*request*/
const enumData = async () => {

  const {data} = await request.post('/cityList');
  return data;
};
const fetchList = async (params) => {
  const result = await request.post('/factory/list', params);
  return {
    data: result.data.list,
    success: true,
  };
};
const fetchData = (params) => {

  return new Promise((resolve, reject) => {
    console.log(params, 'dataparams');
    const result = {
      code: 0,
      message: 'success',
      data: [
        {
          Modified: '理想',
          city: '广州',
          date: '2022-02-23',
          datetime: '2022-02-23 18:30',
        },
        {
          Modified: '现实',
          city: '深圳',
          date: '2022-04-11',
          datetime: '2022-02-11 18:45',
        },
      ],
    };
    setTimeout(() => {

      resolve(result);
    }, 2000);
  });
};
/*config*/
const columns = [
  {
    title: '排序',
    dataIndex: 'index',
    valueType: 'index',
    width: 48,
  },
  {
    title: '城市',
    valueType: 'select',
    dataIndex: 'city',
    key: 'value',
    request: enumData,
  },
  {
    title: '级联选择',
    dataIndex: 'provinces',
    hideInTable: true,
    search: {
      // transform:value=>{
      // console.log(value,"value");
      // }

    },
    valueType: 'cascader',
    request: () => provincesEnum,
  },
  {
    title: '状态',
    dataIndex: 'progress',
    valueType: 'select',
    // hideInTable: true,
    // hideInTable: true,
    valueEnum: progressEnum,
  },
  // {
  //   title: '日期区间',
  //   key: 'dateRange',
  //   dataIndex: 'createdAtRange',
  //   valueType: 'dateRange',
  // },
  {
    title: '时间区间',
    key: 'dateTimeRange',
    dataIndex: 'createdAtRange',
    valueType: 'dateTimeRange',
    search: {
      transform: (value) => {
        return ({startTime: value[0], endTime: value[1]});
      },
    },
  },
  {
    title: '结果',
    dataIndex: 'result',
    ellipsis: true,
    search: false,
    renderFormItem: (
      item, {type, defaultRender, formItemProps, fieldProps, ...rest},
      form) => {
      return defaultRender();
    },
  },
  {
    title: '时间',
    tip: 'form的tip',
    ellipsis: true,
    tooltip: 'table的tip',
    dataIndex: 'date',
    valueType: 'date',
  },
  {
    title: '修改人',
    dataIndex: 'Modified',
  },
  {
    title: '图片',
    dataIndex: 'image',
    valueType: 'image',
    hideInSearch: true,
  },
  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    copyable: true,
    renderFormItem: (
      item, {type, defaultRender, formItemProps, fieldProps, ...rest},
      form) => {
      return defaultRender();
    },
  },
  {
    title: '操作',
    width: 80,
    key: 'option',
    valueType: 'option',
    fixed: 'right',
    render: (_, row, index, action) => {
      return [
        <a key="edit" onClick={() => {

          action.startEditable(row.key);
        }

        }>编辑</a>,
        /* <a key="link2" onClick={()=>{
           action?.addEditRecord({
             ...row,
             key:Date.now()
           })
         }}>复制</a>,*/
        // <a key="link3">删除</a>,
      ];

    },
  },
];
const SuperTable = () => {
  const navigate = useNavigate();
  const [getParams, setParams] = useSearchParams();
  console.log(getParams.get('name'));
  const actionsRef = useRef();
  useEffect(() => {
    // enumData()

  }, []);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [selections, setSelections] = useState([]);

  function onSelectChange(selectedRowKeys, selectedRows) {
    setSelections(selectedRows);
    setSelectedRowKeys(selectedRowKeys);
  }

  return (
    <ProTable
      columns={columns}
      params={{
        userName: 'test',
      }}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        //TODO DATE BUG
        const s = dayjs().format(params.data);
        console.log(s);
        const {data} = fetchData(params);
        setDataSource(data);
        return fetchList(params);
      }}
      rowKey="key"
      dataSource={dataSource}
      actionRef={actionsRef}
      pagination={{
        showQuickJumper: true,
        pageSize: 10,
        // responsive: true
      }}
      search={{
        layout: 'horizontal',
        defaultCollapsed: true,
        optionRender: (searchConfig, props, dom) => {
          return [
            dom,
            <Button
              type="primary"
              icon={<DownloadOutlined/>}
              key={'download'}>下载报表</Button>,
          ];
        },
      }}
      options={{

        fullScreen: true,
      }}
      rowSelection={{
        selections: [
          Table.SELECTION_ALL,
          Table.SELECTION_INVERT,
          {
            key: 'other',
            text: '其他筛选',
            onSelect: (key) => {
              console.log(key, 'rowSelection');
            },
          },
        ],
        selectedRowKeys,
        onChange: onSelectChange,
        type: 'radio',
      }}
      scroll={{x: 1300}}
      dateFormatter="string"
      editable={{
        onSave: async (rowKey, data, row) => {
          console.log(data, 'saveData');
        },
        onDelete: (key, row) => {
          console.log(dataSource, 'dataSource');

        },
        onValuesChange: (record, recordList) => {
          setDataSource(recordList);
        },
      }}
      toolbar={{
        title: '高级表格',
        tooltip: '这是一个标题提示',
      }}
      toolBarRender={() => [
        <Button
          disabled={!selections?.length}
          type="primary"
          onClick={(_) => {
            const {key = ''} = selections?.[0];
            navigate(`/table/detail?id=${key}`);
          }}>
          查看详情
        </Button>,

      ]}
    />
  );
};
export default SuperTable;