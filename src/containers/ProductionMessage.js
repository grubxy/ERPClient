import {
	Message
} from 'semantic-ui-react'
import {
	connect
} from 'react-redux'
import React from 'react'



const ProductionMessage = ({
	show,
	content
}) => {
	return (show &&
		<Message positive>
		<Message.Header>
			批次:{content.pid}
		</Message.Header>
			<p>计划数量:{content.dst_counts} | 可生产数量:{content.dst_counts - content.cmpl_counts}
			  | 完成数量:{content.cmpl_counts} | 报废数量:{content.err_counts} | 实际生产数量:{content.fact_counts}</p>
		</Message>)
}

const mapStateToProps = (state) => ({
	show: state.breadp.subActive,
	content: state.productionAll.constructionAll
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductionMessage)