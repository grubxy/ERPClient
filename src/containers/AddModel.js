import RecordOpModel from '../components/RecordOpModel'
import {
  connect
} from 'react-redux'
import {
  recordModelClose,
  recordModelOpen,
  recordModelCancle,
  recordModelConfirm
} from '../actions'

const mapStateToProps = (state) => ({
  modelvisible: state.recordModels.modelvisible
})

const mapDispatchToProps = {
  onClose: recordModelClose,
  onOpen: recordModelOpen,
  onCancle: recordModelCancle,
  onConfirm: recordModelConfirm
}

const AddModel = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordOpModel)

export default AddModel