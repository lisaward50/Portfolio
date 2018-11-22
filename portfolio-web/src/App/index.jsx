import React, { Component } from 'react';
import Nav from '../Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <div className="container">
          <div className="jumbotron">
            <h1>Hello World</h1>
            <p>lorem ipsum</p>
            <button className="btn btn-success btn-lg">Hi there</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
