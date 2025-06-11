import React from 'react';
import './ConBoxes.css';
import { MdSupportAgent, MdEmail, MdCall, MdLocationOn } from 'react-icons/md';

const ConBoxes = () => {
  return (
    <section className="con-boxes container">
      <div className="con-boxes-heading">
        <h2>We're Always Here to Serve You - Just Reach Out</h2>
        <p>Whether you're planning a meals or just have a question, our friendly team is just a message away.<br/> Because great food starts with great service.</p>
      </div>

      <div className="boxes-container">
        {/* Box 1: 24/7 Support */}
        <div className="box">
          <MdSupportAgent className="icon" />
          <h3>WhatsApp Chat</h3>
          <p>We're always here to help you anytime.</p>
          <a href="https://wa.me/919930660900" className="con-btn" target='_blank' rel='noopener noreferrer'>Live Chat</a>
        </div>

        {/* Box 2: Email Us */}
        <div className="box">
          <MdEmail className="icon" />
          <h3>Email Us</h3>
          <p>Drop us a message and we'll respond quickly.</p>
          <a href="mailto:food@gmail.com" className="con-btn">Send Email</a>
        </div>

        {/* Box 3: Call Us */}
        <div className="box">
          <MdCall className="icon" />
          <h3>Call Us to Book</h3>
          <p>Connect with us directly via phone.</p>
          <a href="tel:+919930630900" className="con-btn">Call Now</a>
        </div>

        {/* Box 4: Location */}
        <div className="box">
          <MdLocationOn className="icon" />
          <h3>Location</h3>
          <p>Visit our office for face-to-face support.</p>
          <a
          href="https://www.google.com/maps?q=3+Linking+Rd,+Khar,+Bandra+West,+Mumbai,+Maharashtra+400050"
          target="_blank"
          rel="noopener noreferrer"
          className="con-btn"
          >
            View
            </a>
            </div>
      </div>
    </section>
  );
};

export default ConBoxes;
