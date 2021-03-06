import React from 'react'
import { Icon, Rate } from 'antd';

const HostCard = ({host}) => {
  return (
    <div className="host-card">
      <div className="host-avatar" style={{backgroundImage:`url("${host.photoURL}")`}}>
      </div>
      <div className="host-info">
        <h2>{host.name}</h2>
        <h3>{host.title}</h3>
        <div>
          <Icon type="environment" />{host.address.zipcode}, {host.address.city}
        </div>
        <Rate disabled allowHalf defaultValue={host.rate ? host.rate : 4.5} />
        <div>
          <Icon type="clock-circle" /> Responds within 1h
        </div>
      </div>
      <div>
        <h3>${host.price}</h3>
        <h4>Per night</h4>
      </div>
    </div>
  )
}

export default HostCard