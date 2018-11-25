import React, { Component } from 'react';
import Project from '../Project';

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="display-6 text-white">// PROJECTS</h3>
        <br/>
        <div className="row">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    );
  }
}

export default Projects;
