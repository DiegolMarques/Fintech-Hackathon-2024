import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after a short delay
    setTimeout(() => {
      setFadeIn(true);
    }, 1000); // Adjust the delay as needed

    // Redirect to the main content page after the animation
    setTimeout(() => {
      window.location.href = '/signin';
    }, 6000); // Adjust the delay as needed
  }, []);

  return (
    <div className={`fade-container ${fadeIn ? 'fade-in' : ''}`}>
      <img src="/circle.png" alt="Rotating" style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '50%', maxHeight: '50%', animation: 'rotate 10s linear infinite' }} />
      <img src="/name.png" alt="Static" style={{ position: 'absolute', top: '51%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '50%', maxHeight: '50%' }} />
    </div>
  );
};

export default LandingPage;
