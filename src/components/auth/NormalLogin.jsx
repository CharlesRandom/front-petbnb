import React from 'react'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

const FormItem = Form.Item;

class NormalLogin extends React.Component {
  render() {
    return (
      <Form className="login-form">
        <FormItem>
        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        </FormItem>
        <FormItem>
        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
        <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

export default NormalLogin