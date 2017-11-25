import React, { Component } from 'react';
import GridStockRecord from './gridStockRecord.js'
import SideMenu from './sideMenu.js'
import StatisticTarget from './statisticTarget.js'

class App extends Component {
  render() {
    return (
      <div>
        <SideMenu />
        <StatisticTarget/>
        <GridStockRecord/>
      </div>
    );
  }
}

export default App;
