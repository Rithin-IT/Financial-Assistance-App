import { configureStore } from '@reduxjs/toolkit'

// import registerReducer from  '../Redux/Slices/register';
import loginReducer from '../Redux/Slices/login';
import registerReducer from '../Redux/Slices/register';
export default configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer
  },
})
