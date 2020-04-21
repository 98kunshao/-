/**
 * 体温登记
 */
import { observable, action } from 'mobx'
import { message } from 'antd'

export default class TemperatureCheckStore {
  // 获取身份证
  @observable peopleId = false
  @action getPeopleId = () => {
    this.coverPiclist = []
    this.watch=false
  }
  // 获取名称
  @observable name = false
  @action getName = () => {
    this.coverPiclist = []
    this.watch=false
  }
  // 获取温度
  @observable temperature = false
  @action getTemperature = () => {
    this.coverPiclist = []
    this.watch=false
  }
}