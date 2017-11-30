import React from 'react'
import {
  Message,
  Divider,
  Accordion,
  Icon
} from 'semantic-ui-react'
import ConstructionTable from './ConstructionTable'

const item = {
  code: "12345",
  plan: "1000",
  remain: 20,
  over: 500,
  error: 2
}

const tabletitle = [{
  title: '施工单号'
}, {
  title: '操作工'
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
}]

const tablecontent = [{
  code: "00001",
  worker: "小王",
  price: "100",
  sdate: "2017:11:29",
  scounts: "200",
  edate: "2017:12:01",
  ecounts: "50",
  error: "2"
}]

const accord = [{
  title: '工序号:line-1 工序名: 工序名1',
  content: <ConstructionTable title={tabletitle} content={tablecontent}/>
}, {
  title: '工序号:line-2 工序名: 工序名2',
  content: <p>表格22。。。。。。。。。。。。</p>
}]

const ProductionDetail = ({
  show,
  onTitleClick
}) => {
  if (!show)
    return <div/>
  return (
    <div>
  <Message positive>
    <Message.Header>
      批次:{item.code}
    </Message.Header>
    <p>计划数量:{item.plan} 可生产数量:{item.remain} 在生产数量:{item.over} 报废数量:{item.error}</p>
  </Message>
  <Divider clearing/>
  <Accordion fluid styled defaultActiveIndex={0} panels={accord} onTitleClick={()=>onTitleClick()}/>
  {/*
  <Accordion fluid styled>
    <Accordion.Title active={true} index={0}>
      <Icon name='dropdown' />
    工序号:line-1 工序名: 工序名1
    </Accordion.Title>
    <Accordion.Content active={true} index={0}>
      <ConstructionTable title={title} content={content}/>
    </Accordion.Content>
    <Accordion.Title active={false} index={1}>
      <Icon name='dropdown' />
    工序号:line-2 工序名: 工序名2
    </Accordion.Title>
    <Accordion.Content active={false} index={1}>
      <p>表格22。。。。。。。。。。。。</p>
    </Accordion.Content>
  </Accordion>
*/}
  </div>
  )
}

export default ProductionDetail