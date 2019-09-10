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
        </section>

        <section class="about_section section_padding">

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
