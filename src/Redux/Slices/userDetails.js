import { createSlice } from '@reduxjs/toolkit'

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: {
    userDataList: [],
  },
  reducers: {
    
    setUserlist: (state, action) => {
      state.userDataList = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserList } = userDetailsSlice.actions

export default userDetailsSlice.reducer