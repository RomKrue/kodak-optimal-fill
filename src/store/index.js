import { configureStore } from '@reduxjs/toolkit'

import plateScaleSlice from './slices/plateScaleSlice'
import printFormsDataSlice from './slices/printFormsDataSlice'

const store = configureStore({
  reducer: { UI: plateScaleSlice, DATA: printFormsDataSlice },
})

export default store
