import { createSlice } from '@reduxjs/toolkit'

import formsFromServer from '../../formsFromServer.json'

const rawPrintForms = formsFromServer

const printFormsSlice = createSlice({
  name: 'printForms',
  initialState: {
    rawPrintForms,
  },
  reducers: {
    updateRawPrintForms(state, action) {},
  },
})

export const rawPrintFormsSelector = {
  getRawPrintForms: (state) => state.rawPrintForms,
}

export const { updateRawPrintForms } = printFormsSlice.actions
export default printFormsSlice.reducer
