import React, { Component } from 'react';
import SidebarLeftOverlay from './slidebar.js'
import AccordionExampleStyled from './accordionStock.js'
import TableStockDetails from './tableStockDetails.js'
import GridStockRecord from './gridStockRecord.js'

class App extends Component {
  render() {
    return (
      <div>
        <SidebarLeftOverlay />
      </div>
    );
  }
}

export default App;
