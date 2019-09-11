import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
  	return (
      <div>
        <div class="header">
        	<Link to="/" class="header_text">Home</Link> |
          <Link to="/about" class="header_text">About</Link>|
          <Link to="/projects" class="header_text">Projects</Link>|
          <Link to="/contact" class="header_text">Contact</Link>
          <Link to="/login" class="home_login_button">Login</Link>
        </div>
      </div>
    );
  }
}

export default Header;
