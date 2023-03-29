import {ProCard, StatisticCard} from '@ant-design/pro-components';
import {Avatar} from 'antd';
import React from 'react';
import styled from 'styled-components';

const Warp = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 10px;

  .ant-statistic-content {
    display: none;
  }

  .ant-pro-statistic-card-chart {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
const data:any[] = [...Array(6)].map((item, index) => ({
  title: '企业级产品设计系统',
  subTitle: 'A System',
  description: '是一个面向开源及私有软件项目的托管平台',
  avatars: [
    `https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=images&key=${index}`,
    `https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=images&key=${index +
    1}`,
    `https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=images&key=${index +
    2}`,
    `https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=images&key=${index +
    3}`,
  ],
  userActivities: Math.floor(Math.random() * (9999 - 6666) + 9999),
}));

const Avatars = ({avatars = []}) => {
  return <>
    {
      avatars.map(item => <Avatar
        key={item}
        src={item}
        size={28}
        style={{
          background: '#bbc3cb',
        }}
      />)
    }
  </>;
};

const ProjectList = () => {
  return (
    <ProCard headerBordered title={'项目'} extra={<a>更多</a>}
             split={'horizontal'}>

      <Warp>
        {data.map(item =>
          <StatisticCard
            key={item.userActivities}
            hoverable
            title={item.title}
            subTitle={item.subTitle}
            size={'small'}
            bordered
            statistic={{
              value: ' ',
              description: item.description,
            }}
            chart={
              <>
                <Avatar.Group
                >
                  <Avatars avatars={item.avatars}/>
                </Avatar.Group>
                <span style={{
                  color: '#909399',
                  fontSize: '12px',
                }}>用户数: {item.userActivities}</span></>
            }
          >
          </StatisticCard>,
        )}

      </Warp>
    </ProCard>
  );
};
export default ProjectList;

