import { configureStore } from '@reduxjs/toolkit'

import plateScaleSlice from './slices/plateScaleSlice'
import printFormsSlice from './slices/printFormsSlice'

const store = configureStore({
  reducer: { plateScale: plateScaleSlice, printForms: printFormsSlice },
})

export default store
