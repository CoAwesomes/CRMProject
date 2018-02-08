import React, { Component } from 'react';
import Header from './header/Header';
import Body from './body/Body';
import './App.css';

class App extends Component {
	render() {
		return (
      <div className="App">
        <Header/>
        <Body name="Sara" onClick="asdf()" date={new Date()}/>
      </div>
		);
	}
}

export default App;

