import { configureStore } from '@reduxjs/toolkit'

import plateScaleSlice from './slices/plateScaleSlice'

const store = configureStore({
  reducer: plateScaleSlice,
})

export default store
