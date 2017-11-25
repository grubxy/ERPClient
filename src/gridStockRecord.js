import React , { Component } from 'react'
import AccordionStockRecord from './accordionStock'
import { Button ,Sticky, Rail, Grid, Segment} from 'semantic-ui-react'
import StatisticTarget from './statisticTarget'
import AddModel from './containers/AddModel'

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
          <Grid.Column>
          <div ref={this.handleContextRef}>
              <AccordionStockRecord/>
              {/*
              <Rail position='right'>
                <Sticky context={contextRef}>
                  <TableStockAbstract/>
                </Sticky>
              </Rail>
            */}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      )
  }
}
