import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  initConstruction,
  selectConstruction
} from '../actions/construction'
import {
  Grid,
  Header,
  Container,
  Icon,
  Divider,
  Search,
  Button
} from 'semantic-ui-react'
import TableWithAction from '../components/TableWithAction'

class Construction extends Component {
  componentWillMount = () => {
    const {
      initConstruction
    } = this.props

    initConstruction()
  }

  render = () => {
    const {
      selectConstruction,
      constructionTable
    } = this.props

    return (
      <Container style={{marginTop:'3em'}}>
        <Header as='h3'>
          <Icon name='settings'/>
        <Header.Content>工单总览</Header.Content>
        </Header>
        <Divider hidden/>
        <Divider clearing/>
        <Grid>
          <Grid.Row columns={6}>
          <Grid.Column>
            <Search size='mini'/>
          </Grid.Column>
          <Grid.Column>
            <Button.Group>
              <Button size='small' color='teal' onClick={()=>selectConstruction(0)}>所有</Button>
              <Button size='small' color='teal'onClick={()=>selectConstruction(1)}>等待材料出库</Button>
              <Button size='small' color='teal'onClick={()=>selectConstruction(2)}>制作过程中</Button>
              <Button size='small' color='teal'onClick={()=>selectConstruction(3)}>完工待入库</Button>
              <Button size='small' color='teal'onClick={()=>selectConstruction(4)}>入库完毕待审批</Button>
              <Button size='small' color='teal'onClick={()=>selectConstruction(5)}>审批完毕</Button>
            </Button.Group>
          </Grid.Column>
          </Grid.Row>
        </Grid>
        <TableWithAction table={constructionTable}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  constructionTable: state.construction.constructionAllTable
})

const mapDispatchToProps = {
  initConstruction: initConstruction,
  selectConstruction: selectConstruction
}

export default connect(mapStateToProps, mapDispatchToProps)(Construction)