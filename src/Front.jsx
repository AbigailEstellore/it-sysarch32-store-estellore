import React from 'react';
import './Front.css'; // Import the CSS file

const Front = () => {
  return (
    <div className="container">
      <img 
        src="/assets/logo.png" // Path to your locally hosted image
        alt="Logo"
        className="logo"
      />
      <div className="welcome-text">
        W e l c o m e<br />T o<br />V i s e n  A I
      </div>
      
      <button className="login-button">
        L  O  G   I  N
      </button>
      
      <button className="signup-button">
        S  I  G  N   U  P
      </button>
    </div>
  );
};

export default Front;
