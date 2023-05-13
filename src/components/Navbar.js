import React from 'react';
import { NavLink } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => (
  <nav className="nContainer">
    <div className="links">
      <h2 className="logo">Bookstore</h2>
      <ul className="navLinks">
        <li>
          <NavLink exact to="/" className="books">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" className="categories">
            Categories
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="userCircle">
      <FontAwesomeIcon icon={faUser} className="user" />
    </div>
  </nav>
);

export default Navbar;
