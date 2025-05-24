import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import OfferBG from '../../assets/offerbg.jpg'
import Burger from '../../assets/burgerbg.png'
import Food2 from '../../assets/food_2.png'
import Food3 from '../../assets/food_3.png'
import Food4 from '../../assets/food_4.png'

const HomeOffer = () => {
  const offers = [
    {
      title: 'Pizza Power Hour',
      image: Food3,
      description: 'Large pizza for the price of a medium - today only!',
      buttonText: 'View more',
      buttonLink: '/pizza',
    },
    {
      title: 'Coffee Lovers',
      image: Food2,
      description: 'Buy one get one free on all coffee beverages.',
      buttonText: 'View more',
      buttonLink: '/coffee',
    },
    {
      title: 'Burger Bonanza',
      image: Food4,
      description: 'Get 20% off on all burgers this weekend!',
      buttonText: 'View more',
      buttonLink: '/burgers',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 3000);
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
          Carefully crafted dishes made with the finest ingredients
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 justify-center">
        {/* Left Side - Fixed Offer */}
        <div className={`w-full lg:flex-1 lg:min-w-[350px] lg:max-w-[500px] h-[400px] md:h-[500px] text-white rounded-2xl shadow-xl !p-6 sm:!p-8 md:!p-10 flex flex-col sm:flex-row items-center`}
        style={{backgroundImage: `url(${OfferBG})`}}>
          {/* Offer Content */}
          <div className="flex-1 !pr-0 sm:!pr-4 md:!pr-6 text-center sm:text-left">
            <h4 className="text-sm sm:text-base md:text-lg italic text-[#e7b745] !mb-2 sm:!mb-3">
              today's best deal
            </h4>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black !mb-2 sm:!mb-3">
              TODAY <br />
              <span className="text-[#e7b745]">SPECIAL</span>
            </h3>
            <p className="text-xl sm:text-2xl font-semibold !mb-4 sm:!mb-6 md:!mb-8">
              CHEESE<span className="text-[#e7b745] font-bold"> BURGER</span>
            </p>
            <button className="bg-green-500 text-white font-bold !py-3 sm:!py-4 !px-6 sm:!px-8 rounded-xl hover:bg-green-700 transition-colors duration-300 text-base sm:text-lg">
              View More
            </button>
          </div>
          {/* Offer Image Section */}
          <div className="text-center mt-4 sm:mt-0 relative sm:-left-4 md:-left-6">
            <img
              src={Burger}
              alt="Cheese Burger"
              className="w-40 sm:w-48 md:w-64 h-auto rounded-xl"
            />
            <p className="text-[#e7b745] font-bold text-xl sm:text-2xl !mt-2 sm:!mt-3">$59.00</p>
          </div>
        </div>

        {/* Right Side - Rotating Offer */}
        <div className="w-full lg:flex-1 lg:min-w-[350px] lg:max-w-[700px] h-[400px] md:h-[500px] bg-black text-white rounded-2xl !p-6 sm:!p-8 md:!p-10 flex flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 relative overflow-hidden"
        style={{backgroundImage: `url(${OfferBG})`}}>
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
                  CRISPY, EVERY BITE TASTE
                </h4>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold !mb-1 sm:!mb-2 leading-tight uppercase">
                  {offers[currentIndex].title}
                </h3>
                <div className="bg-[#e7b745] text-black font-bold !py-1 !px-2 sm:!px-3 rounded-full text-xs sm:text-sm inline-block !mb-3 sm:!mb-4 md:!mb-5">
                  50% OFF
                </div>
                <p className="text-gray-300 text-sm sm:text-base !mb-4 sm:!mb-5 md:!mb-6">
                  {offers[currentIndex].description}
                </p>
                <button
                  className="bg-green-500 text-white font-bold !py-3 sm:!py-4 !px-6 sm:!px-8 !mx-auto rounded-xl hover:bg-green-700 transition-colors duration-300 flex items-center gap-2 sm:gap-3 text-base sm:text-lg sm:!mx-0"
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