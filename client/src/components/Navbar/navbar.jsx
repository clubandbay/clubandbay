import React, { useEffect, useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setMenu("home");
    else if (path.includes("menu")) setMenu("menu");
    else if (path.includes("about")) setMenu("about");
    else if (path.includes("services")) setMenu("services");
    else if (path.includes("contact")) setMenu("contact");
    setIsMobileMenuOpen(false); // Close menu on route change
  }, [location]);

return (
  <>
    <div className='navbar'>
      <img src={assets.logo} alt='Logo' className='logo' />

      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>
          <Link to="/" onClick={() => setMenu("home")}>Home</Link>
        </li>
        <li className={menu === "menu" ? "active" : ""}>
          <Link to="/menu" onClick={() => setMenu("menu")}>Menu</Link>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <Link to="/about" onClick={() => setMenu("about")}>About Us</Link>
        </li>
        <li className={menu === "services" ? "active" : ""}>
          <Link to="/services" onClick={() => setMenu("services")}>Subscriptions</Link>
        </li>
        <li className={menu === "contact" ? "active" : ""}>
          <Link to="/contact" onClick={() => setMenu("contact")}>Contact</Link>
        </li>
      </ul>

      <div className="nav-right">
        <div className='social_icon'>
          <Link to='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='icon-box'>
            <FaFacebookF />
          </Link>
          <Link to="https://x.com" target="_blank" rel="noopener noreferrer" className="icon-box">
            <img src="/twitter.png" alt="X (Twitter)" style={{ width: '20px', height: '20px' }} />
          </Link>
          <Link to='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='icon-box'>
            <FaInstagram />
          </Link>
        </div>
        <Link to='tel:+919876543210'>
          <button>Call Now</button>
        </Link>
      </div>
    </div>

    {/* Mobile Dropdown */}
    <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
      <ul>
        <li><Link to="/" onClick={() => setMenu("home")}>Home</Link></li>
        <li><Link to="/menu" onClick={() => setMenu("menu")}>Menu</Link></li>
        <li><Link to="/about" onClick={() => setMenu("about")}>About Us</Link></li>
        <li><Link to="/services" onClick={() => setMenu("services")}>Services</Link></li>
        <li><Link to="/contact" onClick={() => setMenu("contact")}>Contact</Link></li>
      </ul>

      <div className="mobile-bottom">
        <div className='social_icon'>
          <Link to='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='icon-box'>
            <FaFacebookF />
          </Link>
          <Link to="https://x.com" target="_blank" rel="noopener noreferrer" className="icon-box">
            <img src="/twitter.png" alt="X (Twitter)" style={{ width: '20px', height: '20px' }} />
          </Link>
          <Link to='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='icon-box'>
            <FaInstagram />
          </Link>
        </div>
        <Link to='tel:+919876543210'>
          <button>Call Now</button>
        </Link>
      </div>
    </div>
  </>
);
};

export default Navbar;
