import React from 'react'
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

const LoginForm = ({login, handleText}) => {
  return (
    <div>
      <Form layout="inline" method="POST" onSubmit={login}>
        <FormItem>
        <Input name="email" onChange={handleText} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
        </FormItem>
        <FormItem>
          <Input name="password" onChange={handleText} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Log in</Button>
        </FormItem>
      </Form>
    </div>
  )
}

export default LoginForm
