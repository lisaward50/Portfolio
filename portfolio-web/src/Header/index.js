import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
          <h1>Hello World</h1>
          <p>lorem ipsum</p>
          <button className="btn btn-info btn-lg">Hi there</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
