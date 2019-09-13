/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as User from '../actions/User';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './Home.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <section class="contact_section">
          <div class="contact_container">
            <h class="contact_smalltitle">Contact us</h>
            <br></br><br></br>
            <h class="contact_title">Timmy Huang</h>
            <h class="contact_smalltitle"></h>
            <div class="contact-info">
            Phone: 0412 345 678<br></br>
            Email: timmyme@gmail.com
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
  Contact
);
