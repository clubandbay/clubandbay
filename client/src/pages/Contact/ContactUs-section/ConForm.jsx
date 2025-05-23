import React from 'react';
import './ConForm.css';
import { FaUser, FaCalendarAlt, FaClock } from 'react-icons/fa';

const ConForm = () => {
  return (
    <section className="con-section">
      <div className="con-wrapper">
        <div className="con-container">
          <h2>Online Reservation</h2>
          <p>
            Booking request <span>+88-123-123456</span> or fill out the order form
          </p>
          <form className="con-form">
            <div className="row">
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>

            <div className="row">
              <select>
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>3 Persons</option>
                <option>4+ Persons</option>
              </select>
              <div className="input-icon">
                <FaCalendarAlt className='icon-white'/>
                <input type="date" required />
              </div>
              <div className="input-icon">
                <FaClock />
                <select>
                  <option>08:00 am</option>
                  <option>09:00 am</option>
                  <option>10:00 am</option>
                  <option>11:00 am</option>
                  <option>12:00 pm</option>
                  <option>01:00 pm</option>
                  <option>02:00 pm</option>
                  <option>05:00 pm</option>
                </select>
              </div>
            </div>

            <div className="row">
                
                <select id="subscription" required>
                    <option value="">Choose Your Subscription Plan</option>
                    <option value="Club Crystal">Club Crystal [2 Days(Mon & Wed)] - ₹376</option>
                    <option value="Club Pearl">Club Pearl [3 Days(Mon, Wed & Fri)] - ₹564</option>
                    <option value="Club Ruby">Club Ruby [5 Days(Mon - Fri)] - ₹1,045</option>
                    <option value="Club Emerald">Club Emerald [6 Days (Mon-Fri + alt. Sat)] - ₹1,443</option>
                    <option value="Club Diamond">Club Diamond [6 Days (Mon - Sat)] - ₹1,569</option>
                </select>
              </div>

            <textarea placeholder="Message" rows="4"></textarea>

            <button type="submit">Book a Table</button>
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

            <h4>Lunch Time</h4>
            <p>
              Monday to Sunday<br />
              11.00 am – 2.30pm
            </p>

            <h4>Dinner Time</h4>
            <p>
              Monday to Sunday<br />
              05.00 pm – 10.00pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConForm;
