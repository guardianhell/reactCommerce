import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
}])

ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode >,
)

