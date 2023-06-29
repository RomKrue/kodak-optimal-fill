import { configureStore } from '@reduxjs/toolkit'

import uiScaleSlice from './slices/uiScaleSlice'
import printFormsSlice from './slices/printFormsSlice'

const store = configureStore({
  reducer: { uiScale: uiScaleSlice, printForms: printFormsSlice },
})

export default store
