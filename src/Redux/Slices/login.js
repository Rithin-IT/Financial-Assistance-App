import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'financialassist',
  initialState: {
   loginUsers:[],
  },
  reducers: {
    setloginUsers:(state,action)=>{
      state.loginUsers = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setloginUsers } = loginSlice.actions

export default loginSlice.reducer