import { createSlice } from '@reduxjs/toolkit'

import formsFromServer from '../../formsFromServer.json'

const formsRawData = formsFromServer

const printFormsDataSlice = createSlice({
  name: 'printFormsData',
  initialState: {
    formsRawData,
  },
  reducers: {
    updateFormsRawData(state) {},
  },
})

export const formsRawDataSelector = {
  getFormsRawData: (state) => state.formsRawData,
}

export const { updateFormsRawData } = printFormsDataSlice.actions
export default printFormsDataSlice.reducer
