import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='nbc'>
    <Navbar expand="lg" className="nb">
      <Container>
      <Navbar.Brand id='bar'>GARY MURADYAN</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto augconfig-h" data-augmented-ui="tl-clip br-clip border">
          <Link to="/" className="nav-link">About Me</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
