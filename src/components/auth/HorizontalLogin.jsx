import React, { Component } from 'react'
import {
  Form, Icon, Input, Button,
} from 'antd';

const FormItem = Form.Item;

class HorizontalLogin extends React.Component {

  render() {

    // Only show error after a field is touched.
    
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem>
        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        </FormItem>
        <FormItem>
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default HorizontalLogin