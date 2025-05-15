import React, { useEffect, useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id, offset = 80) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const goToHomeAndScroll = (target) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      // Wait for the homepage to load and then scroll
      setTimeout(() => {
        if (target === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          scrollToSection(target);
        }
      }, 100); // Small delay to wait for navigation
    } else {
      if (target === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scrollToSection(target);
      }
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        const homeSection = document.getElementById('home');
        const menuSection = document.getElementById('menu');

        if (homeSection && menuSection) {
          const homeTop = homeSection.offsetTop;
          const menuTop = menuSection.offsetTop;

          if (scrollPosition >= menuTop) {
            setMenu('menu');
          } else {
            setMenu('home');
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      const path = location.pathname;
      if (path.includes('about')) setMenu('about');
      else if (path.includes('services')) setMenu('services');
      else if (path.includes('contact')) setMenu('contact');
    }
  }, [location]);

  return (
    <div className='navbar'>
      <img src={assets.logo} alt='Logo' className='logo' />

      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>
          <a
            href="/#home"
            onClick={(e) => {
              e.preventDefault();
              setMenu("home");
              goToHomeAndScroll("top");
            }}
          >
            Home
          </a>
        </li>
        <li className={menu === "menu" ? "active" : ""}>
          <a
            href="/#menu"
            onClick={(e) => {
              e.preventDefault();
              setMenu("menu");
              goToHomeAndScroll("menu");
            }}
          >
            Menu
          </a>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <Link to="/about" onClick={() => setMenu('about')}>About Us</Link>
        </li>
        <li className={menu === "services" ? "active" : ""}>
          <Link to="/services" onClick={() => setMenu('services')}>Services</Link>
        </li>
        <li className={menu === "contact" ? "active" : ""}>
          <Link to="/contact" onClick={() => setMenu('contact')}>Contact</Link>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt='Search' />
        <Link to='tel:+919876543210'>
          <button>Call Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;