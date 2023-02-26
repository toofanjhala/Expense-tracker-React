import React, { useState } from 'react'

const Authcontext = React.createContext({
  token: "",
  isLoggein: false,
  login: (token) => { },
  logout: () => { }
})


export const AuthContextProvider = (props) => {

 
  const intialtoken = localStorage.getItem("token")
  const [token, settoken] = useState(intialtoken)
  const isloggedinboolean = !!token


  

  function loginhandler(token) {
    settoken(token)
    localStorage.setItem("token", token)
    

  }
  function logouthandler() {
    settoken(null)
    localStorage.removeItem("token")
    
   
  }

  const contextValue = {
    token: token,
    isLoggein: isloggedinboolean,
    login: loginhandler,
    logout: logouthandler
  }


  return (
    <Authcontext.Provider value={contextValue}>
      {props.children}
    </Authcontext.Provider>

  )
}

export default Authcontext;