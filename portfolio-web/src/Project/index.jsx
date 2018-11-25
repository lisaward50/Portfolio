import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div className="col-sm-6 col-lg-4 mb-3">
        <div className="card text-white bg-dark border-light">
          <img className="card-img-top" src="images/proj1.jpg"/>
          <div className="card-body">
            <h5 className="card-title">Project 1</h5>
            <p className="card-text">Description</p>
            <a href="#" className="btn btn-sm btn-outline-primary"><i className="far fa-eye"></i> &nbsp; View Project</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
