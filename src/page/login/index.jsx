import { Button, Checkbox, Form, Input,Card } from 'antd';
import {useNavigate} from 'react-router-dom';
import style from "./index.module.scss"
import {connect,useSelector} from 'react-redux';
import {login,getUserInfo} from '@/store/global/actions.js';

const Login = (props) => {
  const {login,getUserInfo} = props
  const navigate = useNavigate()

  const onFinish = (values) => {
    login(values).then(res=>{
      const {token } = res
      getUserInfo(token)
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return <div className={style.warp}>
    <Card className={style.login} title="MIX JSKTTUUUY" bordered={false}
          style={{width: 300}}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          initialValue={"admin"}
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          initialValue={"123456"}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password/>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
        </Form.Item>
      </Form>
    </Card>

  </div>

};


const mapStateToProps = (state)=>{
  return {
    global: state.global
  }
}
// export default connect(mapStateToProps,{login})(Login);
export default connect(state=>state.global,{login,getUserInfo})(Login);