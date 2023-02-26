import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../UI/Header'
 const Rootlayout = () => {
  
  return (
    <>
    <Header></Header>
   
    <Outlet/>
    </>
  )
}
  export default Rootlayout