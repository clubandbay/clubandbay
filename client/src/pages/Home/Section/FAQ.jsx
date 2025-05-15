import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h4>What are your delivery hours?</h4>
        <p>We deliver from 10:00 AM to 11:00 PM every day.</p>
      </div>
      <div className="faq-item">
        <h4>Do you offer subscriptions?</h4>
        <p>Yes, we offer weekly and monthly meal subscriptions.</p>
      </div>
    </section>
  );
};

export default FAQ;
