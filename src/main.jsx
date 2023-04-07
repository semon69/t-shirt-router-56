import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import About from './components/About/About';
import TShirt from './components/TShirt/TShirt';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"tshirt",
        element:<TShirt></TShirt>
      },
      {
        path:"login",
        element:<Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
