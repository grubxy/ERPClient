import React, {
	Component
} from 'react'
import {
	Menu,
	Container,
	Image
} from 'semantic-ui-react'
import {
	connect
} from 'react-redux'
import {
	Link
} from 'react-router-dom'

import {
	getLogInfo
} from '../actions/login'


const linkStyle = {
	fontSize: '1.1em',
	fontWeight: 'bold'
}

class FixMenu extends Component {
	componentDidMount() {
		const {
			onGetUser
		} = this.props

		onGetUser()
	}

	render() {

		const {
			username
		} = this.props

		return (
			<Menu fixed={'top'} inverted>
		    <Container fluid style={{padding:'0em 3em 0em 3em'}}>
		      <Menu.Item as='a' header>
		        <Image
		        size = 'mini'
		        src='/logo.png'
		        style={{ marginRight: '1.5em'}}
		        />
		        百汇管理系统
		      </Menu.Item>
		      <Menu.Item>
		        <Link style={linkStyle} to="/flow">生产流程</Link>
		      </Menu.Item>
		      <Menu.Item>
		        <Link style={linkStyle} to="/construction">工单总览</Link>
		      </Menu.Item>
		      <Menu.Item>
		        <Link style={linkStyle} to="/staff">员工管理</Link>
		      </Menu.Item>
		      <Menu.Item>
		        <Link style={linkStyle} to="/store">仓储管理</Link>
		      </Menu.Item>
		      <Menu.Item>
		        <Link style={linkStyle} to="/house">仓库配置</Link>
		      </Menu.Item>
		      <Menu.Item>
		        <Link style={linkStyle} to="/data">生产配置</Link>
		      </Menu.Item>
		      <Menu.Item>
		        <Link  style={linkStyle} to="/manage">系统管理</Link>
		      </Menu.Item>
		      {/*
		      <Dropdown item simple text='仓储管理'>
		      <Dropdown.Menu>
		        <Dropdown.Item>
		          <Link style={{color:'black'}} to="/store">仓储管理</Link>
		        </Dropdown.Item>
		        <Dropdown.Item>
		          <Link style={{color:'black'}} to="/house">仓库配置</Link>
		        </Dropdown.Item>
		      </Dropdown.Menu>
		      </Dropdown>
				*/}
			 <Menu.Menu position='right'>
			  <Menu.Item name={`${username}`}/>
		      <Menu.Item>
		        <Link  style={linkStyle} to ='/login'>退出</Link>
		      </Menu.Item>
		    </Menu.Menu>
		    </Container>
		  	</Menu>
		)
	}
}

const mapStateToProps = (state) => ({
	username: state.authentication.user.username
})

const mapDispatchToProps = {
	onGetUser: getLogInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(FixMenu)