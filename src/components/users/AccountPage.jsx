import React from 'react'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

const AccountPage = ({user}) => {
  return (
    <div>
      <div className="account-container">
      <Card
        style={{ width: 300 }}
        cover={<img alt="cover pic" src={user.cover ? user.cover : "https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif"} />}
        actions={[
        <div>
          <Icon type="setting" />
          <p>Settings</p>
        </div>,
        <div>
          <Icon type="edit" />
          <p>Personal Details</p>
        </div>,
        <div>
          <Icon type="project" />
          <p>Transactions</p>
        </div>]}
      >
        <Meta
          avatar={<Avatar size="large" src={user.photoURL ? user.photoURL : "https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif"} />}
          title={user.name}
          description={user.email}
        />
      </Card>
    </div>
    </div>
  )
}

export default AccountPage