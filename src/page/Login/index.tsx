import {Divider, Form} from "antd";
import {Warp} from "./style";
import {useDispatch} from "react-redux";
import {getUserInfo, login} from "@/store/global/actions";
import {LoginForm, ProFormText} from "@ant-design/pro-components";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";
import logo from '@/static/img/logo.png'
import type {AppDispatch} from "@/store";

interface ILoginForm {
  username: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onFinish = async (values: ILoginForm) => {
    const {data: {token}} = await dispatch(login(values));
    dispatch(getUserInfo(token));
  };

  return <Warp>
    <div className={"login"}>
      <LoginForm<ILoginForm>
        onFinish={values => onFinish(values)}
        logo={logo}
        title="Admin"
        subTitle=" "
        initialValues={{
          username: "admin",
          password: "123456",
        }}
      >
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: "large",
              prefix: <UserOutlined className={"prefixIcon"}/>,
            }}
            placeholder={"用户名: admin or user"}
            rules={[
              {
                required: true,
                message: "请输入用户名!",
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: "large",
              prefix: <LockOutlined className={"prefixIcon"}/>,
            }}
            placeholder={"密码: ant.design"}
            rules={[
              {
                required: true,
                message: "请输入密码！",
              },
            ]}
          />
          <Divider>Tip</Divider>
          <Form.Item style={{textAlign: "center"}}>
            <div>账号 : admin 密码 : 随便填</div>
            <div>账号 : editor 密码 : 随便填</div>
            <div>账号 : guest 密码 : 随便填</div>
          </Form.Item>
        </>
      </LoginForm>
    </div>
    <div className="g-polygon-1"></div>
    <div className="g-polygon-2"></div>
    <div className="g-polygon-3"></div>
  </Warp>;

};

export default Login;