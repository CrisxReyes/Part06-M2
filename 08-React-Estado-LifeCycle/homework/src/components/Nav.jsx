import React from 'react';
import Logo from '../logoHenry.png';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <img src={Logo} alt="Henry"></img>
          <h1 className="name">Weather App</h1>
          <SearchBar onSearch={onSearch}/>
        </div>
      </nav>
    </div>
  )
};

export default Nav;
