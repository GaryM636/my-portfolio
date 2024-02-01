// Resume.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import skillsData from '../utils/Skills';

const generateSkillsList = (skills) => {
  return skills.map((item) => (
    <li key={item.skill} className='augconfig-sk sk-li' data-augmented-ui="tl-clip br-clip border">
      <strong>{item.skill}:</strong> {item.description}
    </li>
  ));
};

const Resume = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="glitch layers" data-glitch="RESUME"><span>RESUME</span></h2>
        </Col>
      </Row>
      <Row>
        <Col className='swoop-in'>
          <h3>Technical Proficiencies</h3>
          <ul className='sk-ul'>
            {generateSkillsList(skillsData)}
          </ul>
          <p>
            As a junior web developer, I am enthusiastic about learning and implementing these technologies to contribute effectively to projects and further enhance my skills.
          </p>
          <h3>Currently Learning</h3>
          <p>
            I am actively exploring TypeScript to enhance my projects with static typing, improved code maintainability, and a more robust development experience. Embracing TypeScript is a key part of my journey to becoming a well-rounded developer, and I'm excited to apply this knowledge to future endeavors.
          </p>
          <p>
            Please feel free to download my resume for a detailed overview of my professional experience and accomplishments.
          </p>
          <a className='download' href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
