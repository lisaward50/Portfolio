import React, { Component } from 'react';
import Project from '../Project';

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="display-6 text-white">// PROJECTS</h3>
        <br/>
        <div className="row align-items-stretch">
          <Project title="Crypto Gold" description="Cryptocurrency App" img="images/proj1.jpg" />
          <Project title="Idea Factory" description="Patent Check App" img="images/proj3.jpeg" />
          <Project title="Bartender" description="Cocktail App" img="images/proj5.jpeg" />
          <Project title="Sushi Yasuda" description="Restaurant App" img="images/sushi_yasuda.png" />
          <Project title="Beerstorm" description="Craft Beer App" img="images/beerstorm.png" />
          <Project title="Elevate" description="Networking App" img="images/proj2.jpg" />
        </div>
      </div>
    );
  }
}

export default Projects;
