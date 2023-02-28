import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';
import { Logout } from '../functionality/logout'
import Authcontext from '../../store/Auth-context'

export const Header = () => {
  let authctx = useContext(Authcontext)
  return (
    <header className="sticky">
      <nav className="navbar">
        <h1 className="navbar__title">Expense Tracker</h1>
        <ul className="navbar__list">
          {!authctx.isLoggein && <li>
            <NavLink to="/" className="navbar__link" activeclassname="active">
              Login
            </NavLink>
          </li>}
          {authctx.isLoggein && <li>
            <NavLink to="/home" className="navbar__link" activeclassname="active">
              Home
            </NavLink>
          </li>}
          {authctx.isLoggein && <li>
            <NavLink to="/profile" className="navbar__link" activeclassname="active">
              Profile
            </NavLink>
          </li>}
          {!authctx.isLoggein && <li>
            <NavLink to="/resetpassword" className="navbar__link" activeclassname="active">
              Resetpassword
            </NavLink>
          </li>}
        </ul>
        {authctx.isLoggein && <Logout />}
      </nav>
    </header>
  );
}

