import Header from '@/page/User/Setting/Header';
import {ProCard} from '@ant-design/pro-components';
import InfoForm from '@/page/User/Setting/InfoForm';
import styled from 'styled-components';
import {useState} from 'react';
import Security from '@/page/User/Setting/security';

const Warp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Setting = () => {
  const [activeKey, setActiveKey] = useState('basicInfo');

  return (<Warp>
    <Header chanheActiveKey={setActiveKey}/>
    <ProCard
      tabs={{
        activeKey: activeKey,
        items: [
          {
            label: `基本信息`,
            key: 'basicInfo',
            children: <InfoForm/>,
          },
          {
            label: `安全设置`,
            key: 'security',
            children: <Security/>,
          },
        ],
        onChange: setActiveKey,
      }}
    >
    </ProCard>
  </Warp>);
};
export default Setting;