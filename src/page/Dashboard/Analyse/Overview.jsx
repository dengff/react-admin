import {ProCard, StatisticCard} from '@ant-design/pro-components';
import {Avatar, Progress, Space, Tooltip} from 'antd';
import {useEcharts} from '@/hooks';
import {
  AnalyseIcon,
  BillIcon,
  CommodityIcon,
  DayIcon,
  DispositionIcon,
  LabelIcon,
  MonthIcon,
  OrderIcon,
  ProcessIcon,
  UserGroupsIcon,
  WeekIcon,
  YearIcon,
} from '@/components/Icon';
import styled from 'styled-components';

const Warp = styled.div`

  .anticon {
    font-size: 30px;
  }

  .ant-pro-card-header {
    padding-bottom: 4px;
    padding-top: 4px;
  }

`;
const {Statistic} = StatisticCard;

const items = [
  {
    title: '用户',
    icon: <UserGroupsIcon/>,
  },
  {
    title: '分析',
    icon: <AnalyseIcon/>,
  },
  {
    title: '商品',
    icon: <CommodityIcon/>,
  },
  {
    title: '订单',
    icon: <OrderIcon/>,
  },
  {
    title: '票据',
    icon: <BillIcon/>,
  },
  {
    title: '标签',
    icon: <LabelIcon/>,
  },
  {
    title: '流程',
    icon: <ProcessIcon/>,
  },
  {
    title: '配置',
    icon: <DispositionIcon/>,
  },
];

const Overview = () => {
  const option = {
    backgroundColor: '#fff',
    title: {
      textStyle: {
        fontSize: 12,
        fontWeight: 400,
      },
      left: 'center',
      top: '5%',
    },
    legend: {
      show: false,
      icon: 'circle',
      top: '5%',
      right: '5%',
      itemWidth: 6,
      itemGap: 20,
      textStyle: {
        color: '#556677',
      },
    },
    tooltip: {
      trigger: 'axis',

    },
    grid: {},
    xAxis: [
      {
        show: false,
        type: 'category',
        boundaryGap: false,
        axisLine: {
          show: false,
          lineStyle: {
            color: '#233653',
          },
        },
        axisLabel: {
          textStyle: {
            color: '#7ec7ff',
            padding: 16,
            fontSize: 14,
          },
          formatter: function(data) {
            return data;
          },
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#192a44',
          },
        },
        axisTick: {
          show: false,
        },
        data: [
          '3.26',
          '3.27',
          '3.28',
          '3.29',
          '3.30',
          '3.31',
          '4.01',
          '4.02'],
      }],
    yAxis: [
      {
        show: false,
        name: '订单数',
        nameTextStyle: {
          color: '#7ec7ff',
          fontSize: 16,
          padding: 10,
        },
        min: 2000,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#192a44',
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#233653',
          },

        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#7ec7ff',
            padding: 16,
          },
          formatter: function(value) {
            if (value === 0) {
              return value;
            }
            return value;
          },
        },
        axisTick: {
          show: false,
        },
      }],
    series: [
      {
        name: '订单数量',
        type: 'line',
        data: [5000, 10000, 13000, 8000, 10000, 6000, 5000, 16000],
        symbol: 'circle',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 4,
          color: {
            type: 'linear',

            colorStops: [
              {
                offset: 0,
                color: '#A9F387',
              }, {
                offset: 1,
                color: '#48D8BF',
              }],
            globalCoord: false,
          },
          shadowColor: 'rgba(115,221,255, 0.3)',
          shadowBlur: 10,
          shadowOffsetY: 20,
        },
        itemStyle: {
          normal: {
            color: '#73DD39',
            borderColor: '#fe9a8b',
          },
        },
      },
    ],
  };
  const [echartsRef] = useEcharts(option);
  return (<Warp>
    <ProCard ghost>
      <ProCard split={'vertical'} gutter={[20, 10]} ghost>
        <ProCard
          headerBordered
          title={'访问量'}
          extra={
            <span
              role={'img'} className="anticon"
            >
             <YearIcon/>
            </span>
          }
          split={'horizontal'}>
          <StatisticCard
            statistic={{
              value: 82.6,
              suffix: '亿',
            }}
            chart={<Space style={{height: '50px'}}>
              <Statistic title="日同比" value="12.47%"
                         trend="up"/>
              <Statistic style={{margin: 0}} title="周同比" value="5.68%"
                         trend="down"/>
            </Space>}
          >
          </StatisticCard>
          <ProCard title={'总访问量'} extra={'280万'}></ProCard>

        </ProCard>
        <ProCard headerBordered title={'销售额'}
                 extra={
                   <span role={'img'} className="anticon">
                     <MonthIcon/>
                   </span>}
                 split={'horizontal'}>
          <StatisticCard
            statistic={{
              value: '2.69',
              suffix: '亿',
            }}
            chart={
              <Progress
                style={{
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0',
                }}
                percent={68}
                strokeColor={{'0%': '#108ee9', '100%': '#87d068'}}
                size="small"/>
            }
          >
          </StatisticCard>
          <ProCard title={'总销售额'} extra={'68万'}></ProCard>
        </ProCard>
        <ProCard headerBordered
                 title={'订单量'}
                 extra={
                   <span role={'img'} className="anticon">
                     <DayIcon/>
                   </span>}
                 split={'horizontal'}>
          <StatisticCard
            statistic={{
              value: '1,680',
              suffix: '万',
            }}
            chart={
              <div style={{width: '100%', height: '50px'}}
                   ref={echartsRef}>

              </div>
            }
          >
          </StatisticCard>
          <ProCard title={'转化率'} extra={'60%'}></ProCard>
        </ProCard>
        <ProCard headerBordered title={'新增用户'}
                 extra={
                   <span role={'img'} className="anticon"
                   ><WeekIcon/>
                   </span>}
                 split={'horizontal'}>
          <StatisticCard
            statistic={{
              value: '128',
              suffix: '位',
            }}
            chart={
              <Avatar.Group
                style={{height: '50px'}}
                maxCount={3}
                maxStyle={{
                  color: '#f56a00',
                  backgroundColor: '#fde3cf',
                }}
              >
                <Avatar
                  src="https://joesch.moe/api/v1/random?key=1"
                  size={28}
                  style={{
                    background: '#168cff',
                  }}
                />
                <Avatar
                  src="https://joesch.moe/api/v1/random?key=2"
                  size={28}
                  style={{
                    background: '#14c9c9',
                  }}
                />
                <Avatar
                  size={28}
                  src={'https://joesch.moe/api/v1/random?key=3'}
                  style={{
                    backgroundColor: '#7bc616',
                  }}
                >

                </Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    src={'https://joesch.moe/api/v1/random?key=4'}
                  />
                </Tooltip>
                <Avatar
                  src={'https://joesch.moe/api/v1/random?key=5'}
                />
              </Avatar.Group>
            }
          >
          </StatisticCard>
          <ProCard title={'总用户'} extra={'10802人'}></ProCard>
        </ProCard>
      </ProCard>

    </ProCard>

    <ProCard ghost split={'vertical'} bordered={false} className="link-item" gutter={[20, 20]}>
      {
        items.map(item => <ProCard hoverable key={item.title}>
          <Space style={{flexDirection: 'column', width: '100%'}}>
            <span role="img" className="anticon" style={{fontSize: '30px'}}>
              {item.icon}
            </span>
            <div>{item.title}</div>
          </Space>
        </ProCard>)
      }
    </ProCard>
  </Warp>);
};

export default Overview;