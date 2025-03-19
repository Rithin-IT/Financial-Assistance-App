import { createSlice } from '@reduxjs/toolkit'

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: {
    userDataList: [],
  },
  reducers: {
    
    setUserlist: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setUserlist } = userDetailsSlice.actions

export default userDetailsSlice.reducer