import {
  ProForm,
  ProFormDatePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import {useRef} from 'react';
import {request} from '@/common/api/index.js';

const enumData = async (key) => {
  const {data} = await request.post('/cityList', {key});
  const filterData = data.filter(
    item => item.value.indexOf(key) > -1 || item.label.indexOf(key) > -1);
  if (filterData?.length) return filterData;
  return data;
};
const DynamicForms = () => {
  const formRef = useRef();
  return <div style={{padding: '6px 6px'}}>
    <ProForm
      grid={true}
      rowProps={{
        gutter: [4, 12],
      }}
      colProps={{
        lg: 8, xl: 7,
      }}
      formRef={formRef}
      title={'信息'}
      readonly={false}
      layout={'inline'}
      onFinish={val => console.log(val)}
      submitter={{
        render: _ => null,
      }}
    >

      <ProFormSelect
        label="状态"
        name="status"
        options={[
          {
            value: 'hide',
            label: '隐藏',
          }, {
            value: 'show',
            label: '显示',
          }, {
            value: 'disabled',
            label: '禁用',
          },
        ]}
      />
      <ProFormDependency name={['status']}>
        {(item) => {
          if (item?.status === 'hide') return null;
          return (
            <ProFormText
              label="备注"
              name="remark"
              disabled={item?.status === 'disabled'}
            />
          );
        }}
      </ProFormDependency>
      <ProFormSelect
        name="advanceType"
        label={'预付类型'}
        options={[
          {
            value: '0.09',
            label: '九折',
          }, {
            value: '0.06',
            label: '六折',
          }, {
            value: 'other',
            label: '其他',
          },
        ]}
      />
      <ProFormDependency name={['advanceType']}>
        {({advanceType}) => {
          if (advanceType === 'other') {
            return (
              <ProForm.Item
                label={'预付比例'}
                name={'advanceRate'}
                rules={[
                  {
                    pattern: /^[0]+\.+([0-9]{0,2})$/,
                    required: true,
                    message: '请输入等于1 或小于 1 的两位小数',
                  },
                ]}
              >
                <ProFormDigit
                  colProps={{
                    span: {
                      lg: 8, xl: 7,
                    },
                  }}
                />
              </ProForm.Item>
            );
          }
        }
        }
      </ProFormDependency>
      <ProFormSelect
        label="城市"
        debounceTime={1000}
        request={({keyWords}) => enumData(keyWords)}
      />

      <ProFormText name={'type'} label={'类型'}
      />
      <ProFormText name={'vendor'} label={'供应商'}/>
      <ProFormDatePicker
        label="时间"
        name="date"
      />
    </ProForm>
  </div>;
};

export default DynamicForms;