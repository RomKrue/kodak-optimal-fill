import { createSlice } from '@reduxjs/toolkit'

import formsFromServer from '../../formsFromServer.json'

const initialState = {
  formsRawData: formsFromServer,
}

const printFormsDataSlice = createSlice({
  name: 'printFormsDataSlice',
  initialState,
  reducers: {
    updateFormsRawData: (state, action) => {
      state.formsRawData = formsFromServer
    },
  },
})

export const formsRawDataSelector = {
  getFormsRawData: (state) => state.formsRawData,
}

export const { updateFormsRawData } = printFormsDataSlice.actions
export default printFormsDataSlice.reducer
