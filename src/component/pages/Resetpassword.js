import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../UI/Header'
import classes from "./Resetpassword.module.css"

export const Resetpassword = () => {

    const emailref=useRef("")
 
    async function resetpasswordhandler(event){
        event.preventDefault()

        const enteredemail=emailref.current.value
       
          try {
                const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBiavyg_VJqzOb714tLnQrb7h5qRK0P8Hs",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            email: enteredemail,
                            requestType: "PASSWORD_RESET"
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                
                
                
                if (!res.ok) {
                    const errormessage = "user not found"
                    throw new Error(errormessage)
                }
            } catch (Err) {
                alert(Err)
            }
        }
    

  return (
    <React.Fragment>
      <Header/>
      <div className={classes.container}>
    <h1 className={classes.h1abc}>Reset Password</h1>
    <form>
      <label htmlFor="email">Registered Email:</label>
      <input type="email" id="email" name="email" placeholder="Enter registered email address"  ref={emailref} required/>
      <button type="submit" id="send-link-btn" onClick={resetpasswordhandler}>Send Reset Link</button>
    </form>
    <Link to="/" className={classes.loginlink}>Already a user? Login</Link>
  </div>
 </React.Fragment>
  )
}
