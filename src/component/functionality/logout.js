import React ,{useContext}from 'react'
import { Button } from 'react-bootstrap'
import Authcontext from '../../store/Auth-context'
import { useNavigate } from 'react-router-dom'


export const Logout = () => {
    let navigate=useNavigate()
let authctx=useContext(Authcontext)


 function logouthandler(){
        authctx.logout()
        navigate("/")
    }
  return (
    <Button variant='danger' onClick={logouthandler} style={{position:"fixed", top:"0", right:"0" , margin:"8px"}}>Logout</Button>
  )
}
