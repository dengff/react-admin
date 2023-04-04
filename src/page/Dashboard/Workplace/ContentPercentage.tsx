import {ProCard} from "@ant-design/pro-components";
import {Radio, Table} from "antd";
import React, {useState} from "react";
import {useEcharts} from "@/hooks";
import type {ColumnsType} from "antd/es/table";
import {RadioChangeEvent} from "antd/es/radio/interface";


const preData: { [key: string]: any[] } = {
  "original": [
    {value: 1048, name: "纯文本", itemStyle: {color: "#69b1ff"}},
    {value: 735, name: "图文类", itemStyle: {color: "#b7eb8f"}},
    {value: 580, name: "视频类", itemStyle: {color: "#9254de"}},
    {value: 378, name: "其他", itemStyle: {color: "#d25512"}},
  ],
  "extranet": [
    {value: 600, name: "纯文本", itemStyle: {color: "#69b1ff"}},
    {value: 1200, name: "图文类", itemStyle: {color: "#b7eb8f"}},
    {value: 410, name: "视频类", itemStyle: {color: "#9254de"}},
    {value: 778, name: "其他", itemStyle: {color: "#d25512"}},
  ],
  "transshipment": [
    {value: 480, name: "纯文本", itemStyle: {color: "#69b1ff"}},
    {value: 735, name: "图文类", itemStyle: {color: "#b7eb8f"}},
    {value: 1100, name: "视频类", itemStyle: {color: "#9254de"}},
    {value: 559, name: "其他", itemStyle: {color: "#d25512"}},
  ],
};
export const ContentPercentage = () => {
  const [radioValue, setRadioValue] = useState("original");

  const columns: ColumnsType<any> = [
    {
      title: "排名",
      dataIndex: "key",
      key: "key",
      render: (text) => <a style={{
        background: "linear-gradient(180deg,#f64242 20%,rgba(246,66,66,.4) 80%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        minWidth: ".8rem",
        justifyContent: "center",
        alignItems: "center",
      }}>{text}</a>,
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "访问量",
      dataIndex: "visits",
      key: "visits",
      render: (visits, record, index) => (
        <div>
          {index < 3 &&
            <svg style={{marginRight: "4px"}} data-v-034f5a09="" width="12"
                 height="12" viewBox="0 0 12 12"
                 fill="none" xmlns="http://www.w3.org/2000/svg"
                 className="hot-icon">
              <path data-v-034f5a09=""
                    d="M4.88933 0.614951C4.92947 0.617922 4.96831 0.630544 5.00253 0.651744C6.67348 1.68687 7.55141 3.13982 7.63632 5.01059C7.947 5.01059 8.2245 4.66096 8.46882 3.9617L8.49487 3.88544C8.53862 3.75449 8.68025 3.68379 8.8112 3.72754C8.83398 3.73515 8.85554 3.746 8.87522 3.75976C9.96316 4.52027 10.5048 5.50328 10.5 6.70879C10.4999 6.7386 10.4982 6.76773 10.495 6.79618C10.4985 6.86391 10.5 6.93229 10.5 7.00102C10.5 9.4863 8.48528 11.501 6 11.501C3.51472 11.501 1.5 9.4863 1.5 7.00102C1.5 6.90353 1.5031 6.80676 1.50921 6.71081C1.5062 6.71014 1.5031 6.70947 1.5 6.70879C1.50864 6.60946 1.52139 6.51092 1.53824 6.41316C1.54515 6.35873 1.55321 6.3047 1.56222 6.251L1.57017 6.2508C1.7622 5.38228 2.28426 4.57698 3.13635 3.83492C4.00892 3.07502 4.50079 2.11621 4.61198 0.958475L4.62156 0.845816C4.63175 0.708122 4.75163 0.604761 4.88933 0.614951Z"
                    fill="#F64242"></path>
            </svg>}
          {visits}
        </div>
      ),
    },
    {
      title: "热度",
      key: "heat",
      dataIndex: "heat",
      render: (heat) => {
        return <div style={{display: "flex", alignItems: "center"}}>
          <div style={{
            fontSize: "18px",
            fontWeight: "500",
            marginRight: ".5rem",
          }}>{heat}</div>
          <div style={{
            fontSize: "18px",
          }}>热度
          </div>
        </div>;
      },
    },
  ];
  const data = [
    {
      key: "1",
      name: "wdf",
      visits: "405",
      heat: "45",
      title: "一文读懂 ChatGPT API 接入指南",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      visits: "900",
      heat: "90",
      key: "2",
      title: "webpack沦为对比单位？前端整活圈又出新品了",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      visits: "505",
      heat: "405",
      name: "Joe Black",
      title: "捣鼓一个记账类的小程序",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "4",
      visits: "77",
      heat: "999",
      name: "Joe Black",
      title: "前端性能优化-首页资源优化",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "5",
      visits: "727",
      heat: "359",
      name: "Joe Black",
      title: "JavaScript的三座大山",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  const option = {
    title: {
      text: "内容量",
      subtext: "928230",
      left: "center",
      top: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "5%",
      left: "center",
    },

    series: [
      {
        name: "Capacity",
        type: "pie",
        radius: ["40%", "55%"],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "outside",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: preData[radioValue],
      },
    ],
  };

  const [echartsRef] = useEcharts(option, preData[radioValue]);

  const handleChange = (e: RadioChangeEvent) => {
    const {value} = e.target;
    setRadioValue(value);
  };
  return (
    <ProCard style={{margin: "10px 0"}} ghost split={"vertical"}>
      <ProCard.Group>
        <ProCard
          colSpan={"60%"}
          headStyle={{height: "48px"}}
          title="线上热门内容" extra={<a>查看更多</a>}>
          <Table rowKey={"title"} columns={columns} dataSource={data}/>
        </ProCard>
        <ProCard
          colSpan={"40%"} title="内容类比占比" layout={"center"}
          style={{width: "100%", height: "100%"}}
          extra={
            <Radio.Group
              name="radio-button"
              optionType="button"
              defaultValue={"original"}
              size={"small"}
              buttonStyle={"outline"}
              onChange={(e) => handleChange(e)}
              options={[
                {
                  label: "原创",
                  value: "original",
                },
                {
                  label: "外网",
                  value: "extranet",
                },
                {
                  label: "转载",
                  value: "transshipment",
                },
              ]}
            />
          }
        >
          <div ref={echartsRef}
               style={{width: "100%", height: "100%"}}>
          </div>
        </ProCard>
      </ProCard.Group>
    </ProCard>
  );
};

export default ContentPercentage;