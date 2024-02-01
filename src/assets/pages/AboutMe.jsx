import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from '../components/Spinner';

const AboutMe = () => {
    return (

        <Container>

            <Row>
            <h2 className="glitch layers" data-glitch="ABOUT ME"><span>ABOUT ME</span></h2>
                <Col xs lg="9">
               
                    <div className='augconfig swoop-in' data-augmented-ui="bl-clip-x tl-clip tr-clip-y br-clip-inset b-clip-x t-clip-x border">
                        <h3>Greetings!</h3>

                        <p>I'm Gary, a dedicated full-stack developer committed to crafting meaningful digital experiences. With a meticulous eye for detail and a passion for writing clean, efficient code, I specialize in transforming intricate concepts into user-friendly applications.</p>

                        <h3>Technical Expertise:</h3>
                        <p>
                            My primary focus is on the MERN stack (MongoDB, Express.js, React, Node.js),
                            empowering me to develop robust and scalable applications. Additionally, I bring
                            proficiency in SQL, Node, and Express, offering a versatile toolkit to address diverse project requirements.
                        </p>

                        <h3>Innovation and Problem-Solving:</h3>
                        <p>
                            I thrive on challenges and innovation in the dynamic world of technology.
                            Constantly seeking novel approaches to enhance user experiences and streamline processes,
                            I approach each project with a commitment to excellence.
                        </p>

                        <h3>What Drives Me:</h3>
                        <p>
                            Continuous learning fuels my ability to stay ahead of the latest trends and technologies
                            in the ever-evolving tech landscape. This drive ensures I deliver cutting-edge solutions
                            tailored to meet your project needs.
                        </p>
                    </div>
                </Col>
                <Col xs lg="3" l="0" className='spin'>
                    <Spinner />
                </Col>
            </Row>
        </Container>


    );
};

export default AboutMe;
