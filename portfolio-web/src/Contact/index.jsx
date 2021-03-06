import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div id="contact_info" className="container text-white">
        <h3 className="display-6 text-white">// CONTACT / INFO</h3>
        <br/>
        <ul className="nav flex-column align-items-center flex-sm-row justify-content-sm-between">
          <li>
            <i className="far fa-envelope"></i> &nbsp; lisa.ward50@gmail.com
          </li>
          <li>
            <i className="fab fa-linkedin"></i> &nbsp; <a href="https://www.linkedin.com/in/lisa-ward-cfa/">lisa-ward-cfa</a>
          </li>
          <li>
            <i className="fab fa-github-square"></i> &nbsp;<a href="https://github.com/lisaward50">lisaward50</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Contact;
