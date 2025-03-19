import { configureStore } from '@reduxjs/toolkit'

import loginReducer from '../Redux/Slices/login';
import  userDetailsSlice from './Slices/userDetails'
export default configureStore({
  reducer: {
    login: loginReducer,
    userDetails : userDetailsSlice
   
  },
})



