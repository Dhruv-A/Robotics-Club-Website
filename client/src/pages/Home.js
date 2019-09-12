/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as User from '../actions/User';

import Header from '../components/Header';

import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.updateText = this.updateText.bind(this);
    this.props.getName();
  }

  updateText(e) {
    this.setState({
      name: e.target.value,
    })
  }

  render() {
    return (
      <div>

        <section class="home_section home_section_bg align-items-centre">
          <Header />
          <br></br><br></br><br></br><br></br><br></br>
          <h class="home_title">Robotics Club</h>
          <br></br>
          <h class="home_subtitle">SBHS</h>
        </section>

        //About Section
        <section class="about_section">
          <div class="about_section_img about_bg align-items-centre">
          </div>
          <div class="about_container">
            <h class="about_smalltitle">About us</h> <br></br>
            <br></br>
            <h class="about_title">SBHS's only IT community</h>
            <br></br>
            <h class="about_subtitle">A hub for all things tech related</h>
            <br></br><br></br><br></br>
            <a href="/about" class="button">About Us</a>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

          </div>



        </section>


        //Projects Section
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br>
        <hr></hr>

        <section class="projects_section">
        <h class="about_title">Our Projects</h>
          <div class="container">
            <div class="projects_container_game">
              <h>TEST</h>
            </div>
            <div class="projects_container_python">
              <h>TEST</h>
            </div>
            <div class="projects_container_web">
              <h>TEST</h>
            </div>
          </div>

        </section>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
});

const mapDispatchToProps = dispatch => ({
  setName: (name) => dispatch(User.setName(name)),
  getName: () => dispatch(User.getName()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Home
);
