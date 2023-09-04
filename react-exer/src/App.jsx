import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Rodape from './components/Rodape'

export default function App() {

  return (
    <>
      <Menu/> 
      <Outlet/>
      <Rodape/> 
    </>
  )
}
