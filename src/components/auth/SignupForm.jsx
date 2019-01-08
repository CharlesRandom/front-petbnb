import React from 'react'
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

const SignupForm = ({signup, handleText}) => {
  return (
    <div className="auth-form">
      <Form layout="vertical" method="POST" onSubmit={signup}>
        <FormItem>
          <Input name="name" onChange={handleText} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />
        </FormItem>
        <FormItem>
          <Input name="email" onChange={handleText} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
        </FormItem>
        <FormItem>
          <Input name="password" onChange={handleText} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Sign Up</Button>
        </FormItem>
      </Form>
    </div>
  )
}

export default SignupForm
