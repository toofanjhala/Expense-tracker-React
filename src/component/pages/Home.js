import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from "./Home.module.css"
import { Emailverification } from '../functionality/Emailverification'

import { Button } from 'react-bootstrap'
import { Expenseform } from '../expense/Expenseform'
const Home = () => {
  const navigate = useNavigate()
  function profilehandler() {
    navigate("/profile")
  }


  return (

    <div>
    <h1>welcome</h1>
     <Button className={classes.item} onClick={profilehandler}>Complete profile 80%</Button>
    <Emailverification />
    <Expenseform/>
    </div>




    
  )
}

export default Home