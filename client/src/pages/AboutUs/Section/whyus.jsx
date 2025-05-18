import React from 'react';
import './whyus.css'; // Make sure your CSS file matches the name

const WhyUs = () => {
  const cards = [
    {
      number: '01',
      title: 'Lorem Ipsum',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.'
    },
    {
      number: '02',
      title: 'Repellat Nihil',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
    },
    {
      number: '03',
      title: 'Ad ad velit qui',
      description: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere.'
    },
  ];

  return (
    <section className="why-us highlight_bg">
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
