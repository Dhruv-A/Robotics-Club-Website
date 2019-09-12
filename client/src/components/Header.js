import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
  	return (
      <div>
        <div class="header">
          <nav>
          <div class='logo'></div>
            <ul class="menu-area">
              <li><a href="/" class="header_text">Home</a></li>
              <li><a href="/about" class="header_text">About</a></li>
              <li><a href="/projects" class="header_text">Projects</a></li>
              <li><a href="/contact" class="header_text">Contact</a></li>
              <li><a href="/login" class="header_text">Login</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
