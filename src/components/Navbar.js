import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assests/navbar.css';

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <h1>Books Store CMS</h1>
        <div className="nav-space-between">
          <ul className="nav">
            <li className="nav-link">
              <NavLink to="/" className={window.location.pathname === '/' ? 'active' : ''}>Books</NavLink>
            </li>
            <li>
              <NavLink id="navItem" to="/categories" className={window.location.pathname === '/categories' ? 'active' : ''}>Categories</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
