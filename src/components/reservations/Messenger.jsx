import React, { Component } from 'react'
import {
  Comment, Avatar, Form, Button, List, Input,
} from 'antd';

import moment from 'moment';

const TextArea = Input.TextArea;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({
  onChange, onSubmit, submitting, value,
}) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class Messenger extends Component {

  state = {
    user:{},
    comments: [],
    submitting: false,
    value: '',
  }

  componentWillMount(){
    console.log("Messenger page will mount")
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user) this.props.history.push('/login')
    else this.setState({user})
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: this.state.user.name,
            avatar: this.state.user.photoURL ? this.state.user.photoURL : 'https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    const { comments, submitting, value, user } = this.state;

    return (
      <div className="messenger">
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={(
            <Avatar
              src={user.photoURL ? user.photoURL : "https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif"}
              alt="Mastermind"
            />
          )}
          content={(
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          )}
        />
      </div>
    )
  }
}

export default Messenger