import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import Authcontext from '../store/Auth-context'


export const Emailverification = () => {

    let authctx=useContext(Authcontext)

    async function emailverifyhandler(){
       try{
        const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBiavyg_VJqzOb714tLnQrb7h5qRK0P8Hs",
        {
            method: "POST",
            body: JSON.stringify({
            idToken: authctx.token,
            requestType:"VERIFY_EMAIL"
        }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res)
           const data = await res.json()
           console.log(data)
           if(!res.ok){
               const errormessage="Login again"
                throw new Error( errormessage)
           }
    }catch(Err){
        alert(Err)
    }
    }

    return (
        <Button variant='danger' onClick={emailverifyhandler}>Email Verfication</Button>
    )
}
