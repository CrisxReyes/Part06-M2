import React from 'react';
import Logo from '../logoHenry.png';
import Info from'../info.png';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import About from './About.jsx'
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <div id='navS'>
      <nav className="navbar">
        <div className="container-fluid">
          <Link to='/'>
            <img src={Logo} alt="Henry"></img>
          </Link>
          <h1 className="name">Weather App</h1>
          <Link to="/about">
            <img className="info" src={Info} width="35" height="35" alt="about"></img>
          </Link>
          <SearchBar onSearch={onSearch}/>
        </div>
      </nav>
    </div>
  )
};

export default Nav;
