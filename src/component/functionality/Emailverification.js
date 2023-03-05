import React from 'react'

import classes from "./Emailverification.module.css"

import { useSelector } from 'react-redux'
import { Header } from '../UI/Header'

export const Emailverification = () => {
    const token=useSelector((state)=>state.auth.token)
   

    async function emailverifyhandler() {
        try {
            const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBiavyg_VJqzOb714tLnQrb7h5qRK0P8Hs",
                {
                    method: "POST",
                    body: JSON.stringify({
                        idToken:token,
                        requestType: "VERIFY_EMAIL"
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
           
            const data = await res.json()
            console.log(data)
            if (!res.ok) {
                const errormessage = "Login again"
                throw new Error(errormessage)
            }else{
                alert("please check your registered email link sent")
            }
        } catch (Err) {
            alert(Err)
        }
    }

    return (
        <>
        <Header/>
        <div className={classes.container}>
		<h1>Email Verification</h1>
		<p>Thank you for registering with us! To verify your email address, please click the button below:</p>
		<button onClick={emailverifyhandler} className={classes.button}>Verify Email Address</button>
		<p><strong>Advisory:</strong> Please ensure that you have login with your registered email . If you did not register for an account with us, please ignore this email verification.</p>
		<p><strong>Precautions:</strong> Please be cautious of any suspicious emails or links, and do not share your personal information with anyone.</p>
	</div>

        {/* <Button variant='success' 
        style={{position:"fixed",top:"8rem", right:"2rem"}}
        onClick={emailverifyhandler}>Email Verfication</Button>*/}
        </> 
    )
}
