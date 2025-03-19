import { createRoot } from 'react-dom/client'
import Login from './Pages/login.jsx'
import Register from './Pages/register.jsx'
import UserDetails from './Pages/user_details.jsx'
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
  {
    path: "/userdetails",
    element:(<UserDetails/>),
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
