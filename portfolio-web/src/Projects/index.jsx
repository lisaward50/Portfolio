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
          <Project title="Travel Tips" description="Helpful tips for travelling light" img="images/travelTips.png" icon="far fa-eye" status="View Website" link="https://lisaward50.github.io/Design/" />
          <Project title="FX Converter" description="Currency converter app" img="images/currency.png" icon="far fa-eye" status="View Website" link="https://lisaward50.github.io/API/"/>
          <Project title="Idea Factory" description="Patent check app" img="images/proj3.jpeg" icon="fas fa-hammer" status="Under Construction" link="#" />
          <Project title="Bartender" description="Cocktail app" img="images/proj5.jpeg" icon="fas fa-hammer" status="Under Construction" link="#" />
          <Project title="Sushi Yasuda" description="Restaurant app" img="images/sushi_yasuda.png" icon="fas fa-hammer" status="Under Construction" link="#" />
          <Project title="Beerstorm" description="Craft beer app" img="images/beerstorm.png" icon="fas fa-hammer" status="Under Construction" link="#" />
        </div>
      </div>
    );
  }
}

export default Projects;
