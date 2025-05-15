import React, { useState, useEffect } from 'react';
import './Offers.css';

const Offers = () => {
  const offers = [
    "🔥 Get 20% Off On Your First Order!",
    "🎉 Free Dessert with Orders Over ₹499"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <section className="offers">
      <h2 className="offers-heading">Special Offers Just for You!</h2>
      <div className="offer-banner">{offers[currentIndex]}</div>
      <div className="dots">
        {offers.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Offers;
