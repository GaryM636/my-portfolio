import React from 'react';

const Spinner = () => {
    return (
      <>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -5 200 200">

<line x1="0" y1="200" x2="200" y2="0" stroke="#fff" strokeWidth="15" className="lines-1"></line>
<line x1="0" y1="240" x2="200" y2="40" stroke="#fff" strokeWidth="15" className="lines-2"></line>
<line x1="0" y1="280" x2="200" y2="80" stroke="#fff" strokeWidth="15" className="lines-3"></line>
<line x1="0" y1="320" x2="200" y2="120" stroke="#fff" strokeWidth="15" className="lines-4"></line>
<line x1="0" y1="360" x2="200" y2="160" stroke="#fff" strokeWidth="15" className="lines-5"></line>

<line x1="8" y1="190" x2="170" y2="190" stroke="#fff" strokeWidth="15" className="lines-6"></line>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="6 -10 200 200">
  
  <line x1="10" y1="10" x2="190" y2="10" stroke="#ff06b5" strokeWidth="15" className="lines-7"></line>
  <line x1="10" y1="50" x2="190" y2="50" stroke="#ff06b5" strokeWidth="15" className="lines-8"></line>
  <line x1="10" y1="90" x2="190" y2="90" stroke="#ff06b5" strokeWidth="15" className="lines-9"></line>
  <line x1="10" y1="130" x2="190" y2="130" stroke="#ff06b5" strokeWidth="15" className="lines-10"></line>
  <line x1="10" y1="170" x2="190" y2="170" stroke="#ff06b5" strokeWidth="15" className="lines-11"></line>


</svg>




        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
        <circle className="spin2" cx="400" cy="400" fill="none"
          r="300" strokeWidth="55" stroke="#FFBF00"
          strokeDasharray="215 1700"
          strokeLinecap="round" />
      </svg>
      </>
    );
}

export default Spinner;