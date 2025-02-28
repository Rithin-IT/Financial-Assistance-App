import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
      registerList:[],
  },
  reducers: {
    setRegisterList: (state, action) => {
      state.registerList = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRegisterList } = registerSlice.actions

export default registerSlice.reducer