import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from "./Home.module.css"
import { Button } from 'react-bootstrap'
import { Expenseform } from '../expense/Expenseform'
import { Header } from '../UI/Header'
import { Activatepremium } from '../UI/Activatepremium'
import { useSelector,useDispatch } from 'react-redux'
import { ThemeAction } from '../../store/Themeslics'

const Home = () => {

  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ThemeAction.toggleTheme());
    console.log("theme change is toogle")
    console.log(isDarkTheme)
  };
  const Totalamount=useSelector((state)=>state.Expense.totalamount)
  const navigate = useNavigate()
 
 
  function profilehandler() {
    navigate("/profile")
  }


  return (
    <div className={isDarkTheme ? classes.darktheme : classes.lighttheme}>

    <Header/>
    <h2 className={classes.heading}>Manage your Expense here</h2>
    { Totalamount>=10000 &&  <Activatepremium themechange={handleClick}/> }
    <Expenseform />
    <Button className={classes.item} onClick={profilehandler}>Complete profile 80%</Button>
   
    </div> 
    
 




    
  )
}

export default Home