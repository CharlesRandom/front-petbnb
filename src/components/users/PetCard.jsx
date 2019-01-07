import React from 'react'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

const PetCard = ({pet}) => {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={<img alt="pet pic" src={pet.photoURL ? pet.photoURL : "https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif"} />}
        actions={[<Icon type="delete" />, <Icon type="edit" />]}
      >
        <Meta
          avatar={<Avatar src="https://ar.seaicons.com/wp-content/uploads/2015/10/Cat-icon1.png" />}
          title={pet.name}
          description={pet.description}
        />
      </Card>
    </div>
  )
}

export default PetCard
