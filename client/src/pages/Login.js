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

            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required></input>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"> Remember me</input>
            </label>
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
