import ConstructionAllTable from '../components/ConstructionAllTable'
import {
  connect
} from 'react-redux'
import React from 'react'

const title = [{
  title: '施工单号'
}, {
  title: '批次号'
}, {
  title: '操作工'
}, {
  title: '工序名'
}, {
  title: '单价'
}, {
  title: '开工日期'
}, {
  title: '开工数量'
}, {
  title: '完工日期'
}, {
  title: '完工数量'
}, {
  title: '报废数量'
}, {
  title: '所需物料'
}, {
  title: '完工物料'
}, {
  title: '状态'
}]

const content = [{
  ccode: '11111',
  pcode: '000001',
  oper: '小王',
  cname: '工序1',
  price: '100',
  stime: '2017:9',
  scounts: '200',
  etime: '2017:10',
  ecounts: '200',
  error: '2',
  nmat: '材料1',
  omat: '材料2',
  state: '完成'
}]


const mapStateToProps = (state) => ({
  title: title,
  content: content
})

const mapDispatchToProps = {

}

const ConstructionShow = connect(mapStateToProps, mapDispatchToProps)(ConstructionAllTable)

export default ConstructionShow