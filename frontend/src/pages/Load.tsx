import React, { useEffect } from 'react';

const Load = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = '/dashboard'; // Replace '/dashboard' with the actual path to your dashboard page
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative h-screen bg-white">
      <img src="/circle.png" alt="Rotating" style={{ position: 'absolute', top: '37%', left: '45.4%', transform: 'translate(-50%, -50%)', maxWidth: '50%', maxHeight: '50%', animation: 'rotate 10s linear infinite' }} />
      <img src="/name.png" alt="Static" style={{ position: 'absolute', top: '51%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '50%', maxHeight: '50%' }} />
      <div style={{ position: 'absolute', top: '70%', left: '50.5%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#666', fontSize: '27px' }}>
        Loading accounts<span className="blink">...</span>
      </div>
      <style>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        
        .blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Load;
