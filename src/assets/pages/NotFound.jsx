import React from 'react';
import Container from 'react-bootstrap/esm/Container';

const NotFound = () => {
    return (
        <Container className='err-container'>
            <h1 className="glitch layers h1-404" data-glitch="404"><span>404</span></h1>
            <h2 className="glitch layers h2-404" data-glitch="404 - Not Found"><span>404 - Not Found</span></h2>
            <p className='p-404'>Sorry, the page you are looking for does not exist.</p>
        </Container>
    );
};

export default NotFound;