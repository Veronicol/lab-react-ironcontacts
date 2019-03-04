import React from 'react';

const NavBar = () => {
return (
<nav className="navbar is-light" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item is-size-4 has-text-weight-semibold">Iron Contacts</a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>

      <a className="navbar-item">
        Documentation
      </a>
    </div>
  </div>
</nav>
);
}

export default NavBar;
