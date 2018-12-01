import React, { Component } from 'react';

class Project extends Component {
  render() {
    const { title, description, img, link, icon, status } = this.props;
    return (
      <div className="col-sm-6 col-lg-4 mb-3">
        <div className="card text-white bg-dark border-light">
          <img className="card-img-top" src={img}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={link} className="btn btn-sm btn-outline-primary"><i className={icon}></i> &nbsp; {status}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
