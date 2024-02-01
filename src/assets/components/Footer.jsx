import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (

    <footer className="footer">
      <Container>
      <div className='fd'>
      <div className="box">
        <h3> Links </h3>
        <ul className="links">
          <Link to="/" className="nav-link">About Me</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
        </ul>
      </div>
      <div className="box">
        <h3> Socials </h3>
        <ul className="social"> 
          <li><a href="https://github.com/garym636" target="_blank" rel="noreferrer"><i className="nav-link fa-brands fa-github"></i></a></li>
          <li><a href="https://github.com/garym636" target="_blank" rel="noreferrer"><i className="nav-link fa-brands fa-linkedin"></i></a></li>
          <li><a href="https://github.com/garym636" target="_blank" rel="noreferrer"><i className="nav-link fa-brands fa-stack-overflow"></i></a></li>
        </ul>
      </div>
      </div>
      </Container>
    </footer>
    
  );
};

export default Footer;
