import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Sync menu state with current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setMenu("home");
    else if (path.includes("menu")) setMenu("menu");
    else if (path.includes("about")) setMenu("about");
    else if (path.includes("services")) setMenu("services");
    else if (path.includes("contact")) setMenu("contact");
    setIsMobileMenuOpen(false); // Close menu on route change
  }, [location]);

  // Disable/enable body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [isMobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { y: '-100%', opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 z-[1000] flex justify-between items-center !px-4 sm:!px-8 !py-4 bg-[#0b3171] shadow-md">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="w-[100px] sm:w-[130px] object-contain" />

        {/* Hamburger Icon */}
        <div
          className="text-[#e7b745] text-2xl cursor-pointer md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex list-none gap-5 text-white text-lg font-medium !ml-8">
          {['home', 'menu', 'about', 'services', 'contact'].map((item) => (
            <li
              key={item}
              className={`relative ${menu === item ? 'active' : ''}`}
            >
              <Link
                to={item === 'home' ? '/' : `/${item}`}
                onClick={() => setMenu(item)}
                className="text-inherit no-underline inline-block !py-1 !px-2 hover:text-[#e7b745] transition-colors duration-300"
              >
                {item === 'services' ? 'Subscriptions' : item === 'about' ? 'About Us' : item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#e7b745] transition-all duration-300 ${
                    menu === item ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          {/* Social Icons */}
          <div className="flex gap-3 text-[#e7b745]">
            <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="w-9 h-9 flex justify-center items-center border-2 border-[#e7b745] rounded-md bg-[#0b3171] hover:bg-white hover:text-[#0b3171] transition-colors duration-300 cursor-pointer">
                <FaFacebookF />
              </div>
            </Link>
            <Link to="https://x.com" target="_blank" rel="noopener noreferrer">
              <div className="w-9 h-9 flex justify-center items-center border-2 border-[#e7b745] rounded-md bg-[#0b3171] hover:bg-white hover:text-[#0b3171] transition-colors duration-300 cursor-pointer">
                <img src="/twitter.png" alt="X (Twitter)" className="w-5 h-5" />
              </div>
            </Link>
            <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="w-9 h-9 flex justify-center items-center border-2 border-[#e7b745] rounded-md bg-[#0b3171] hover:bg-white hover:text-[#0b3171] transition-colors duration-300 cursor-pointer">
                <FaInstagram />
              </div>
            </Link>
          </div>
          {/* Call Now Button */}
          <Link to="tel:+919876543210">
            <button className="bg-transparent text-[#e7b745] text-base border-2 border-[#e7b745] !px-6 !py-2 rounded-full hover:bg-white hover:text-[#0b3171] hover:shadow-lg transition-all duration-300">
              Call Now
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu with Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[998] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              ref={menuRef}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-15 left-0 w-full bg-[#0b3171] z-[999] !py-10 shadow-lg flex flex-col items-center md:hidden"
            >
              <ul className="list-none !p-0 !m-0 w-full">
                {['home', 'menu', 'about', 'services', 'contact'].map((item) => (
                  <li
                    key={item}
                    className="text-center !py-3 text-lg text-white hover:bg-[#1a3c87] transition-colors duration-300 "
                  >
                    <Link
                      to={item === 'home' ? '/' : `/${item}`}
                      onClick={() => setMenu(item)}
                      className="relative inline-block !py-1 !px-4 no-underline text-inherit"
                    >
                      {item === 'services' ? 'Subscriptions' : item === 'about' ? 'About Us' : item.charAt(0).toUpperCase() + item.slice(1)}
                      <span
                        className={`absolute left-0 bottom-0 h-[2px] bg-[#e7b745] transition-all duration-300 ${
                          menu === item ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="!mt-6 flex flex-col items-center gap-4">
                {/* Social Icons */}
                <div className="flex gap-3 text-[#e7b745]">
                  <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <div className="w-9 h-9 flex justify-center items-center border-2 border-[#e7b745] rounded-md bg-[#0b3171] hover:bg-white hover:text-[#0b3171] transition-colors duration-300 cursor-pointer">
                      <FaFacebookF />
                    </div>
                  </Link>
                  <Link to="https://x.com" target="_blank" rel="noopener noreferrer">
                    <div className="w-9 h-9 flex justify-center items-center border-2 border-[#e7b745] rounded-md bg-[#0b3171] hover:bg-white hover:text-[#0b3171] transition-colors duration-300 cursor-pointer">
                      <img src="/twitter.png" alt="X (Twitter)" className="w-5 h-5" />
                    </div>
                  </Link>
                  <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <div className="w-9 h-9 flex justify-center items-center border-2 border-[#e7b745] rounded-md bg-[#0b3171] hover:bg-white hover:text-[#0b3171] transition-colors duration-300 cursor-pointer">
                      <FaInstagram />
                    </div>
                  </Link>
                </div>
                {/* Call Now Button */}
                <Link to="tel:+919876543210">
                  <button className="bg-transparent text-[#e7b745] text-base border-2 border-[#e7b745] !px-6 !py-2 rounded-full hover:bg-white hover:text-[#0b3171] hover:shadow-lg transition-all duration-300 ">
                    Call Now
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;