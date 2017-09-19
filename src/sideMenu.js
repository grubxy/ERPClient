import React, { Component } from 'react'
import { Menu , Icon} from 'semantic-ui-react'

export default class SideMenu extends Component {
  state = { activeItem: 'operate' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted attached> 
        <Menu.Item name='operate' active={activeItem === 'operate'} onClick={this.handleItemClick}>
          <Icon name='add square' />
            操作记录
        </Menu.Item>
        <Menu.Item name='statistic' active={activeItem === 'statistic'} onClick={this.handleItemClick}>
          <Icon name='signal' />
            统计信息
        </Menu.Item>
        <Menu.Item name='userinfo' active={activeItem === 'userinfo'} onClick={this.handleItemClick}>
          <Icon name='setting' />
            用户信息
        </Menu.Item>
      </Menu>
    )
  }
}