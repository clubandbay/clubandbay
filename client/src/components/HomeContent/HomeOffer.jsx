import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import OfferBG from '../../assets/offerbg.jpg'
import Burger from '../../assets/club-ruby.png'
import { Link } from 'react-router-dom';

import FoodImg1 from '../../assets/Menu/week1/classic-fold.png'
import FoodImg2 from '../../assets/Menu/Week3/red-pepper-omelette.png'
import FoodImg3 from '../../assets/Menu/week2/egg-burgar.png'

const HomeOffer = () => {
  const offers = [
    {
      title: 'Classic Folded Omelette (Semi-Moon)',
      image: FoodImg1,
      description: 'The timeless style — soft inside, crisp edges. Great for adding fillings like Onions, mint, etc.',
      buttonText: 'View more',
      buttonLink: 'menu/week1/classic-folded-omelette',
    },
    {
      title: 'Red Pepper Omelette',
      image: FoodImg2,
      description: 'Bell pepper, cherry tomato, cheese',
      buttonText: 'View more',
      buttonLink: 'menu/week3/red-pepper-omelette',
    },
    {
      title: 'Omelette Burger',
      image: FoodImg3,
      description: 'Egg patty sandwiched between whole grain buns or multigrain toast.',
      buttonText: 'View more',
      buttonLink: 'menu/week2/omelette-burger',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [offers.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
  };

  const handleRadioClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    initial: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      position: 'absolute',
      width: '100%'
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1]
      },
      position: 'relative'
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1]
      },
      position: 'absolute'
    }),
  };

  return (
    <section className="w-full !mx-auto !my-8 md:!my-16 !px-4 sm:!px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center !mb-16"
      >
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="hidden sm:block w-14 h-[2px] bg-[#e7b745]"></div>
          <h2 className="text-4xl font-bold text-[#e7b745] !mb-4 font-cursive italic whitespace-nowrap">
            Hot Deals
          </h2>
          <div className="hidden sm:block w-14 h-[2px] bg-[#e7b745]"></div>
        </div>
        <p className="text-gray-900 max-w-2xl !mx-auto">
          Check our most popular subscription made with fresh ingredients
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 justify-center">
        {/* Left Side - Fixed Offer */}
        <div className={`w-full lg:flex-1 lg:min-w-[350px] lg:max-w-[500px] h-[400px] md:h-[500px] text-white rounded-2xl shadow-xl !p-6 sm:!p-8 md:!p-10 flex flex-col sm:flex-row items-center`}
          style={{ backgroundImage: `url(${OfferBG})` }}>
          {/* Offer Content */}
          <div className="flex-1 !pr-0 sm:!pr-4 md:!pr-6 text-center sm:text-left">
            <h4 className="text-sm sm:text-base md:text-lg italic text-[#e7b745] !mb-2 sm:!mb-3">
              💎 Club Ruby
            </h4>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black !mb-2 sm:!mb-3">
              Most Popular <br />
              <span className="text-[#e7b745]">Subscription</span>
            </h3>
            <p className="text-lg sm:text-xl font-semibold !mb-4 sm:!mb-6 md:!mb-8">
              Fuel Your Week,  <span className="text-[#e7b745] font-bold">the Smart Way!</span>
            </p>
            <Link to='/services'>
              <motion.button
                className="!px-4 !py-2 md:!px-4 md:!py-2 !rounded-full !bg-transparent !border-2 !border-[#e7b745] !text-[#e7b745] hover:!bg-[#0b3171] font-semibold md:font-bold text-md md:text-xl flex items-center shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                View All Subs..
              </motion.button>
            </Link>
          </div>
          {/* Offer Image Section */}
          <div className="text-center mt-4 sm:mt-0 relative sm:-left-4 md:-left-6">
            <img
              src={Burger}
              alt="Cheese Burger"
              className="w-40 sm:w-48 md:w-64 h-auto rounded-xl"
            />
            <p className="text-[#e7b745] font-bold text-xl sm:text-2xl !mt-2 sm:!mt-3">Start With - ₹1045</p>
          </div>
        </div>

        {/* Right Side - Rotating Offer */}
        <div className="w-full lg:flex-1 lg:min-w-[350px] lg:max-w-[700px] h-[400px] md:h-[500px] bg-black text-white rounded-2xl !p-6 sm:!p-8 md:!p-10 flex flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 relative overflow-hidden"
          style={{ backgroundImage: `url(${OfferBG})` }}>
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 !bg-black opacity-20 hover:opacity-60 !text-white !text-4xl sm:text-3xl hover:!text-[#e7b745] transition-all duration-300 z-10"
            aria-label="Previous offer"
          >
            <MdKeyboardArrowLeft className='text-bold' />
          </button>

          {/* Content */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 w-full h-full"
            >
              {/* Text Content */}
              <div className="flex-1 order-2 sm:order-1 text-center sm:text-left">
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#e7b745] uppercase !mb-2 sm:!mb-3">
                  Our Popular & Healthy Meals
                </h4>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold !mb-1 sm:!mb-2 leading-tight uppercase">
                  {offers[currentIndex].title}
                </h3>
                <div className="bg-[#e7b745] text-black font-bold !py-1 !px-2 sm:!px-3 rounded-full text-xs sm:text-sm inline-block !mb-3 sm:!mb-4 md:!mb-5">
                  Popular Meals
                </div>
                <p className="text-gray-300 text-sm sm:text-base !mb-4 sm:!mb-5 md:!mb-6">
                  {offers[currentIndex].description}
                </p>
                <button
                  className="!px-4 !py-2 md:!px-4 md:!py-2 !rounded-full !bg-transparent !border-2 !border-[#e7b745] !text-[#e7b745] hover:!bg-[#0b3171] font-semibold md:font-bold text-md md:text-xl flex items-center shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => (window.location.href = offers[currentIndex].buttonLink)}
                >
                  {offers[currentIndex].buttonText}
                </button>
              </div>
              {/* Rotating Image */}
              <div className="order-1 sm:order-2">
                <img
                  src={offers[currentIndex].image}
                  alt={offers[currentIndex].title}
                  className="w-32 sm:w-40 md:w-64 h-auto rounded-xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 !bg-black opacity-20 hover:opacity-60 !text-white !text-4xl sm:text-3xl hover:!text-[#e7b745] transition-all duration-300 z-10"
            aria-label="Next offer"
          >
            <MdKeyboardArrowRight />
          </button>

          {/* Radio Buttons */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => handleRadioClick(index)}
                className={`!w-1 !h-1 sm:!w-2 sm:!h-2 !rounded-full transition-all duration-300 ${currentIndex === index
                  ? '!bg-[#e7b745] scale-125'
                  : '!bg-gray-500 hover:!bg-gray-400'
                  }`}
                aria-label={`Go to offer ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOffer;