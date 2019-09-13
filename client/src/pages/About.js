/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as User from '../actions/User';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './Home.scss';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
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
              <div>
              At the SBHS Robotics Club, we are committed to empowering students<br></br>with programming skills of the 21st century.
              Our core values consist of truth,<br></br>
              courage, loyalty and respect, which we strive to express to the most genuine level.
              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

            </div>



          </section>

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer />
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
  About
);
