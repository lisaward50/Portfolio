import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-sm-8">
                <h3 className="display-6 text-white">// LISA REBECCA WARD</h3>
                <p id="intro" className="lead text-primary">Full stack web developer, based in NYC.
                  I'm passionate about creating beautiful functional websites.</p>
              </div>
              <div className="col">
                  <img id="pic" className="rounded float-right" src="images/pic.jpeg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
