import React, { useContext } from 'react';
import AuthForm from './component/pages/AuthForm';

import Home from './component/pages/Home';
import Authcontext from './store/Auth-context';
import { Profilepage } from './component/pages/Profilepage';
import { Resetpassword } from './component/pages/Resetpassword';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {

  let authctx = useContext(Authcontext)

  const isAuthenticated = authctx.isLoggein
 


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<AuthForm />} /> 
        <Route path="/resetpassword" element={<Resetpassword />} />
       {isAuthenticated  && <Route path="/home" element={<Home />} /> }
       {!isAuthenticated  && <Route path="/home" element={<AuthForm/>} /> }
        <Route path="/profile" element={<Profilepage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
