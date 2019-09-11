/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as User from '../actions/User';

import Header from '../components/Header';

import './Home.scss';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div class="login_section login_bg">
          <div class="login_box">
            <h class="login_title"><b>Login</b></h>
            <br></br>
            <h class="login_subtitle">SBHS Robotics Club</h>
            <br></br><br></br>

            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" onChange={this.updateText} required></input>
            <br></br><br></br>
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" onChange={this.updateText} required></input>
            <br></br><br></br><br></br>
            <button type="submit" class="login_button">Login</button>


          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Login
);
