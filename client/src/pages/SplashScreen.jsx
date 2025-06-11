import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/pnglogo.png'; // Update this path

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0b3171] z-50">
      <div 
        className="w-48 h-48 md:w-64 md:h-64"
        style={{
          animation: 'float 3s ease-in-out infinite',
        }}
      >
        <img 
          src={logo} 
          alt="Logo" 
          className="w-full h-full object-contain" 
        />
      </div>
      
      {/* Define the animation styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          20% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
          80% {
            transform: translateY(0) scale(1);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;