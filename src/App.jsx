import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './assets/pages/AboutMe';
import Portfolio from './assets/pages/Portfolio';
import Contact from './assets/pages/Contact';
import Resume from './assets/pages/Resume';
import NotFound from './assets/pages/NotFound';

const App = () => {
  return (
    <div id="bgr">
      <Router>
        <Header />
        <main className='py-4'>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<AboutMe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
