import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assests/navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <h1>Books Store</h1>
        <ul className="nav">
          <li className="nav-link">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Books</NavLink>
          </li>
          <li>
            <NavLink to="/categories" className={({ isActive }) => (isActive ? 'active' : '')}>Categories</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
