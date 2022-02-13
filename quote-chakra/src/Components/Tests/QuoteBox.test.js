import QuoteBox from '../QuoteBox'
import {render} from '../../test-utils'
import React from 'react'
import '@testing-library/jest-dom'
import { getByTestId } from '@testing-library/react'
// import { getByTestId } from '@testing-library/react'

test('element does render', () => {
  const {getByTestId} = render(<QuoteBox/>)
  
  expect(getByTestId('quoteBox')).toBeVisible()

})
