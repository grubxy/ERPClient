import ProductionDetail from '../components/ProductionDetail'
import {
	connect
} from 'react-redux'


const mapStateToProps = (state) => ({
	show: state.breadp.subActive
})

const mapDispatchToProps = {

}

const ProductionListDetail = connect(mapStateToProps, mapDispatchToProps)(ProductionDetail)

export default ProductionListDetail