import {Avatar, List} from 'antd';
import {useState} from 'react';
import {ProCard} from '@ant-design/pro-components';
import ProjectList from '@/page/User/Info/ProjectList';
import UserPanel from '@/page/User/Info/userPanel';
import RecentTasks from '@/page/User/Info/RecentTasks';

const data = [
  {
    title: 'Rain',
    description: '努力，跟你的性别无关，跟你读不读大学的差距无关。买得起自己喜欢的东西，去得了自己想去的地方，不会因为身边人的来或走损失生活的质量，反而会因为花自己的钱，来得更有底气一些，这就是应该努力的原因。',
  },
  {
    title: '老街',
    description: '如果要给完美人生一个定义，那就是惬意。如果要给惬意一个定义，那就是三五知己谈笑风生。',
  },
  {
    title: '杨爱天',
    description: '人格的完善是本，财富的确立是末。',
  },
  {
    title: 'VILIN',
    description: '世界上没有绝对的让人开心的乐园，只有相对的能自己找乐的人。',
  },
  {
    title: '李云维',
    description: '进取向上的心态，是成功者的最基本要素。',
  },
  {
    title: '王德发',
    description: '跑得越快，遇到风的阻力越大。阻力与成就相伴随。',
  },
  {
    title: '王德发',
    description: '驾驭命运的舵是奋斗，不抱有一丝幻想，不放下一点机会，不停止一日努力。',
  },
];

const ListEssay = (props) => {
  const {data = []} = props;
  return (
    <List
      style={{height: '300px', overflow: 'auto'}}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.uomg.com/api/rand.avatar?sort=%E5%8A%A8%E6%BC%AB%E5%A5%B3&format=images&key=${index}`}/>}
            title={<a>{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export const UserInfo = () => {
  const [activeKey, setActiveKey] = useState('essay');
  return <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
    <UserPanel/>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '3fr 1fr',
      gap: '20px',
    }}>
      <ProjectList/>

      <RecentTasks/>
    </div>

    <ProCard

      tabs={{
        activeKey: activeKey,
        items: [
          {
            label: `文章`,
            key: 'essay',
            children: <ListEssay data={data}/>,
          },
          {
            label: `应用（3）`,
            key: 'apply',
            children: <ListEssay data={data}/>,
          },
        ],
        onChange: (key) => {
          setActiveKey(key);
        },
      }}
    >
    </ProCard>

  </div>;

};
export default UserInfo;