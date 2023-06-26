import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plateScale: JSON.parse(localStorage.getItem('plateScale')) || 0.5,
}

const plateScaleSlice = createSlice({
  name: 'plateScale',
  initialState,
  reducers: {
    zoomPlate: (state, action) => {
      state.plateScale += action.payload
      localStorage.setItem('plateScale', JSON.stringify(state.plateScale))
    },

    setPlateScale: (state, action) => {
      state.plateScale = action.payload
    },
  },
})

export const plateScaleSelector = {
  getPlateScale: (state) => state.plateScale,
}

export const { zoomPlate, resetPlateScale } = plateScaleSlice.actions
export default plateScaleSlice.reducer
