import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plateScale: JSON.parse(localStorage.getItem('plateScale')) || 0.5,
}

const uiScaleSlice = createSlice({
  name: 'uiScaleSlice',
  initialState,
  reducers: {
    zoomPlate: (state, action) => {
      state.plateScale += action.payload
      localStorage.setItem('plateScale', JSON.stringify(state.plateScale))
    },

    setPlateScale: (state, action) => {
      state.plateScale = action.payload
      localStorage.setItem('plateScale', JSON.stringify(state.plateScale))
    },
  },
})

export const plateScaleSelector = {
  getPlateScale: (state) => state.plateScale,
}

export const { zoomPlate, resetPlateScale } = uiScaleSlice.actions
export default uiScaleSlice.reducer
