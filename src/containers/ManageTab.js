import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'

import ManageMaterialTable from './ManageMaterialTable'

import {
	Tab
} from 'semantic-ui-react'
import ManageMaterialAdd from './ManageMaterialAdd'
import ManageTechnicsTable from './ManageTechnicsTable'
import ManageEmployeeTable from './ManageEmployeeTable'
import ManageEmployeeAdd from './ManageEmployeeAdd'
import ManageTechnicsAdd from './ManageTechnicsAdd'

const panes = [{
	menuItem: '物料代码',
	render: () => {
		return (
			<Tab.Pane>
				<ManageMaterialAdd/> 
				<ManageMaterialTable />
			</Tab.Pane>
		)
	}
}, {
	menuItem: '工艺',
	render: () => {
		return (
			<Tab.Pane>
				<ManageTechnicsAdd/>
				<ManageTechnicsTable/>
			</Tab.Pane>
		)
	}
}, {
	menuItem: '员工',

	render: () => {
		return (
			<Tab.Pane>
				<ManageEmployeeAdd/>
				<ManageEmployeeTable/>
			</Tab.Pane>
		)
	}
}]

class ManageTab extends Component {
	render = () => {
		return <Tab panes={panes}/>
	}
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTab)