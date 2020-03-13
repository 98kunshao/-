import React from 'react';
import { InputItem, Checkbox, Button } from 'antd-mobile';

export default class Demo extends React.Component {
  componentDidMount() {
    this.props.changeTitle('疫情上报');
  }
  render() {
    const data = [
      { value: 0, label: '发热' },
      { value: 1, label: '干咳' },
      { value: 2, label: '乏力' },
      { value: 3, label: '呼吸困难' },
      { value: 4, label: '其他症状' },
      { value: 5, label: '以上都没' },
    ]
    const situation = [
      { value: 0, label: '是否接触过发热、呼吸道症状患者' },
      { value: 1, label: '近期是否在湖北停留（包括：旅游、出差、转车、转机）' },
      { value: 2, label: '是否在湖北长期工作学习或生活' },
      { value: 3, label: '近期是否吃过野味或接触过野味市场' },
      { value: 4, label: '近期是否外出' },
      { value: 5, label: '所在地是否出现任何与疫情相关的、值得注意的情况' },
      { value: 6, label: '以上都没有' },
    ]
    const CheckboxItem = Checkbox.CheckboxItem
    return (
      <div>
          <InputItem clear ><span style={{color:'red'}}>*</span>身份证号</InputItem>
          <InputItem clear ><span style={{color:'red'}}>*</span>姓名</InputItem>
          <InputItem clear ><span style={{color:'red'}}>*</span>是否有一下症状</InputItem>
          <div>
            {data.map(i => (
              <CheckboxItem key={i.value}>
                {i.label}
              </CheckboxItem>
            ))}
          </div>
          <InputItem clear ><span style={{color:'red'}}>*</span>疫情接触情况</InputItem>
          <div>
            {situation.map(i => (
              <CheckboxItem key={i.value}>
                {i.label}
              </CheckboxItem>
            ))}
          </div>
          <Button type="primary" style={{width:'70%',marginLeft:'15%',marginTop:'10px'}}>提交</Button>
      </div>);
  }
}
