import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plateScale: 1,
}

const plateScaleSlice = createSlice({
  name: 'plateScale',
  initialState,
  reducers: {
    zoomPlate: (state, action) => {
      state.plateScale += action.payload
    },
  },
})

export const plateScaleSelector = {
  getPlateScale: (state) => state.plateScale,
}

export const { zoomPlate } = plateScaleSlice.actions
export default plateScaleSlice.reducer
