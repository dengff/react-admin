import {ProCard} from '@ant-design/pro-components';
import {useEcharts} from '@/hooks';

export const LineChart = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '2019-12',
          '2020-01',
          '2020-02',
          '2020-03',
          '2020-04',
          '2020-05',
          '2020-06'],
        axisLine: {
          lineStyle: {
            color: '#999',
          },
        },
      }],
    yAxis: [
      {
        type: 'value',
        splitNumber: 4,
        axisLabel: {
          formatter: '{value} K',
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#DDD',
          },
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#333',
          },
        },
        nameTextStyle: {
          color: '#999',
        },
        splitArea: {
          show: false,
        },
      }],
    series: [
      {
        name: '总容量',
        type: 'line',
        data: [60, 140, 100, 70, 110, 73, 124],
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(216, 244, 247,1)',
              }, {
                offset: 1,
                color: 'rgba(216, 244, 247,1)',
              }], false),
          },
        },
        lineStyle: {
          normal: {
            width: 3,
            color: '#4096ff',
            shadowColor: 'rgba(72,216,191, 0.3)',
            shadowBlur: 10,
            shadowOffsetY: 20,
          },
        },
        itemStyle: {
          normal: {
            color: '#288f0c',
            borderWidth: 10,
            /*shadowColor: 'rgba(72,216,191, 0.3)',
            shadowBlur: 100,*/
            borderColor: '#A9F387',
          },
        },
        smooth: true,
      }],
  };
  const [echartsRef] = useEcharts(option);
  return (
    <ProCard layout={'center'} ghost gutter={[20, 0]} split={'vertical'}>
      <ProCard headerBordered title={'数据图表'}>
        <div style={{height: '500px', width: '100%'}} ref={echartsRef}></div>
      </ProCard>
    </ProCard>
  );

};
export default LineChart;