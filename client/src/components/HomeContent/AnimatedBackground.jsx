import { useEffect, useRef } from 'react';
import React from 'react';
import { FaUtensils, FaHamburger, FaPizzaSlice, FaIceCream, FaCoffee, FaFish } from 'react-icons/fa';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Food icons data
    const icons = [
      { icon: <FaUtensils />, size: 30, speed: 1.5, x: Math.random() * canvas.width, y: Math.random() * canvas.height },
      { icon: <FaHamburger />, size: 25, speed: 1.2, x: Math.random() * canvas.width, y: Math.random() * canvas.height },
      { icon: <FaPizzaSlice />, size: 28, speed: 1.8, x: Math.random() * canvas.width, y: Math.random() * canvas.height },
      { icon: <FaIceCream />, size: 22, speed: 1.1, x: Math.random() * canvas.width, y: Math.random() * canvas.height },
      { icon: <FaCoffee />, size: 20, speed: 1.3, x: Math.random() * canvas.width, y: Math.random() * canvas.height },
      { icon: <FaFish />, size: 26, speed: 1.6, x: Math.random() * canvas.width, y: Math.random() * canvas.height },
    ];

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw animated icons
      icons.forEach(icon => {
        icon.y += icon.speed;
        if (icon.y > canvas.height) {
          icon.y = -icon.size;
          icon.x = Math.random() * canvas.width;
        }
        
        // Draw icon (simplified - in a real app you'd need to render React icons to canvas)
        ctx.fillStyle = `rgba(231, 183, 69, ${Math.random() * 0.3 + 0.2})`;
        ctx.font = `${icon.size}px Arial`;
        ctx.fillText('•', icon.x, icon.y);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-10"
    />
  );
};

export default AnimatedBackground;