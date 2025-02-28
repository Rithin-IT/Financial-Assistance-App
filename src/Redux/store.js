import { configureStore } from '@reduxjs/toolkit'
import registerSlice  from './Slices/register'

export default configureStore({
  reducer: {
    register : registerSlice,
  },
})