import React, { Component } from 'react'
import { Input, DatePicker, Button } from 'antd';
import moment from 'moment';

const Search = Input.Search;
const RangePicker = DatePicker.RangePicker;

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

export default class HomeSearch extends Component {
  render() {
    return (
        <div className="search-card">
          <h3>Petbnb</h3>
          <div className="search-buttons">
            <Button style={{width:"170px"}} icon="crown">Boarding</Button>
            <Button style={{width:"170px"}} disabled icon="fire">Sitting</Button>
            <Button style={{width:"170px"}} disabled icon="rocket">Walking</Button>
          </div>
          <div className="search-buttons">
            <Search
              style={{marginRight:"20px"}} 
              placeholder="Town or postcode..."
              onSearch={value => console.log(value)}
            />
            <RangePicker
              ranges={{ Today: [moment(), moment()], 'This Month': [moment().startOf('month'), moment().endOf('month')] }}
              onChange={onChange}
            />
          </div>
          <div style={{textAlign:"center"}}>
            <Button style={{backgroundColor:"#59a4ad", border:"none", color:"white"}}>Find host</Button>
          </div>
        </div>
    
    )
  }
}
