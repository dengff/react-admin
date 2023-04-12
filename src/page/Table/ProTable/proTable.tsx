import {DownloadOutlined} from "@ant-design/icons";
import {ProTable} from "@ant-design/pro-components";
import {Button, Table} from "antd";
import {progressEnum, provincesEnum} from "@/common/enum";
import {request} from "@/common/api";
import React, {useRef, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import type {ProColumns} from "@ant-design/pro-table/es/typing";
/*request*/
const enumData = async () => {

  const {data} = await request.post("/cityList");
  return data;
};
const fetchList = async (params: any) => {
  const result = await request.post("/factory/list", params);
  return {
    data: result.data.list,
    success: true,
  };
};
const result = {
  code: 0,
  message: "success",
  data: [
    {
      Modified: "理想",
      city: "广州",
      date: "2022-02-23",
      datetime: "2022-02-23 18:30",
    },
    {
      Modified: "现实",
      city: "深圳",
      date: "2022-04-11",
      datetime: "2022-02-11 18:45",
    },
  ],
};
const fetchData: (params: any) => Promise<typeof result> = (params) => {
  return new Promise((resolve, reject) => {
    console.log(params, "dataparams");
    setTimeout(() => {
      resolve(result);
    }, 2000);
  });
};
/*config*/
const columns: ProColumns[] = [
  {
    title: "排序",
    dataIndex: "index",
    valueType: "index",
    width: 48,
  },
  {
    title: "城市",
    valueType: "select",
    dataIndex: "city",
    key: "value",
    request: enumData,
  },
  {
    title: "级联选择",
    dataIndex: "provinces",
    hideInTable: true,
    // search: {
    //   transform:value=>{
    //     return value
    //   }
    //
    // },
    valueType: "cascader",
    request: async () => provincesEnum,
  },
  {
    title: "状态",
    dataIndex: "progress",
    valueType: "select",
    valueEnum: progressEnum,
  },
  {
    title: "时间区间",
    key: "dateTimeRange",
    dataIndex: "createdAtRange",
    valueType: "dateTimeRange",
    search: {
      transform: (value) => {
        return ({startTime: value[0], endTime: value[1]});
      },
    },
  },
  {
    title: "结果",
    dataIndex: "result",
    ellipsis: true,
    search: false,
  },
  {
    title: "时间",
    tip: "form的tip",
    ellipsis: true,
    tooltip: "table的tip",
    dataIndex: "date",
    valueType: "date",
  },
  {
    title: "修改人",
    dataIndex: "Modified",
  },
  {
    title: "图片",
    dataIndex: "image",
    valueType: "image",
    hideInSearch: true,
  },
  {
    title: "备注",
    dataIndex: "memo",
    ellipsis: true,
    copyable: true,
    // renderFormItem: (
    //   item, {type, defaultRender, formItemProps, fieldProps, ...rest},
    //   form) => {
    //   return defaultRender();
    // },
  },
  {
    title: "操作",
    width: 80,
    key: "option",
    valueType: "option",
    fixed: "right",
    render: (_, row, index, action) => {
      return [
        <a key="edit" onClick={() => {

          action?.startEditable(row.key);
        }

        }>编辑</a>,
      ];

    },
  },
];
const SuperTable = () => {
  const navigate = useNavigate();
  const [getParams, setParams] = useSearchParams();
  console.log(getParams.get("name"));
  const actionsRef = useRef();

  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [selections, setSelections] = useState<any[]>([]);

  function onSelectChange(selectedRowKeys: any[], selectedRows: any[]) {
    setSelections(selectedRows);
    setSelectedRowKeys(selectedRowKeys);
  }

  return (
    <ProTable
      columns={columns}
      params={{
        userName: "test",
      }}
      request={async (params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        return fetchList(params);
      }}
      rowKey="key"
      actionRef={actionsRef}
      pagination={{
        showQuickJumper: true,
        pageSize: 10,
        // responsive: true
      }}
      search={{
        layout: "horizontal",
        defaultCollapsed: true,
        optionRender: (searchConfig, props, dom) => {
          return [
            dom,
            <Button
              type="primary"
              icon={<DownloadOutlined/>}
              key={"download"}>下载报表</Button>,
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
            key: "other",
            text: "其他筛选",
            onSelect: (key) => {
              console.log(key, "rowSelection");
            },
          },
        ],
        selectedRowKeys,
        onChange: onSelectChange,
        type: "radio",
      }}
      scroll={{x: 1300}}
      dateFormatter="string"
      editable={{
        onSave: async (rowKey, data, row) => {
          console.log(data, "saveData");
        },
        onDelete: (key, row) => {
          console.log(dataSource, "dataSource");
          return Promise.resolve(dataSource);

        },
        onValuesChange: (record, recordList) => {
          setDataSource(recordList);
        },
      }}
      toolbar={{
        title: "高级表格",
        tooltip: "这是一个标题提示",
      }}
      toolBarRender={() => [
        <Button
          disabled={!selections?.length}
          type="primary"
          onClick={(_) => {
            const {key = ""} = selections?.[0];
            navigate(`/table/detail?id=${key}`, {
              state: {...selections?.[0]}
            });
          }}>
          查看详情
        </Button>,

      ]}
    />
  );
};
export default SuperTable;