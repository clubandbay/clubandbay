import React, { useRef } from 'react';
import './ConForm.css';
import { FaUser, FaCalendarAlt, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ConForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_CONTACT_SERVICE_KEY,
      import.meta.env.VITE_CONTACT_TEMPLATE_KEY,
      form.current,
      import.meta.env.VITE_CONTACT_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <section className="con-section">
      <div className="con-wrapper">
        <div className="con-container">
          <h2>Have a Question/Query?</h2>
          <p>
            Submit your Queries and we'll get back to you shortly.
          </p>
          <form className="con-form" ref={form} onSubmit={sendEmail}>
            <div className="row">
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="tel" name="user_phone" placeholder="Phone Number" required />
            </div>

            <div className="row">
              <input type="email" name="user_email" placeholder="Email" required />
            </div>

            <div className="row">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>

            <textarea name="message" placeholder="Message" required rows="4"></textarea>

            <button type="submit">Submit Query</button>
          </form>
        </div>

        <div className="contact-box">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <h4>Booking Request</h4>
            <p className="highlight">+91 9930630900<br/>+91 9930660900</p>

            <h4>Location</h4>
            <p>
              03 Patel Plot, Kalina, Santacruz <br />
              East. Mumbai - 400029.
            </p>

            <h4>Delivery Time</h4>
            <p>
              7:00 am - 9:45 am
            </p>

            <h4>Days Open</h4>
            <p>
              Monday to Friday<br />
              & alt. Saturday <br />
              7:00 am - 9:45 am
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConForm;