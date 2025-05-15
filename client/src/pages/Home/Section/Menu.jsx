// src/components/Section/Menu.jsx
import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <h2 className="menu-heading">Weekly Menu</h2>
      <div className="menu-weeks">
        <div className="week-box">Week 1</div>
        <div className="week-box">Week 2</div>
        <div className="week-box">Week 3</div>
        <div className="week-box">Week 4</div>
      </div>
      
      {/* Navigate to full menu page */}
      <Link to="/menu">
        <button className="view-more-button">View More</button>
      </Link>
    </section>
  );
};

export default Menu;
