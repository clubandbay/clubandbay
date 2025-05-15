// src/components/SubHeader.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './SubHeader.css';

const SubHeader = () => {
  return (
    <div className="subheader">
      <div className='social-icons'>
         <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='icon-box'>
            <FaFacebookF/>
         </a>
         <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="icon-box">
            <img
              src="/twitter_icon.png"
              alt="X (Twitter)"
              style={{ width: '20px', height: '20px' }}
            />
        </a>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='icon-box'>
            <FaInstagram/>
        </a>
      </div>
      <div className="contact-number">
          Mob. no.: +91 9876543210
      </div>
    </div>
  );
};

export default SubHeader