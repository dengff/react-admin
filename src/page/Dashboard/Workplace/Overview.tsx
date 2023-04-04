import {ProCard, StatisticCard} from "@ant-design/pro-components";

import React from "react";
import * as echarts from "echarts";
import {useEcharts} from "@/hooks";
import {Avatar, Space} from "antd";
import {useSelector} from "react-redux";
import {
  CommentsIcon,
  DataIcon,
  DeliverIcon,
  IncreaseIcon,
  ItemsIcon,
  MessageIcon,
  TodoIcon,
} from "@/components/Icon";
import {selectGlobal} from "@/store/global/selectors";

const {Divider} = ProCard;

const option = {
  backgroundColor: "#fff",
  title: {
    textStyle: {
      fontSize: 12,
      fontWeight: 400,
    },
    left: "center",
    top: "5%",
  },
  legend: {
    icon: "circle",
    top: "5%",
    right: "5%",
    itemWidth: 6,
    itemGap: 20,
    textStyle: {
      color: "#556677",
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      label: {
        show: true,
        backgroundColor: "#fff",
        color: "#556677",
        borderColor: "rgba(0,0,0,0)",
        shadowColor: "rgba(0,0,0,0)",
        shadowOffsetY: 0,
      },
      lineStyle: {
        width: 0,
      },
    },
    backgroundColor: "#fff",
    textStyle: {
      color: "#5c6c7c",
    },
    padding: [10, 10],
    extraCssText: "box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)",
  },
  grid: {
    top: "15%",
  },
  xAxis: [
    {
      type: "category",
      data: ["北京", "上海", "广州", "深圳", "香港", "澳门", "台湾"],
      axisLine: {
        lineStyle: {
          color: "#DCE2E8",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: "#556677",
        },
        fontSize: 12,
        margin: 15,
      },
      axisPointer: {
        label: {
          padding: [0, 0, 10, 0],
          margin: 15,
          fontSize: 12,
          backgroundColor: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#fff",
              }, {
                offset: 0.86,
                color: "#fff",
              }, {
                offset: 0.86,
                color: "#33c0cd",
              }, {
                offset: 1,
                color: "#33c0cd",
              }],
            global: false,
          },
        },
      },
      boundaryGap: false,
    }],
  yAxis: [
    {
      type: "value",
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#DCE2E8",
        },
      },
      axisLabel: {
        textStyle: {
          color: "#556677",
        },
      },
      splitLine: {
        show: false,
      },
    }, {
      type: "value",
      position: "right",
      show: true,
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#556677",
        },
        formatter: "{value}",
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#DCE2E8",
        },
      },
      splitLine: {
        show: false,
      },
    }],
  series: [
    {
      name: "线上总数据",
      type: "line",
      data: [10, 10, 30, 12, 15, 3, 7],
      symbolSize: 1,
      symbol: "circle",
      smooth: true,
      yAxisIndex: 0,
      showSymbol: false,
      lineStyle: {
        width: 5,
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
          {
            offset: 0,
            color: "#9effff",
          },
          {
            offset: 1,
            color: "#9E87FF",
          },
        ]),
        shadowColor: "rgba(158,135,255, 0.3)",
        shadowBlur: 10,
        shadowOffsetY: 20,
      },
      itemStyle: {
        normal: {
          color: "#9E87FF",
          borderColor: "#9E87FF",
        },
      },
    }, {
      name: "投放中的内容",
      type: "line",
      data: [5, 12, 11, 14, 25, 16, 10],
      symbolSize: 1,
      symbol: "circle",
      smooth: true,
      yAxisIndex: 0,
      showSymbol: false,
      lineStyle: {
        width: 5,
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: "#73DD39",
          },
          {
            offset: 1,
            color: "#73DDFF",
          },
        ]),
        shadowColor: "rgba(115,221,255, 0.3)",
        shadowBlur: 10,
        shadowOffsetY: 20,
      },
      itemStyle: {
        normal: {
          color: "#73DDFF",
          borderColor: "#73DDFF",
        },
      },
    },
    {
      name: "日新增评论",
      type: "line",
      data: [150, 120, 170, 140, 500, 160, 110],
      symbolSize: 1,
      yAxisIndex: 1,
      symbol: "circle",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        width: 5,
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: "#fe9a",
          },
          {
            offset: 1,
            color: "#fe9a8b",
          },
        ]),
        shadowColor: "rgba(254,154,139, 0.3)",
        shadowBlur: 10,
        shadowOffsetY: 20,
      },
      itemStyle: {
        normal: {
          color: "#fe9a8b",
          borderColor: "#fe9a8b",
        },
      },
    },
    {
      name: "较昨日新增",
      type: "line",
      data: [30, 60, 400, 180, 320, 666, 367],
      symbolSize: 1,
      yAxisIndex: 1,
      symbol: "circle",
      smooth: true,
      showSymbol: false,
      lineStyle: {
        width: 5,
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: "pink",
          },
          {
            offset: 1,
            color: "pink",
          },
        ]),
        shadowColor: "pink",
        shadowBlur: 10,
        shadowOffsetY: 20,
      },
      itemStyle: {
        normal: {
          color: "pink",
          borderColor: "pink",
        },
      },
    },
  ],
};

export const Overview = () => {
  const [echartsRef] = useEcharts(option);
  const {userInfo} = useSelector(selectGlobal);
  const Title = () => {

    return <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      paddingLeft: "24px",
    }}>
      <Avatar
        style={{
          cursor: "pointer",
        }}
        size={40}
        src={<img src={userInfo?.avatar} alt="avatar"/>}
      >
      </Avatar>
      <div>
        早安 {userInfo?.name}，开始您一天的工作吧！
      </div>
    </div>;

  };
  const Extra = () => <div style={{minWidth: "360px"}}>
    <ProCard ghost bordered={false}>
      <StatisticCard
        ghost
        layout={"center"}
        statistic={{
          title: <Space>
            <span style={{fontSize: "16px"}}>
            <ItemsIcon/>
          </span>
            {"项目数"}
          </Space>,
          value: 24,
        }}
      />
      <StatisticCard
        ghost
        layout={"center"}
        statistic={{
          title: <Space align={"center"}>
            <span style={{fontSize: "16px"}}>
            <TodoIcon/>
          </span>
            {"待办"}
          </Space>,
          value: 15,
        }}
      /><StatisticCard
      ghost
      statistic={{
        title: <Space>

          <span style={{fontSize: "16px"}}>
        <MessageIcon/>
      </span>
          <span>
            消息
          </span>
        </Space>,
        value: 99,
      }}
    />
    </ProCard>
  </div>;
  return (
    <ProCard
      headerBordered
      split={"horizontal"}
      ghost
      headStyle={{background: "#fff"}}
      title={<Title/>}
      extra={<Extra/>}
    >
      <ProCard split={"horizontal"} gutter={[0, 20]} ghost>
        <ProCard split={"vertical"}>
          <ProCard.Group title="">
            <ProCard hoverable>
              <StatisticCard
                statistic={{
                  title: "线上总数据",
                  value: 79.0,
                  icon: (
                    <span style={{fontSize: "32px"}}><DataIcon/></span>
                  ),
                }}
              />
            </ProCard>
            <Divider/>
            <ProCard hoverable>
              <StatisticCard
                statistic={{
                  style: {
                    width: "89px",
                  },
                  title: "投放中的内容",
                  value: 112893.0,
                  icon: <span style={{fontSize: "32px"}}><DeliverIcon/></span>,
                }}
              />
            </ProCard>
            <Divider/>
            <ProCard hoverable>
              <StatisticCard
                statistic={{
                  title: "日新增评论",
                  value: 93,
                  icon: <span
                    style={{fontSize: "32px"}}> <CommentsIcon/></span>,
                }}
              />
            </ProCard>
            <Divider/>
            <ProCard hoverable>
              <StatisticCard
                statistic={{
                  title: "较昨日新增",
                  value: 112893.0,
                  icon: <span style={{fontSize: "32px"}}>
                    <IncreaseIcon/>
                  </span>,
                }}

              />
            </ProCard>
          </ProCard.Group>
        </ProCard>
        <ProCard
          layout={"center"} ref={echartsRef}
          style={{width: "100%", height: "300px"}}>
        </ProCard>
      </ProCard>

    </ProCard>
  );
};
export default Overview;