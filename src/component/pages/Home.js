import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from "./Home.module.css"
import { Emailverification } from '../functionality/Emailverification'
import { Button } from 'react-bootstrap'
import { Expenseform } from '../expense/Expenseform'
import { Header } from '../UI/Header'

const Home = () => {
  const navigate = useNavigate()
  function profilehandler() {
    navigate("/profile")
  }


  return (
    <>
    <Header/>
    <h2 className='heading'>Manage your Expense here</h2>
    <Expenseform/>
   
    
    
    <Button className={classes.item} onClick={profilehandler}>Complete profile 80%</Button>
    <Emailverification />
    </> 
    
 




    
  )
}

export default Home