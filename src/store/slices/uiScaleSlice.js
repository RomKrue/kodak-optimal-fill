import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plateScale: JSON.parse(localStorage.getItem('plateScale')) || 0.5,
  remToPx: 16,
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
  getRemToPx: (state) => state.remToPx,
}

export const { zoomPlate, resetPlateScale, setRemToPx } = uiScaleSlice.actions
export default uiScaleSlice.reducer
