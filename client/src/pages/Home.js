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

        <Header />
        <section class="home_section home_section_bg align-items-centre">
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
            <button>About us</button>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

          </div>


          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        </section>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        //Projects Section
        <section>
          <div class="container">
            <h class="about_title">Our Projects</h>
          </div>

        </section>

        //Contact Us
        <section class="about_section">
          <div class="container">
            <h class="about_title">Contact Us</h>
            //honestly i dont know if we should have a contact us section here
            //we should be okay to just have like contact info on footer and link to contact page
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
