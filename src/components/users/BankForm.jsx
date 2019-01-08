import React from 'react'
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

const BankForm = ({addBank, handleText}) => {
  return (
    <div className="bank-form">
      <Form layout="vertical" method="POST" onSubmit={addBank}>
        <FormItem>
          <Input name="name" onChange={handleText} prefix={<Icon type="bank" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Bank name" />
        </FormItem>
        <FormItem>
          <Input name="clabe" onChange={handleText} prefix={<Icon type="wallet" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Clabe" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Done</Button>
        </FormItem>
      </Form>
    </div>
  )
}

export default BankForm