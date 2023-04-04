import {
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormRadio,
} from "@ant-design/pro-components";
import React, {useEffect, useRef, useState} from "react";
import {AuthControl} from "@/components/Auth";
import {Button, Divider, Space} from "antd";
import {currentRoute} from "@/utils";
import type {FormInstance} from "@ant-design/pro-components";

const authEnum = [
  "save",
  "reset",
  "edit",
  "submit",
  "view",
];

const PermissionCart = [
  {
    text: "Auth-- > [Admin]",
    role: ["admin"],
    style: {
      height: "100%",
      background: "linear-gradient(to left, #4BC0C8, #C779D0, #FEAC5E)",
    }
  },
  {
    text: "Auth---> [Editor]",
    role: ["editor"],
    style: {
      height: "100%",
      background: "linear-gradient(to right, #ed4264, #ffedbc,#ed4264)",
    }
  }, {
    text: "Auth-- > [Guest]",
    role: ["guest"],
    style: {
      height: "100%",
      background: "linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)",
    }
  },

];
const PermissionBtn = [
  {
    text: "Save",
    permission: ["save"],
  },
  {
    text: "Reset",
    permission: ["reset"],
  },
  {
    text: "Edit",
    permission: ["edit"],
  },
  {
    text: "Submit",
    permission: ["submit"],
    backup: <span>[没有Submit权限的回显!]</span>
  },
  {
    text: "View",
    permission: ["view"],
  },


];

const PermissionComponent = () => {
  const refFrom = useRef<FormInstance | null>();
  const [role, setRole] = useState(["admin"]);
  const [permissions, setPermissions] = useState<string[]>([]);

  /*获取当前路由下的控件权限信息*/
  const {route} = currentRoute();
  const permissionControl = route?.route?.meta?.auth?.permissionControl!;

  useEffect(() => {
    setPermissions(permissionControl);
  }, []);

  return <div style={{background: "#fff"}}>
    <ProForm
      formRef={refFrom}
      layout={"horizontal"}
      title={"其他权限"}
      initialValues={{
        permissions: ["save"],
      }}
      submitter={{
        render: (props, doms) => {
          return [
            <AuthControl permissionControl={["reset"]} backup={<a>backup</a>}>
              <Space>
                <Button
                  onClick={() => {
                    refFrom?.current?.resetFields();
                    setPermissions(["save"]);
                  }}>
                  重置
                </Button>
              </Space>
            </AuthControl>,
          ];
        },
      }}
      onValuesChange={(changeVal, values) => {
        const {permissions = []} = values;
        setPermissions(permissions);
      }}
    >
      <ProForm.Group>
        <ProFormCheckbox.Group
          label={"切换权限测试"}
          name="permissions"
          options={authEnum}
        />
        <ProForm.Item label={"按钮组"}>
          <Space size={[12, 12]}>
            {
              PermissionBtn.map(item => (
                <AuthControl
                  key={item.text}
                  permissionControl={() => !!item.permission.filter(inner => permissions.includes(inner))?.length}
                  backup={item.backup}
                >
                  <Button size={"small"} type={"primary"}>{item.text}</Button>

                </AuthControl>
              ))
            }
          </Space>
        </ProForm.Item>
      </ProForm.Group>
    </ProForm>

    <Divider></Divider>

    <ProForm
      layout={"horizontal"}
      submitter={{
        render: () => null,
      }}
      initialValues={{
        role: "admin",
      }}
    >
      <ProFormRadio.Group
        name="role"
        label={`切换权限 --> [${role}]`}
        radioType="button"
        fieldProps={{
          onChange: (e) => {
            const {value} = e.target;
            setRole([value]);
          },
        }}
        options={[
          {
            value: "admin",
            label: "admin",
          },
          {
            value: "editor",
            label: "editor",
          }, {
            value: "guest",
            label: "guest",
          },
        ]}
      />
    </ProForm>

    <ProCard
      split={"vertical"}
      title={"切换演示"}
      bordered
      headerBordered
      boxShadow
      gutter={8}
      style={{height: "220px"}}
    >
      {
        PermissionCart.map(item => (
          <AuthControl
            key={item.text}
            permissionControl={() => role.includes("admin") || !!item.role.filter(inner => role.includes(inner))?.length}>
            <ProCard
              hoverable
              layout={"center"}
              style={item.style}
            >
              <h1>{item.text}</h1>
            </ProCard>
          </AuthControl>
        ))
      }
    </ProCard>
  </div>;
};

export default PermissionComponent;