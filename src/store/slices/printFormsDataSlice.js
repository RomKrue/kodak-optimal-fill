import { createSlice } from '@reduxjs/toolkit'

import formsFromServer from '../../formsFromServer.json'

const initialState = {
  formsRawData: [],
}

const printFormsDataSlice = createSlice({
  name: 'printFormsData',
  initialState,
  reducers: {
    updateFormsRawData(state) {
      state.formsRawData = formsFromServer
      console.log(state.formsRawData)
    },
  },
})

export const formsRawDataSelector = {
  getFormsRawData: (state) => state.formsRawData,
}

export const { updateFormsRawData } = printFormsDataSlice.actions
export default printFormsDataSlice.reducer
