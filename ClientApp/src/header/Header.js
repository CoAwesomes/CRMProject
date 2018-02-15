import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css';

class Header extends Component {
  render() {
		let hello = "Welcome to React";

		return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title"> {hello} </h1>
      </div>
    );
  }
}

export default Header;