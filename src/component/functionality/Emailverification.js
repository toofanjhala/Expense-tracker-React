import React from 'react'
import { Button } from 'react-bootstrap'

import { useSelector } from 'react-redux'

export const Emailverification = () => {
    const token=useSelector(state=>state.auth.token)
   

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
        <Button variant='success' 
        style={{position:"fixed",top:"8rem", right:"2rem"}}
        onClick={emailverifyhandler}>Email Verfication</Button>
    )
}
