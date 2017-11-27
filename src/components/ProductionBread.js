import React from 'react'
import {
  Breadcrumb
} from 'semantic-ui-react'

const ProductionBread = ({
  onActive
}) => (
  <Breadcrumb size='large'>
  <Breadcrumb.Section onClick={()=>onActive()} link>生产批次</Breadcrumb.Section>
  <Breadcrumb.Divider>/</Breadcrumb.Divider>
  <Breadcrumb.Section active>施工单</Breadcrumb.Section>
  </Breadcrumb>
)

export default ProductionBread