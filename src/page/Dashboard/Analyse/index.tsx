import {ProCard} from '@ant-design/pro-components';
import LineChart from '@/page/Dashboard/Analyse/LineChart';
import Overview from '@/page/Dashboard/Analyse/Overview';
import styled from 'styled-components';
import React from 'react';
const Warp = styled.div`
.ant-pro-card-col{
  border: none;
}
`
export const Analyse = () => {
  return (
    <Warp>
      <ProCard split={'horizontal'} gutter={[20, 0]} ghost>
        <Overview/>
        <LineChart/>
      </ProCard>
    </Warp>
  );
};

export default Analyse;