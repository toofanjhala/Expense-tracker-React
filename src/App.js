import React  from 'react';
import AuthForm from './component/pages/AuthForm';
import Home from './component/pages/Home';
import { Profilepage } from './component/pages/Profilepage';
import { Resetpassword } from './component/pages/Resetpassword';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated=useSelector(state=>state.auth.isLoggein)
 
  return (
    <BrowserRouter>
      <Routes>
       {!isAuthenticated && <Route path="/" exact element={<AuthForm />} /> }
       {isAuthenticated && <Route path="/" exact element={<Home />} /> }
        <Route path="/resetpassword" element={<Resetpassword />} />
       {isAuthenticated  && <Route path="/home" element={<Home />} /> }
       {!isAuthenticated  && <Route path="/home" element={<AuthForm/>} /> }
        <Route path="/profile" element={<Profilepage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
