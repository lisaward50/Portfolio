import React, { Component } from 'react';
import Project from '../Project';

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="display-6 text-white">// PROJECTS</h3>
        <br/>
        <br/>
        <div className="row align-items-stretch">
          <Project title="Elevate" description="Event website for tech women" img="images/project1.png" icon="fas fa-eye" status="View Website" link="https://safe-taiga-62476.herokuapp.com/" />
          <Project title="Whisky/Twist" description="Whisky finder website" img="images/project2.png" icon="fas fa-eye" status="View Website" link="https://floating-woodland-55904.herokuapp.com/" />
          <Project title="Travel Tips" description="Helpful travel tips website" img="images/project3.png" icon="far fa-eye" status="View Website" link="https://lisaward50.github.io/Design/" />
          <Project title="FX/Conv" description="Currency converter website" img="images/project4.png" icon="far fa-eye" status="View Website" link="https://lisaward50.github.io/API/"/>
          <Project title="Weather" description="Detailed local weather website" img="images/project5.png" icon="fas fa-hammer" status="Under Construction" link="#" />
          <Project title="Beerstorm" description="Craft beer website" img="images/beerstorm.png" icon="fas fa-hammer" status="Under Construction" link="#" />
        </div>
      </div>
    );
  }
}

export default Projects;
