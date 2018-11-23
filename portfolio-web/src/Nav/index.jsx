import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-nav" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><i class="fas fa-code"></i></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-nav">
            <ul className="nav navbar-nav">
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><i class="fas fa-question"></i> &nbsp; About</a></li>
              <li><a href="#"><i class="far fa-lightbulb"></i> &nbsp; Projects</a></li>
              <li><a href="#"><i class="far fa-envelope"></i> &nbsp; Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
