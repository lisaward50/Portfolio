import React, { Component } from 'react';
import Nav from '../Nav';
import Header from '../Header';
import Projects from '../Projects';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Projects />
      </div>
    );
  }
}

export default App;
