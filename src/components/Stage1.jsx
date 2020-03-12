import React from 'react';
import {  InputItem,TextareaItem,Button } from 'antd-mobile';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    this.props.changeTitle('信息登记');
  }
  
  render() {
    return (
      <div>
        <InputItem clear ><span style={{color:'red'}}>*</span>身份证号</InputItem>
        <InputItem clear ><span style={{color:'red'}}>*</span>姓名</InputItem>
        <InputItem clear ><span style={{color:'red'}}>*</span>联系方式</InputItem>
        <InputItem clear ><span style={{color:'red'}}>*</span>一级公司</InputItem>
        <InputItem clear >二级公司</InputItem>
        <InputItem clear ><span style={{color:'red'}}>*</span>户籍地址</InputItem>
        <InputItem clear >详细户籍地址</InputItem>
        <InputItem clear ><span style={{color:'red'}}>*</span>常住地址</InputItem>
        <InputItem clear >详细常住地址</InputItem>
        <TextareaItem clear title="备注" style={{height:'150px'}}></TextareaItem>
        <Button type="primary" style={{width:'70%',marginLeft:'15%',marginTop:'10px'}}>提交</Button>
      </div>
    );
  }
}


