import React from 'react'
import { Form, Icon, Input, Radio, Select, Button, Upload } from 'antd';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { TextArea } = Input;

const PetForm = ({addPet, handleText, handleSelectChange, handleImage, onChange}) => {
  return (
    <div className="pet-form">
      <Form layout="vertical" method="POST" onSubmit={addPet}>
        <FormItem>
          {/* <input onChange={handleImage} type="file" name="photoURL"/> */}
          <Upload onChange={(info)=>onChange(info,"photoURL")}>
            <Button>
              <Icon type="upload" /> Upload Pet Pic
            </Button>
          </Upload>
        </FormItem>
        <FormItem>
          <Input name="name" onChange={handleText} prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />
        </FormItem>
        <FormItem>
          <RadioGroup name="size" size="large" buttonStyle="solid" 
          onChange={handleText}>
            <RadioButton value="Small">Small</RadioButton>
            <RadioButton value="Medium">Medium</RadioButton>
            <RadioButton value="Large">Large</RadioButton>
            <RadioButton value="X-large">X-large</RadioButton>
          </RadioGroup>
        </FormItem>
        <FormItem>
          <RadioGroup name="gender" size="large" buttonStyle="solid" 
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
          <TextArea name="description" rows={4} placeholder="Describe your pet" onChange={handleText}/>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Save</Button>
        </FormItem>
      </Form>
    </div>
  )
}

export default PetForm
