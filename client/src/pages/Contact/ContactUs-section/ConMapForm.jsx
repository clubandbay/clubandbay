import React from 'react';
import './ConMapForm.css';
import { FaUser, FaPhone, FaEnvelope, FaServicestack } from 'react-icons/fa';

const ConMapForm = () => {
  return (
    <section className="map-form-section ">
      <div className="map-container">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.5723794409466!2d-80.20861058497354!3d25.771120583625106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69fca5ba9c9%3A0x4f0c57b4d06b76de!2s821%20SW%202nd%20St%20APT%2010%2C%20Miami%2C%20FL%2033130%2C%20USA!5e0!3m2!1sen!2sin!4v1620412177734!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      
      <div className="form-container">
        <h2>Do you have any query?</h2>
        <p>Fill out the form, and we will reach you in 24 working hours.</p>
          <form>
  <div className="form-row">
    <div className="form-group-column">
      <label>Full Name</label>
      <div className="form-group">
        <FaUser />
        <input type="text" placeholder="John Doe" required />
      </div>
    </div>
    <div className="form-group-column">
      <label>Phone Number</label>
      <div className="form-group">
        <FaPhone />
        <input type="tel" placeholder="+1 555-555-5555" required />
      </div>
    </div>
  </div>

  <div className="form-group-column">
    <label>Email</label>
    <div className="form-group">
      <FaEnvelope />
      <input type="email" placeholder="youremail@example.com" required />
    </div>
  </div>

  <div className="form-group-column">
    <label>Service Required</label>
    <div className="form-group">
      <FaServicestack />
      <input type="text" placeholder="Service Required" />
    </div>
  </div>

  <div className="form-group-column">
    <label>Message</label>
    <div className="form-group full">
      <textarea placeholder="Leave a message..." rows="5"></textarea>
    </div>
  </div>

  <button type="submit">Submit Form</button>
</form>

      </div>
    </section>
  );
};

export default ConMapForm;
