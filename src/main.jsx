import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Login from './pages/Login'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import Register from './pages/Register'

const router = createBrowserRouter([{

  element: <Home />,
  path: "/"
},
{
  element: <Login />,
  path: '/login'
  },
  {
    element: <Register />,
    path: '/register'
  },
  {
    element: <ProductDetail />,
    path: '/product'
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode >,
)

