import React from 'react';
import './welcome.css';
import aboutwel from '../../../assets/aboutwel.jpg';
import aboutwel2 from '../../../assets/aboutwel2.jpg';
import aboutwel3 from '../../../assets/aboutwel3.jpg';
import aboutwel4 from '../../../assets/aboutwel4.jpg';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="grid grid-cols-2 flex-1 gap-4">
        <img src={aboutwel4} alt="Image 1" />
        <img src={aboutwel2} alt="Image 2" className='xl:!w-[200px] xl:!mt-15' />
        <img src={aboutwel} alt="Image 3" className='xl:!w-[200px] xl:!ml-15' />
        <img src={aboutwel3} alt="Image 4" />
        
      </div>

      <div className="welcome-content">
        <h1>
          Welcome to <span role="img" aria-label="fork and knife">🍴</span> Club & Bay
        </h1>
        <p>
          A warm and inviting space awaits at Club & Bay — where the love for food meets the calm rhythm of everyday life.
          <br/>We're passionate about celebrating food in all its forms — from simple, wholesome recipes to rich culinary traditions. 
          Everything we share is made with care, using fresh ideas and a personal touch.<br/>Whether you're here to try something new, 
          enjoy a comforting classic, or just feed your curiosity, Club & Bay is your daily destination for delicious inspiration and 
          feel-good food moments.
        </p>
        <div className="welcome-stats">
          <div className="stat">
            <h2>15</h2>
            <p>Years of <strong>EXPERIENCE</strong></p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <h2>50</h2>
            <p>Popular <strong>MASTER CHEFS</strong></p>
          </div>
        </div>
        <Link to="/contact">
          <button className="read-more-btn">Inquery</button>
        </Link>
      </div>
    </section>
  );
};

export default Welcome;
