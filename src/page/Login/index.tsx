import {Divider, Form} from 'antd';
import {Warp} from './style';
import {connect} from 'react-redux';
import {getUserInfo, login} from '@/store/global/actions';
import {LoginForm, ProFormText} from '@ant-design/pro-components';

import {LockOutlined, UserOutlined} from '@ant-design/icons';
import React from 'react';

const Login = (props) => {
  const {login, getUserInfo} = props;

  const onFinish = (values) => {
    return login(values).then(res => {
      const {token} = res.data;
      getUserInfo(token);
    });
  };
  return <Warp>
    <div className={'login'}>
      <LoginForm
        onFinish={onFinish}
        logo="https://www.logosc.cn/logomrdata/2017/12/13/ff616ad1-0a2e-40a4-8842-9b0b97ea55e4.png"
        title="Admin"
        subTitle=" "
        initialValues={{
          username: 'admin',
          password: '123456',
        }}
      >
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'}/>,
            }}
            placeholder={'用户名: admin or user'}
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'}/>,
            }}
            placeholder={'密码: ant.design'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
          <Divider>Tip</Divider>
          <Form.Item style={{textAlign: 'center'}}>
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

const mapStateToProps = (state) => {
  return {
    global: state.global,
  };
};
// export default connect(mapStateToProps,{login})(Login);
export default connect((state:any) => state.global, {login, getUserInfo})(Login);