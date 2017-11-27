import ProductionBread from '../components/ProductionBread'
import {
  connect
} from 'react-redux'
import {
  productionBreadActive
} from '../actions'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  onActive: productionBreadActive,
}

const ProductionChangeBread = connect(mapStateToProps, mapDispatchToProps)(ProductionBread)

export default ProductionChangeBread