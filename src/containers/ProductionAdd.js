import ProductionModel from '../components/ProductionModel'
import {
  productionInputChange,
  productionModelClose,
  productionModelOpen,
  productionModelConfirm
} from '../actions'
import {
  connect
} from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
  return ({
    data: state.production,
  })
}

const mapDispatchToProps = {
  onClose: productionModelClose,
  onOpen: productionModelOpen,
  onConfirm: productionModelConfirm,
  onChange: productionInputChange
}

const ProductionAdd = connect(mapStateToProps, mapDispatchToProps)(ProductionModel)

ProductionAdd.propTypes = {
  data: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}


export default ProductionAdd