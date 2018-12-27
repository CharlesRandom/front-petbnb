import React from 'react'
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

const AddressForm = ({addAddress, handleText}) => {
  return (
    <div>
      <Form layout="vertical" method="POST" onSubmit={addAddress}>
        <FormItem>
          <Input name="street" onChange={handleText} prefix={<Icon type="car" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Street" />
        </FormItem>
        <FormItem>
          <Input name="houseNumber" onChange={handleText} prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="House Number" />
        </FormItem>
        <FormItem>
          <Input name="aptNumber" onChange={handleText} prefix={<Icon type="block" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Interior Number" />
        </FormItem>
        <FormItem>
          <Input name="city" onChange={handleText} prefix={<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="City" />
        </FormItem>
        <FormItem>
          <Input name="state" onChange={handleText} prefix={<Icon type="flag" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="State" />
        </FormItem>
        <FormItem>
          <Input name="zipcode" onChange={handleText} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Zipcode" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Save</Button>
        </FormItem>
      </Form>
    </div>
  )
}

export default AddressForm