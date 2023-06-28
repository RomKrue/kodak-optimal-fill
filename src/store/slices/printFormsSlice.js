import { createSlice } from '@reduxjs/toolkit'

import rawToPrep from '../rawToPrep'

const initialState = {
  rawPrintForms: [],
  prepPrintForms: [],
  unusedPrintForms: [],
}

const printFormsSlice = createSlice({
  name: 'printForms',
  initialState,
  reducers: {
    updateRawPrintForms(state, action) {
      state.rawPrintForms = action.payload
      state.prepPrintForms = rawToPrep(action.payload)
      state.unusedPrintForms = state.prepPrintForms
    },
  },
})

export const rawPrintFormsSelector = {
  getRawPrintForms: (state) => state.rawPrintForms,
}

export const { updateRawPrintForms } = printFormsSlice.actions
export default printFormsSlice.reducer
