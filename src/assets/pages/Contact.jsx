import React, { useState, useEffect } from 'react';
import ContactLargeScreen from './ContactLargeScreen';
import ContactSmallScreen from './ContactSmallScreen';

const ContactPage = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isLargeScreen ? <ContactLargeScreen /> : <ContactSmallScreen />}
    </div>
  );
};

export default ContactPage;
