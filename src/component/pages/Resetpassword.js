import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import "./Resetpassword.css"

export const Resetpassword = () => {

    const emailref=useRef("")
 
    async function resetpasswordhandler(event){
        event.preventDefault()

        const enteredemail=emailref.current.value
        console.log(enteredemail)
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
    <div className="container">
    <h1>Reset Password</h1>
    <form>
      <label htmlFor="email">Registered Email Address:</label>
      <input type="email" id="email" name="email" placeholder="Enter your email address"  ref={emailref} required/>
      <button type="submit" id="send-link-btn" onClick={resetpasswordhandler}>Send Reset Link</button>
    </form>
    <Link to="/" className="login-link">Already a user? Login</Link>
  </div>
  )
}
