import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import {
  Accordion
} from 'semantic-ui-react'
import RecordTable from './containers/RecordTable'

const panels = _.times(100, () => ({
  title: faker.lorem.sentence(),
  content: (
    <RecordTable/>
  )
}))

const AccordionStockRecord = () => (
  <Accordion panels={panels} fluid styled />
)

export default AccordionStockRecord