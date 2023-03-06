import {apifoxRequest} from '@/api/index.js';
import {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {ProDescriptions} from '@ant-design/pro-components';
import {progressEnum, provincesEnum} from '@/mock/Enum.js';
import {Button, message} from 'antd';

const DETAIL_INFO = async (id) => {
  const {details} = await apifoxRequest.post('/detailInfo', {id: id});
  return {
    data: details,
    success: true,
  };

};

const TableDetail = () => {
  const [getParams, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const id = getParams.get('id');
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
    },
    {
      title: '级联选择',
      dataIndex: 'provinces',
      hideInTable: true,
      search: {},
      valueType: 'cascader',
      request: () => provincesEnum,
    },
    {
      title: '状态',
      dataIndex: 'progress',
      valueType: 'select',
      valueEnum: progressEnum,
    },
    {
      title: '时间日期',
      key: 'dateTime',
      dataIndex: 'dateTime',
      valueType: 'dateTime',
      fieldProps: {
        format: 'YYYY.MM.DD HH:mm:ss',
      },
    },
    {
      title: '结果',
      dataIndex: 'result',
      ellipsis: true,
      valueType: 'textarea',
      key: 'result',
      render: (_, row, index, action) => {
        return [

          <div key={'result'}>
            {[row['result']]}
          </div>,
        ];
      },
    },
    {
      title: '时间',
      // ellipsis: true,
      tooltip: 'table的tip',
      dataIndex: 'date',
      valueType: 'date',
      key: 'date',
      fieldProps: {
        format: 'YYYY-MM-DD',
      },
      // render:(_,row,index,action)=>{
      //   return  dayjs(row.date).format('YYYY-MM-DD')
      // }
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
      valueType: 'textarea',
      ellipsis: true,
      copyable: true,
      render: (_, row, index, action) => {
        return [
          <div key={'memo'}>
            {[row['memo']]}
          </div>,
        ];
      },
    },
    {
      title: '操作',
      key: 'option',
      valueType: 'option',
      render: (_, row, index, action) => {
        return [
          <Button
            type={'primary'}
            key={'save'}
            loading={loading}
            onClick={() => {
              setLoading(true);
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  setLoading(false);
                  message.success('success!');
                  resolve(dataSource);
                }, 1500);
              });
            }}>
            保存
          </Button>,
        ];

      },
    },
  ];
  return (
    <div>
      <ProDescriptions
        title={'列表详情'}
        onDataSourceChange={setDataSource}
        columns={columns}
        request={() => DETAIL_INFO(id)}
        editable={{}}
      >
      </ProDescriptions>
    </div>
  );
};

export default TableDetail;