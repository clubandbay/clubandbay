import React, { useEffect, useState } from 'react';
import './Offers.css';

const Offers = () => {
  const offers = [
    {
      title: 'Pizza Power Hour',
      image: '/offerpizza.jpg',
      description: 'Large pizza for the price of a medium - today only!',
      buttonText: 'View more',
      buttonLink: '/pizza',
    },
    {
      title: 'Coffee Lovers',
      image: '/offercoffee.png',
      description: 'Buy one get one free on all coffee beverages.',
      buttonText: 'View more',
      buttonLink: '/coffee',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [offers.length]);

  return (
    <section className="offers-container">
      <h2 className="offers-title">Today's Hot Deals</h2>
      <div className="offers-wrapper">
        {/*Left side*/}
        <div className="offer-card fixed-offer dark-offer">
          <div className="offer-content">
            <h4 className="deal-note">today's best deal</h4>
            <h3 className="main-heading">TODAY <br /><span>SPECIAL</span></h3>
            <p className="sub-heading">CHEESE<span className="highlight"> BURGER</span></p>
            <button className="offer-button">View More</button>
          </div>
          <div className="offer-image-section">
            <img
              src="./burger.jpg"
              alt="Cheese Burger"
              className="burger-image"
            />
            <p className="offer-price">$59.00</p>
          </div>
        </div>

        {/*Right side*/}
        <div className="offer-card rotating-offer">
          <div className="text-content">
            <h4 className="rotating-title">CRISPY, EVERY BITE TASTE</h4>
            <h3 className="main-heading">{offers[currentIndex].title}</h3>
            <div className="discount-badge">50% OFF</div>
            <p className="rotating-desc">{offers[currentIndex].description}</p>
            <button
              className="rotating-button"
              onClick={() => window.location.href = offers[currentIndex].buttonLink}
            >
              {offers[currentIndex].buttonText}
            </button>
          </div>
          <img
            src={offers[currentIndex].image}
            alt={offers[currentIndex].title}
            className="rotating-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
