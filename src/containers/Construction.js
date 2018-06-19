import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  initConstruction,
  selectConstruction,
  activeConstructionPage,
  searchConstruction
} from '../actions/construction'
import {
  Grid,
  Header,
  Container,
  Icon,
  Divider,
  Form,
  Input,
  Button
} from 'semantic-ui-react'
import {
  MultiTable
} from '../components/MultiTable'

class Construction extends Component {
  componentDidMount = () => {
    const {
      initConstruction
    } = this.props

    initConstruction()
  }

  render = () => {
    const {
      selectConstruction,
      onActivePage,
      onSearch,
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
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Form.Group inline>
                  <Form.Field>
                    <Input placeholder='施工单号' name='id' onChange={(e)=>onSearch(e.target, constructionTable)}/>
                  </Form.Field>
                  <Form.Field>
                    <Input placeholder='产品名' name='name' onChange={(e)=>onSearch(e.target, constructionTable)}/>
                  </Form.Field>
                  <Form.Field>
                    <Input icon='search' placeholder='工人' name='staff' onChange={(e)=>onSearch(e.target, constructionTable)}/>
                  </Form.Field>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button.Group>
                <Button color='orange' onClick={()=>selectConstruction(0, constructionTable)}>所有</Button>
                <Button color='teal'onClick={()=>selectConstruction(1, constructionTable)}>等待材料出库</Button>
                <Button color='teal'onClick={()=>selectConstruction(2, constructionTable)}>制作过程中</Button>
                <Button color='teal'onClick={()=>selectConstruction(3, constructionTable)}>完工待入库</Button>
                <Button color='teal'onClick={()=>selectConstruction(4, constructionTable)}>入库完毕待审批</Button>
                <Button color='teal'onClick={()=>selectConstruction(5, constructionTable)}>审批完毕</Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <MultiTable table={constructionTable} onActivePage={onActivePage}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  constructionTable: state.construction.constructionAllTable
})

const mapDispatchToProps = {
  initConstruction: initConstruction,
  selectConstruction: selectConstruction,
  onActivePage: activeConstructionPage,
  onSearch: searchConstruction
}

export default connect(mapStateToProps, mapDispatchToProps)(Construction)