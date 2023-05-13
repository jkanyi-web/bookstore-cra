import React from 'react';
import { NavLink } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => (
  <nav className="nContainer">
    <div className="navlinks">
      <h2 className="navlogo">Bookstore CMS</h2>
      <ul className="ulLinks">
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
      <FontAwesomeIcon icon={faUser} className="fauser" />
    </div>
  </nav>
);

export default Navbar;
