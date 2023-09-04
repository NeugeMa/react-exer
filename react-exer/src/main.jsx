import { createBrowserRouter, RouterProvider } from 'react-router-dom'  // rotas
import ReactDOM from 'react-dom/client'
import React from 'react'
import Home from './assets/routes/Home/index'
import Produtos from './assets/routes/Produtos/index'
import Error from './assets/routes/Error/index'
import EditarProdutos from './assets/routes/EditarProdutos/index'
import App from './App.jsx'
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/produtos",
        element: <Produtos/>
      },
      {
        path: "/produtos/editar/:id",
        element: <EditarProdutos/>
      }
    ]
  
  }
  ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
