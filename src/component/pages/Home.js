import React from 'react'
import { useNavigate } from 'react-router-dom'

import classes from "./Home.module.css"
import { Emailverification } from '../functionality/Emailverification'

const Home = () => {
  const navigate = useNavigate()
  function profilehandler() {
    navigate("/profile")
  }


  return (

    <div>

      <section>
        <h1 className={classes.heading}>welcome to Expense Tracker</h1>
        <button className={classes.item} onClick={profilehandler}>
          your profile is incomplete.complete now</button>
        <Emailverification />

      </section>
      <hr></hr>

    </div>
  )
}

export default Home