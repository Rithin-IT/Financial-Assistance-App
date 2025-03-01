import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './login.js';
export default configureStore({
  reducer: {
    login:loginReducer
  },
})