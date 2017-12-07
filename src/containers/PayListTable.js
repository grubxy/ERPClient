import {
	connect
} from 'react-redux'
import {
	paygoToPage
} from '../actions'
import TableNormal from '../components/TableNormal'

const mapStateToProps = (state) => ({
	table: state.pay
})

const mapDispatchToProps = {
	goToPage: paygoToPage

}

const PayListTable = connect(mapStateToProps, mapDispatchToProps)(TableNormal)

export default PayListTable