import React from 'react';
import './Welcome.css';
import aboutwel from '../../../assets/aboutwel.jpg';
import aboutwel2 from '../../../assets/aboutwel2.jpg';
import aboutwel3 from '../../../assets/aboutwel3.jpg';
import aboutwel4 from '../../../assets/aboutwel4.jpg';

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="grid grid-cols-2 flex-1 gap-4">
        <img src={aboutwel4} alt="Image 1" />
        <img src={aboutwel2} alt="Image 2" className='!w-[200px] !mt-15' />
        <img src={aboutwel} alt="Image 3" className='!w-[200px] !ml-15' />
        <img src={aboutwel3} alt="Image 4" />
        
      </div>

      <div className="welcome-content">
        <h1>
          Welcome to <span role="img" aria-label="fork and knife">🍴</span> Club & Bay
        </h1>
        <p>
          A warm and inviting atmosphere awaits in this neighborhood cafe, where the 
          friendly vibe of a club meets the tranquil feel of the bay. We are passionate 
          about preparing delicious, high-quality food and drinks, always using fresh 
          ingredients and adding our personal care.<br/> Whether individuals are looking for 
          lively conversations, peaceful moments, or simply satisfying their cravings, 
          we aim to create a comforting and enjoyable experience. Discover a perfect 
          balance at Club &amp; Bay, a daily destination for good company and good food.
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
        <button className="read-more-btn">READ MORE</button>
      </div>
    </section>
  );
};

export default Welcome;
