// components/Portfolio/Project.jsx
import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="my-4">
      <h3>{title}</h3>
      <img src={image} alt={title} className="img-fluid" />
      <div className="my-2">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">
          Deployed Link
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Project;
