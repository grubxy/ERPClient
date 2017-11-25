import TableNormal from '../components/TableNormal'
import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  recordTableBack,
  recordTableForword
} from '../actions'

const contenttest = [{
  name: '11',
  code: 'c',
  ope: 'sd',
  price: '222',
  counts: '100'
}, {
  name: '22',
  code: 'd',
  price: '3333',
  ope: 'by',
  counts: '500'
}]

const title = [{
  title: 'name'
}, {
  title: 'code'
}, {
  title: 'ope'
}, {
  title: 'price'
}, {
  title: 'counts'
}]

const mapStateToProps = (state) => ({
  // content: state.recordTables
  content: contenttest,
  title: title
})

const mapDispatchToProps = {
  onBack: recordTableBack,
  onForword: recordTableForword
}

const RecordTable = connect(mapStateToProps, mapDispatchToProps)(TableNormal)

export default RecordTable