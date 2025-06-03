import React from 'react';
import './ConForm.css';
import { FaUser, FaCalendarAlt, FaClock } from 'react-icons/fa';

const ConForm = () => {
  return (
    <section className="con-section">
      <div className="con-wrapper">
        <div className="con-container">
          <h2>Have a Question/Query?</h2>
          <p>
            Submit your Queries and we'll get back to you shortly.
          </p>
          <form className="con-form">
            <div className="row">
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>

            <div className="row">
              <input type="email" placeholder="Email" required />
            </div>

            <div className="row">
                  <input type="text" placeholder="Subject" required />
              </div>

            <textarea placeholder="Message" required rows="4"></textarea>

            <button type="submit">Quere</button>
          </form>
        </div>

        <div className="contact-box">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <h4>Booking Request</h4>
            <p className="highlight">+91 9087654321</p>

            <h4>Location</h4>
            <p>
              Restaurant St, Delicious city,<br />
              London 9865, UK
            </p>

            <h4>Delivery Time</h4>
            <p>
              9:00 am - 10:00am
            </p>

            <h4>Days Open</h4>
            <p>
              Monday to Friday<br />
              & alt. Saturday <br />
              9:00 am to 10:00 am 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConForm;
