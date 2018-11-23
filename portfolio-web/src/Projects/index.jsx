import React, { Component } from 'react';
import Project from '../Project';

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Project />
          <Project />
          <Project />
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
