/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as User from '../actions/User';

import Header from '../components/Header';
import Footer from '../components/Footer';

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


        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <hr></hr>

        <section class="projects_section">
        <h class="projects_title"><b>Our Classes</b></h>
        <br></br><br></br><br></br>
          <div class="container">

          <a href="/projects">
              <div class="projects_container_game">
                <div>
                  <h class="projects_container_title"><b>Game Development</b></h><br></br>
                  <h class="projects_container_subtitle">Learn to create games using Unity or Game Maker Studio.</h>
                </div>
                <div class="projects_game_bg">
                </div>
              </div>
            </a>

          <a href="/projects">
            <div class="projects_container_python">
              <div>
                <h class="projects_container_title"><b>Intro to Python</b></h><br></br>
                <h class="projects_container_subtitle">Learn the basics of computer programming with Python!</h>
              </div>
              <div class="projects_python_bg">
              </div>
            </div>
          </a>

          <a href="/projects">
            <div class="projects_container_web">
              <div>
                <h class="projects_container_title"><b>Intro to Web Dev</b></h><br></br>
                <h class="projects_container_subtitle">Learn to create you own websites using HTML, CSS and JS!</h>
              </div>
              <div class="projects_web_bg">
              </div>
            </div>
          </a>

          </div>

        </section>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br>
        <Footer />
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
