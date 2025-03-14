import { configureStore } from '@reduxjs/toolkit'
import  userDetailsSlice from './Slices/userDetails'

// import registerReducer from  '../Redux/Slices/register';
import loginReducer from '../Redux/Slices/login';
export default configureStore({
  reducer: {

    userDetails : userDetailsSlice
  },
})
