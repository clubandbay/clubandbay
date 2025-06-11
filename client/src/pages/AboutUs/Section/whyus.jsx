import React from 'react';
import './whyus.css'; // Make sure your CSS file matches the name

const WhyUs = () => {
  const cards = [
    {
      number: '01',
      title: 'Quality & Taste',
      description: 'Delight in our delicious and high-quality offerings, where fresh ingredients meet expertly crafted recipes to tantalize your taste buds and ensure satisfaction.'
    },
    {
      number: '02',
      title: 'Welcoming Atmosphere',
      description: 'Enjoy food made with care using only fresh, high-quality ingredients. Every dish is thoughtfully prepared to bring out natural flavors and nourishing goodness.'
    },
    {
      number: '03',
      title: 'Great Service',
      description: 'Enjoy our attentive and friendly service, where our dedicated team strives to make your visit enjoyable and ensures a pleasant dining experience.'
    },
  ];

  return (
    <section className="why-us aboutcard_bg">
      <div className="container">
        <h2 className="title">Why Choose Our Restaurant</h2>
        <div className="why-us-grid">
          {cards.map((card, index) => (
            <div className="why-us-card" key={index}>
              <h3 className="card-number">{card.number}</h3>
              <h4 className="card-title">{card.title}</h4>
              <p className="card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
