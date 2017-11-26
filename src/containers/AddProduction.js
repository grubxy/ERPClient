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
import React, {
  Component
} from 'react'
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

const AddProduction = connect(mapStateToProps, mapDispatchToProps)(ProductionModel)

AddProduction.propTypes = {
  data: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}


export default AddProduction