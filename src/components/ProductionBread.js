import React from 'react'
import {
	Breadcrumb
} from 'semantic-ui-react'

const ProductionBread = ({
	onActive,
	subActive,
	size
}) => (

	<Breadcrumb size='large'>
		  <Breadcrumb.Section onClick={()=>onActive(false, size)} link>生产批次</Breadcrumb.Section>
		  {subActive && <Breadcrumb.Divider />}
		  {subActive && <Breadcrumb.Section active='true'>批次生产详情</Breadcrumb.Section>}
  	</Breadcrumb>

)

export default ProductionBread