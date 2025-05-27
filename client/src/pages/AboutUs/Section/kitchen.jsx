import React from 'react';
import './kitchen.css';

const Kitchen = () => {
  return (
    <section className="kitchen-section">
      <div className="kitchen-container">
        <div className="kitchen-image">
          <img src="/kitchenchef.jpg" alt="Inside the Kitchen" />
        </div>

        <div className="kitchen-content">
          <p className="section-subtitle">Behind the Kitchen</p>
          <h2 className="section-title">Crafting Flavor with Passion</h2>
          <p className="section-description">
            Every dish that leaves our kitchen is a masterpiece crafted with care, fresh ingredients, and a passion for perfection.
            Our chefs blend tradition and creativity to bring out bold, unforgettable flavors that define our restaurant's identity.
            Whether it's sizzling grills or delicate sauces, we believe in making every meal an experience worth savoring.
          </p>
          <p className="section-description">
            Step behind the scenes and discover the dedication, teamwork, and love that go into creating your favorite dishes.
            The kitchen is a space of culinary artistry where fresh, carefully selected ingredients and passionate chefs come together.
            Rooted in both tradition and innovation, every dish is crafted to deliver not just flavor but a memorable, meaningful 
            dining experience that celebrates quality, culture, and joy.
          </p>

          <div className="kitchen-features">
            <div className="feature-box">
              <img src="/kitcheni1.png" alt="Organic Ingredients" />
              <div>
                <h4>Organic Ingredients</h4>
                <p>Only the finest, organically sourced ingredients go into every dish we serve.</p>
              </div>
            </div>

            <div className="feature-box">
              <img src="/kitcheni2.png" alt="Fresh Vegetables" />
              <div>
                <h4>Fresh Vegetables</h4>
                <p>Hand-picked vegetables ensure peak flavor, nutrition, and quality in every meal.</p>
              </div>
            </div>

            <div className="feature-box">
              <img src="/kitcheni3.png" alt="100% Natural Food" />
              <div>
                <h4>100% Natural Food</h4>
                <p>Free from additives and preservatives, offering pure and wholesome flavors.</p>
              </div>
            </div>

            <div className="feature-box">
              <img src="/kitcheni4.png" alt="Hygienic Kitchen" />
              <div>
                <h4>Hygienic Kitchen</h4>
                <p>Cleanliness and safety are our top priorities in every step of food preparation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kitchen;