import { configureStore } from '@reduxjs/toolkit'
import  userDetailsSlice from './Slices/userDetails'

export default configureStore({
  reducer: {
    userDetails : userDetailsSlice
  },
})