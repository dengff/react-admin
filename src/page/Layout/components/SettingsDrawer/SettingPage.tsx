import {Col, Divider, Row, Space} from "antd";
import React from "react";
import {CheckCard, ProForm, ProFormCheckbox} from "@ant-design/pro-components";
import {changeLayout, changeLayoutMode} from "@/store/topHeader/actions";
import {useDispatch, useSelector} from "react-redux";
import {LayoutIcon} from "@/components/Icon";
import {selectTopHeader} from "@/store/topHeader/selectors";
import type {AppDispatch} from "@/store";

const showComps = [
  {
    value: "tabs",
    label: "标签页",
  },
  {
    value: "breadcrumb",
    label: "面包屑",
  },
  {
    value: "logo",
    label: "Logo",
  },
  {
    value: "pageFooter",
    label: "页脚",
  },
];

const SettingPage = () => {
  const {pageConfig} = useSelector(selectTopHeader);
  const dispatch = useDispatch<AppDispatch>();
  const {layoutItems, layoutMode} = pageConfig;

  return (
    <>
      <Divider><Space style={{alignItems: "center"}}>
        <LayoutIcon/>界面显示
      </Space></Divider>
      <ProForm
        layout={"horizontal"}
        submitter={{
          render: () => null,
        }}
      >
        <ProFormCheckbox.Group
          label={""}
          name="layoutItems"
          initialValue={
            layoutItems
          }
          fieldProps={{
            onChange: (val) => dispatch(changeLayout(val as string[])),
          }}
          options={showComps}
        />
        <CheckCard.Group
          onChange={mode => dispatch(changeLayoutMode(mode as string))
          }
          value={layoutMode} size={"small"} style={{width: "100%"}}>

          <Row gutter={20}>
            <Col span={12}>
              <CheckCard
                title="布局"
                description="经典布局"
                value="classicLayout"
                style={{width: 170, height: 80}}
              />
            </Col>
            <Col span={12}>
              <CheckCard
                title="布局"
                style={{width: 170, height: 80}}
                description="横向布局"
                value="landscapeLayout"
              />
            </Col>
            <Col span={11}>
              <CheckCard
                title="布局"
                style={{width: 170, height: 80}}
                description="纵向布局"
                value="portraitLayout"
              />
            </Col>

          </Row>
        </CheckCard.Group>

      </ProForm>
    </>
  );
};

export default SettingPage;