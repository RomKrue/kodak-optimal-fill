import { createSlice } from '@reduxjs/toolkit'

import rawToPrep from '../rawToPrep'

const initialState = { rawPrintForms: [], prepPrintForms: [] }

const printFormsSlice = createSlice({
  name: 'printForms',
  initialState,
  reducers: {
    updateRawPrintForms(state, action) {
      //console.log(state.rawPrintForms.length)
      state.rawPrintForms = action.payload
      state.prepPrintForms = rawToPrep(action.payload)
    },
  },
})

export const rawPrintFormsSelector = {
  getRawPrintForms: (state) => state.rawPrintForms,
}

export const { updateRawPrintForms } = printFormsSlice.actions
export default printFormsSlice.reducer
