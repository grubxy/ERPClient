import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import {
  Accordion
} from 'semantic-ui-react'
import TableStockDetails from './tableStockDetails.js'
import RecordTable from './components/RecordTable'

const panels = _.times(100, () => ({
  title: faker.lorem.sentence(),
  content: (
    <RecordTable/>
  )
}))

const AccordionStockRecord = () => (
  <Accordion panels={panels} styled />
)

export default AccordionStockRecord