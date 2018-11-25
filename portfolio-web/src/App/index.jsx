import React, { Component } from 'react';
import Nav from '../Nav';
import Header from '../Header';
import Projects from '../Projects';
import Contact from '../Contact';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Nav />
        <Header />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
