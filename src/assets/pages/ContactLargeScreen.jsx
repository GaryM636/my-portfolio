import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="glitch layers" data-glitch="CONTACT"><span>CONTACT</span></h2>
        </Col>
      </Row>
      <Row>
        <Col className='swoop-in'>
          <div className={`contact-container ${isFlipped ? 'flipped' : ''}`}>
            <div className="front">
              <h3>Check Out My Projects</h3>
              <div className="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://stackoverflow.com/users/your-user-id" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
              </div>
              <button className="flip-button" onClick={handleFlip}>Get In Touch</button>
            </div>
            <div className="back">
              <h3>Get In Touch</h3>
              <div className='smth'>
                <div className='info'>
                  <p>Gary Muradyan</p>
                  <p><a href="mailto:garymur636@gmail.com">garymur636@gmail.com</a></p>
                  <p><a href="tel:+14243620003">+1 (424) 362-0003</a></p>
                  <p>Los Angeles, Ca</p>
                </div>
                <Form className='form'>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                  </Form.Group>

                  <Form.Group controlId="formPhone">
                    <Form.Label>Phone (optional)</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your phone number" />
                  </Form.Group>

                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Type your message here" required />
                  </Form.Group>

                  <button className='submit-button' type="submit">Submit</button>
                </Form>
              </div>

              <button className="flip-button" onClick={handleFlip}>Flip Back</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
