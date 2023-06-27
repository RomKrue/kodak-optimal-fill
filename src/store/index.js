import { configureStore } from '@reduxjs/toolkit'

import plateScaleSlice from './slices/plateScaleSlice'
import printFormsDataSlice from './slices/printFormsDataSlice'

const store = configureStore({
  reducer: { plateScale: plateScaleSlice, printFormsData: printFormsDataSlice },
})

export default store
