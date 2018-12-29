import React from 'react'
import { Form, Icon, Input, Radio, Button } from 'antd';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

const HostForm = ({addHost, handleText, handleImage}) => {
  return (
    <div>
      <Form layout="vertical" method="POST" onSubmit={addHost}>
        <FormItem>
          <input onChange={handleImage} type="file" name="photoURL"/>
        </FormItem>
        <FormItem>
          <input onChange={handleImage} type="file" name="cover"/>
        </FormItem>
        <FormItem>
          <Input name="phone" onChange={handleText} prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Phone" />
        </FormItem>
        <FormItem>
          <Input name="price" onChange={handleText} prefix={<Icon type="dollar" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Price per night" />
        </FormItem>
        <FormItem>
          <RadioGroup name="homeType" size="large" buttonStyle="solid" 
          onChange={handleText}>
            <RadioButton value="House">House</RadioButton>
            <RadioButton value="Apt">Apt</RadioButton>
            <RadioButton value="Other">Other</RadioButton>
          </RadioGroup>
        </FormItem>
        <FormItem>
          <Input name="title" onChange={handleText} prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Profile title, how your profile will be listed" />
        </FormItem>
        <FormItem>
          <TextArea name="description" rows={4} placeholder="Describe how will be the experience with you" onChange={handleText}/>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Next</Button>
        </FormItem>
      </Form>
    </div>
  )
}

export default HostForm