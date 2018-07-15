import {
	Portal,
	Segment,
	Header
} from 'semantic-ui-react'
import {
	connect
} from 'react-redux'
import {
	operatePortal
} from '../actions/portal'
import React from 'react'

const GlobalPortal = ({
	portal,
	operatePortal
}) => {
	return (
		<Portal onClose={()=>operatePortal({open:false, msgheader:'', msgbody:''})} open={portal.open}>
			<Segment style={{ position: 'fixed', zIndex: 1000, margin:'auto',left:0, right:0, top:0, bottom:0, width:'400px', height:'200px'}}>
				<Header color='orange'>{portal.msgheader}</Header>
				<p>{portal.msgbody}</p>
			</Segment>
		</Portal>
	)
}

const mapStateToProps = (state) => ({
	portal: state.globalPortal
})

const mapDispatchToProps = {
	operatePortal: operatePortal
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalPortal)