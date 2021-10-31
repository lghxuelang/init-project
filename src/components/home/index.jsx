import React from "react";
import { DatePicker, Button } from "antd";
import _ from 'lodash';
import {getPP} from '../../api'

export default () => {
  const search = ()=>{
    getPP().then(res => {
      console.log(res);
    });
  }
  return (
    <div>
      Home Page
      <DatePicker />
      <Button type='primary' onClick={search}>
        查询
      </Button>
    </div>
  );
};
