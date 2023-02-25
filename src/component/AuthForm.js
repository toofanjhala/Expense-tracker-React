import { useState, useRef, useContext } from 'react';

import Authcontext from '../store/Auth-context';
// import { useNavigate } from 'react-router-dom';

import classes from './AuthForm.module.css';



const AuthForm = () => {

  //  const Navigate=useNavigate()

  const authctx = useContext(Authcontext)
  const emailref = useRef("")
  const passwordref = useRef("")
  const confirmpasswordref = useRef("")
  const [isLogin, setIsLogin] = useState(true);
  const [request, setrequest] = useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  function submithandler(event) {
    setrequest(true)
    event.preventDefault();

    const enteredemail = emailref.current.value;
    const enteredpassword = passwordref.current.value;
    const enterconfirmpswrd = confirmpasswordref.current.value

    if(enterconfirmpswrd!==enteredpassword)
    {
      alert("password is in correct")
      setrequest(false)
      return

    }

    console.log("check")



    let url;

    if (isLogin) {

      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBiavyg_VJqzOb714tLnQrb7h5qRK0P8Hs"

    }
    else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBiavyg_VJqzOb714tLnQrb7h5qRK0P8Hs"
    }
    fetch(url,
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredemail,
          password: enteredpassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        setrequest(false)
        if (res.ok) {
          return res.json()
        }
        else {
          return res.json().then((data) => {

            let error = "Authentication failed"
            throw new Error(error)

          })
        }

      }).then((data) => {

        console.log("succesfully signup")

        authctx.login(data.idToken)

      })
      .catch((Err) => {
        alert(Err.message)
      })
  }
  return (
    <>
      <section className={classes.auth} >
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required ref={emailref} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Your Password</label>
            <input
              type='password'
              id='password'
              required
              ref={passwordref}
            />
          </div>
         { !isLogin && <div className={classes.control}>
            <label htmlFor='confirmpassword'>Confirm Password</label>
            <input
              type='password'
              id='confirmpassword'

              required
              ref={confirmpasswordref}
            />
          </div>}
          <div className={classes.actions}>
            {request ? <p> Request sending</p> : <button onClick={submithandler}>{isLogin ? 'Login' : 'Sign up'}</button>}

          </div>
           { isLogin &&<a href='#abcd' style={{color:"black"}}> Forgot password</a>}
        </form>
      </section>
      <div className={classes.actions}>
        <button
          type='button'
          className={classes.toggle}
          onClick={switchAuthModeHandler}
        >
          {isLogin ? 'Create new account' : 'Have an account? Login'}
        </button>
      </div>
    </>
  );
};



export default AuthForm;