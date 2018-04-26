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
			<Segment style={{ left: '30%', position: 'fixed', top: '50%', zIndex: 1000 }}>
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