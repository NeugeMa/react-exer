import { createBrowserRouter, RouterProvider } from 'react-router-dom' // rotas
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home/index.jsx' // rotas
import Produtos from './routes/Produtos/index.jsx'  // rotas 
import Error from './routes/Error/index.jsx'  // rotas 
import EditarProdutos from './routes/EditarProdutos/index.jsx'  // rotas
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
