import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AuthAction } from '../../store/AuthSlice'


export const Logout = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()


  function logouthandler() {
    dispatch(AuthAction.logout())
    navigate("/")
  }
  return (
    <Button variant='danger' onClick={logouthandler} style={{ position: "fixed", top: "0", right: "0", margin: "14px" }}>Logout</Button>
  )
}
