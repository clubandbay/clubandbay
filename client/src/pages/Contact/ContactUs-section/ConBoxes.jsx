import React from 'react';
import './ConBoxes.css';
import { MdSupportAgent, MdEmail, MdCall, MdLocationOn } from 'react-icons/md';

const ConBoxes = () => {
  return (
    <section className="con-boxes">
      <div className="con-boxes-heading">
        <h2>Get in touch now</h2>
        <p>Get in touch with us through any of these channels</p>
      </div>

      <div className="boxes-container">
        {/* Box 1: 24/7 Support */}
        <div className="box">
          <MdSupportAgent className="icon" />
          <h3>24/7 Support</h3>
          <p>We’re always here to help you anytime.</p>
          <a href="/support" className="con-btn">Live Chat</a>
        </div>

        {/* Box 2: Email Us */}
        <div className="box">
          <MdEmail className="icon" />
          <h3>Email Us</h3>
          <p>Drop us a message and we’ll respond quickly.</p>
          <a href="mailto:your@email.com" className="con-btn">Send Email</a>
        </div>

        {/* Box 3: Call Us */}
        <div className="box">
          <MdCall className="icon" />
          <h3>Call Us to Book</h3>
          <p>Connect with us directly via phone.</p>
          <a href="tel:+1234567890" className="con-btn">Call Now</a>
        </div>

        {/* Box 4: Location */}
        <div className="box">
          <MdLocationOn className="icon" />
          <h3>Location</h3>
          <p>Visit our office for face-to-face support.</p>
          <a
            href="https://www.google.com/maps?q=your+location"
            target="_blank"
            rel="noopener noreferrer"
            className="con-btn"
          >
            View Map
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConBoxes;
