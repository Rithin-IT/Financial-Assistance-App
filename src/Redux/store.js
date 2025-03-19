import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../Redux/Slices/login';
export default configureStore({
  reducer: {
    login: loginReducer,
   
  },
})


