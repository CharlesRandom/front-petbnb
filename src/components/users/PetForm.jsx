import React from 'react'
import { Form, Icon, Input, Radio, Select, Button } from 'antd';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const PetForm = ({addPet, handleText, handleSelectChange}) => {
  return (
    <div>
      <Form layout="inline" method="POST" onSubmit={addPet}>
        <FormItem>
          <Input name="name" onChange={handleText} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />
        </FormItem>
        <FormItem>
          <RadioGroup name="size" defaultValue="Small" size="large" buttonStyle="solid" 
          onChange={handleText}>
            <RadioButton value="Small">Small</RadioButton>
            <RadioButton value="Medium">Medium</RadioButton>
            <RadioButton value="Large">Large</RadioButton>
            <RadioButton value="X-large">X-large</RadioButton>
          </RadioGroup>
        </FormItem>
        <FormItem>
          <RadioGroup name="gender" defaultValue="Male" size="large" buttonStyle="solid" 
          onChange={handleText}>
            <RadioButton value="Male">Male</RadioButton>
            <RadioButton value="Female">Female</RadioButton>
          </RadioGroup>
        </FormItem>
        <FormItem>
          <Select name="kind"
            showSearch
            style={{ width: 200 }}
            placeholder="Select a kind"
            optionFilterProp="children"
            onChange={handleSelectChange}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Dog">Dog</Option>
            <Option value="Cat">Cat</Option>
            <Option value="Other">Other</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Save</Button>
        </FormItem>
      </Form>
    </div>
  )
}

export default PetForm
