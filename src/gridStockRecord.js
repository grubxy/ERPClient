import React , { Component } from 'react'
import AccordionStockRecord from './accordionStock.js'
import { Button ,Sticky, Rail, Grid, Segment} from 'semantic-ui-react'
import TableStockAbstract from './tableStockAbstract.js'
import StatisticTarget from './statisticTarget.js'
import AddModel from './addModel.js'

export default class GridStockRecord extends Component {
  constructor(props){
     super(props)
     this.state = {}
    this.handleContextRef = this.handleContextRef.bind(this)   
  }
  handleContextRef(contextRef){ 
     this.setState({ contextRef })
  }

  render() {
    const { contextRef} = this.state
    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column>
            <AddModel/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={9}>
          <div ref={this.handleContextRef}>
              <AccordionStockRecord/>
              <Rail position='right'>
                <Sticky context={contextRef}>
                  <TableStockAbstract/>
                </Sticky>
              </Rail>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      )
  }
}
