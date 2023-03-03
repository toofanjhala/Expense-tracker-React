import React from 'react'
import classes from "./Activatepremium.module.css"
export const Activatepremium = (props) => {
  return (
 <div>
<button className={classes.premiumbutton} onClick={props.themechange}> Activate Premium</button>
</div>
  )
}
