import React from 'react'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

const PetCard = ({pet}) => {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={<img style={{height:"50%"}} alt="pet pic" src={pet.photoURL ? pet.photoURL : "https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif"} />}
        actions={[<Icon type="delete" />, <Icon type="edit" />]}
      >
        <Meta
          avatar={<Avatar src="https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif" />}
          title={pet.name}
          description={pet.description}
        />
      </Card>
    </div>
  )
}

export default PetCard
