import {
  connect
} from 'react-redux'
import {
  paygoToPage
} from '../actions'
import React, {
  Component
} from 'react'
import TableWithAction from '../components/TableWithAction'

class PayListTable extends Component {

  componentWillMount = () => {
    const {
      goToPage,
      table
    } = this.props
    goToPage(table, 'goFirst')
  }

  render = () => {
    const {
      table,
      goToPage
    } = this.props

    return (
      <TableWithAction goToPage={goToPage} table={table}/>
    )

  }
}

const mapStateToProps = (state) => ({
  table: state.pay
})

const mapDispatchToProps = {
  goToPage: paygoToPage

}

export default connect(mapStateToProps, mapDispatchToProps)(PayListTable)