import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
  	return (
      <div>
      	<Link to="/">Home</Link> | <Link to="/about">About</Link>| <Link to="/projects">Projects</Link>| <Link to="/contact">Contact</Link>
      	<hr />
      </div>
    );
  }
}

export default Header;
