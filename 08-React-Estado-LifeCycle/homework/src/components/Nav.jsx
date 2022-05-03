import React from 'react';
import Logo from '../logoHenry.png';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <img src={Logo} alt="Henry"></img>
          <a class="name">Weather App</a>
          <form>
              <SearchBar onSearch={onSearch}/>
          </form>
        </div>
      </nav>
    </div>
  )
};

export default Nav;
