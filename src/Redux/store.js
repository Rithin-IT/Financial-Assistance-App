import { configureStore } from '@reduxjs/toolkit'
import userDetailsReducer from '../Redux/Slices/userDetails'

export default configureStore({
  reducer: {
    userDetails: userDetailsReducer,
  },
})