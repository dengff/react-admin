import type {ProFormInstance} from "@ant-design/pro-components";
import {ProForm, ProFormRadio} from "@ant-design/pro-components";
import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo, login} from "@/store/global/actions";

import type {RadioChangeEvent} from "antd";
import {selectGlobal} from "@/store/global/selectors";
import type {AppDispatch} from "@/store";


const PermissionPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const refFrom = useRef<ProFormInstance>();
  /*本地模拟权限切换*/
  const {userInfo} = useSelector(selectGlobal);
  const {id = ""} = userInfo ?? {};
  const [authPage, setAuthPage] = useState(id);
  const handleChange = (e: RadioChangeEvent) => {
    const {value} = e.target;
    setAuthPage(value);
    dispatch(login({username: value, password: "123456"})).then(res => {
      const {token} = res?.data;
      dispatch(getUserInfo(token));

    });
  };
  return (
    <ProForm
      style={{background: "#fff", height: "100%"}}
      formRef={refFrom}
      layout={"horizontal"}
      title={"其他权限"}
      submitter={{
        render: (props, doms) => null,
      }}
    >
      <ProForm.Group
        title={"页面权限示例"}
      >
        <ProFormRadio.Group
          name="authPage"
          label={`切换页面权限 --> 当前Role:[${authPage}]`}
          radioType="button"
          initialValue={authPage}
          fieldProps={{
            onChange: (e) => handleChange(e),
          }}
          options={[
            {
              value: "admin",
              label: "admin",
            }, {
              value: "editor",
              label: "editor",
            }, {
              value: "guest",
              label: "guest",
            },
          ]}
        />
      </ProForm.Group>

    </ProForm>
  );
};

export default PermissionPage;