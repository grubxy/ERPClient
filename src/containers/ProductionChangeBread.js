import ProductionBread from '../components/ProductionBread'
import {
	connect
} from 'react-redux'
import {
	productionBreadActive
} from '../actions'

const mapStateToProps = (state) => ({
	subActive: state.breadp.subActive,
	size: state.productionAll.production.size
})

const mapDispatchToProps = {
	onActive: productionBreadActive,
}

const ProductionChangeBread = connect(mapStateToProps, mapDispatchToProps)(ProductionBread)

export default ProductionChangeBread