import React from 'react';
import AuthForm from './component/pages/AuthForm';
import {createBrowserRouter, RouterProvider  } from 'react-router-dom';
import  Rootlayout from './component/pages/Rootlayout';
import Home from './component/pages/Home';
import { AuthContextProvider } from './store/Auth-context';
import { Profilepage } from './component/pages/Profilepage';
import { Resetpassword } from './component/pages/Resetpassword';

function App() {

  const router=createBrowserRouter(
    [
      {
        path:"/",
        element:<Rootlayout/>,
        children:[
          {path:"/" ,element:<AuthForm/> },
          {path:"/home",element:<Home/>},
          {path:"/profile",element:<Profilepage/>},
          {path:"/resetpassword",element:<Resetpassword/>}
        ]
      }
    ]
  )
  return (
    <AuthContextProvider>
   < RouterProvider router={router}/>
   </AuthContextProvider>
  );
}

export default App;
