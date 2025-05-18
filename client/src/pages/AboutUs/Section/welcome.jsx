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
          Welcome to <span role="img" aria-label="fork and knife">🍴</span> Restoran
        </h1>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
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
