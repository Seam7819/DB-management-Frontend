import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './app.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import User from './Components/User/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader : ()=> fetch('http://localhost:5050/users'),
    children :[
      {
        path : '/users',
        element : <User></User>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
