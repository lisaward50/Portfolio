import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <a className="navbar-brand" href="#"><i className="fas fa-code"></i></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fas fa-question"></i> &nbsp; About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="far fa-lightbulb"></i> &nbsp; Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="far fa-envelope"></i> &nbsp; Contact</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
