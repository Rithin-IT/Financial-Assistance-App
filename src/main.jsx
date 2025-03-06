import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Pages/login.jsx'
import Register from './Pages/register.jsx'
import Userinfo from './Pages/user_info/user_info.jsx'

import { Provider } from 'react-redux'
import store from '../src/Redux/store.js'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (<Login/>),
  },
  {
    path: "/register",
    element:(<Register/>),
  },
  // {
  //   path: "/userdetails",
  //   element:(<UserDetails/>),
  // },
  {
    path: "/userinfo",
    element:(<Userinfo/>),
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
