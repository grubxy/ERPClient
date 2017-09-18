import React, { Component } from 'react'
import { Sidebar, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import GridStockRecord from './gridStockRecord.js'
import StatisticTarget from './statisticTarget.js'

class SidebarLeftOverlay extends Component {

  render() {
    return (
      <div>
          <Sidebar as={Menu} animation='push' direction='top' width='thin' visible='false' inverted>
            <Menu.Item name='record'>
              <Icon name='add square' />
              操作记录
            </Menu.Item>
            <Menu.Item name='statistics'>
              <Icon name='signal' />
              统计信息
            </Menu.Item>
            <Menu.Item name = 'setting'>
              <Icon name='setting' />
              用户信息
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <StatisticTarget/>
            <GridStockRecord/>
          </Sidebar.Pusher>
      </div>
    )
  }
}

export default SidebarLeftOverlay