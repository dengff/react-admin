import {
  ProCard, ProForm, ProFormText,
  ProFormSelect, ProFormCascader, ProFormTextArea,

} from '@ant-design/pro-components';
import {provincesEnum} from '@/common/enum';
import {message, Space} from 'antd';

const InfoForm = () => {
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
      <ProForm
        layout={'horizontal'}
        labelCol={{span: 4}}
        submitter={{
          onSubmit: () => {
            message.success('success');
          },
          render: (props, dom) => <Space style={{
            width: '100%',
            justifyContent: 'center',
          }}>
            {dom}
          </Space>,
        }}
      >
        <ProForm.Item
          label={'邮箱'}
          name={'mailbox'}
        >

          <ProFormText>

          </ProFormText>
        </ProForm.Item>
        <ProForm.Item
          label={'昵称'}
          name={'nickname'}

        >

          <ProFormText

          >

          </ProFormText>
        </ProForm.Item>
        <ProForm.Item
          label={'国家/地区'}
          name={'country'}
        >

          <ProFormSelect
            fieldProps={{
              options: [{label: '中国', value: 'zh'}],
            }}>

          </ProFormSelect>
        </ProForm.Item>

        <ProForm.Item
          label={'所在区域'}
          name={'Region'}
        >
          <ProFormCascader
            fieldProps={{
              options: provincesEnum,
            }}>
          </ProFormCascader>
        </ProForm.Item>
        <ProForm.Item
          label={'具体地址'}
          name={'specificAddress'}
        >
          <ProFormText
          >
          </ProFormText>
        </ProForm.Item>
        <ProForm.Item
          label={'备注'}
          name={'remark'}
        >
          <ProFormTextArea
          >
          </ProFormTextArea>
        </ProForm.Item>
      </ProForm>
    </div>

  );
};

export default InfoForm;