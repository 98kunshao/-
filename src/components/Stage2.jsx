import React from 'react';
import {InputItem} from 'antd-mobile';

export default class Demo extends React.Component {
  componentDidMount() {
    this.props.changeTitle('疫情上报');
  }
  render() {
    return (
    <div>
        <InputItem clear ><span style={{color:'red'}}>*</span>身份证号</InputItem>
        <InputItem clear ><span style={{color:'red'}}>*</span>姓名</InputItem>
    </div>);
  }
}
