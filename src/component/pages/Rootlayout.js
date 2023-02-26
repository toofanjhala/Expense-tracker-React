import React,{useContext} from 'react'
import { Outlet } from 'react-router-dom'
import { Logout } from '../functionality/logout'
import Authcontext from '../../store/Auth-context'

 const Rootlayout = () => {
  let authctx=useContext(Authcontext)
  return (
    <>
    {authctx.isLoggein && <Logout/>}
    <Outlet/>
    </>
  )
}
  export default Rootlayout