import React from 'react'
import { Input } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';

const Search = Input.Search;
const RangePicker = DatePicker.RangePicker;

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}



const SearchBox = () => {
  return (
    <div className="search-box">
      <h3>Petbnb</h3>
      <Search
        placeholder="Town or postcode..."
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
      <RangePicker
        ranges={{ Today: [moment(), moment()], 'This Month': [moment().startOf('month'), moment().endOf('month')] }}
        onChange={onChange}
      />
    </div>
  )
}

export default SearchBox
