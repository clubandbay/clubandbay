import React from "react";
import { FaTags, FaArrowRight } from "react-icons/fa";
import foodImage1 from "../../assets/floatingImg/roll.png";
import foodImage2 from "../../assets/floatingImg/half-moon.png";
import foodImage3 from "../../assets/floatingImg/paneer.png";
import foodImage4 from "../../assets/floatingImg/egg-moon.png";
import {
  FaPizzaSlice, FaHamburger, FaIceCream, FaLeaf, FaUtensils
} from 'react-icons/fa';
import { GiChickenLeg } from 'react-icons/gi';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MenuOffer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    float: {
      y: [0, -15, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const bounceVariants = {
    bounce: {
      y: [0, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };

  const offers = [
    {
      icon: <GiChickenLeg className="text-[#e7b745] text-xl" />,
      text: "No preservatives, no shortcuts—just clean, honest food from our kitchen to your desk.",
      bg: "bg-blue-200"
    },
    {
      icon: <FaPizzaSlice className="text-[#e7b745] text-xl" />,
      text: "From grains to greens, we use ingredients that are as close to nature as possible.",
      bg: "bg-blue-300"
    },
    {
      icon: <FaUtensils className="text-[#e7b745] text-xl" />,
      text: "Our meals are protein-rich, fiber-filled, and portioned perfectly to keep you fueled and focused all day.",
      bg: "bg-blue-400"
    }
  ];

  const images = [
    { src: foodImage1, alt: "Healthy Meal 1" },
    { src: foodImage2, alt: "Healthy Meal 2" },
    { src: foodImage3, alt: "Healthy Meal 3" },
    { src: foodImage4, alt: "Healthy Meal 4" }
  ];

  return (
    <section className="section_bg w-full relative !py-16 !px-4 sm:!px-6 md:!px-8 lg:!px-16 overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-600 opacity-10"
            style={{
              fontSize: `${Math.random() * 2 + 2}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[FaPizzaSlice, FaHamburger, FaIceCream, FaLeaf, FaUtensils, GiChickenLeg][i % 6]}
          </motion.div>
        ))}
      </div>

      {/* Glow Effects */}
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#e7b745] rounded-full filter blur-[80px] sm:blur-[100px] opacity-10"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#e7b745] rounded-full filter blur-[80px] sm:blur-[100px] opacity-10"></div>

      <div className="max-w-7xl !mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12"
        >
          {/* Left Side Content */}
          <div className="flex-1 order-2 lg:order-1">
            <motion.div variants={itemVariants} className="flex items-center gap-3 !mb-4 sm:!mb-6">
              <div className="w-2 h-8 sm:h-10 bg-[#e7b745] rounded-full"></div>
              <p className="text-[#e7b745] font-bold uppercase tracking-widest text-xs sm:text-sm">
                Wholesome Bites, Delivered Right.
              </p>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white !mb-4 sm:!mb-6 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e7b745] to-[#f8d373]">
                Healthy Starts Subscription – Pure Food, Pure Energy
              </span> <br />
              At Unbeatable Prices!
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-base sm:text-lg md:text-xl !mb-6 sm:!mb-8 max-w-2xl"
            >
              Kickstart your workday with our carefully crafted subscription meals—made with natural ingredients, organic produce, and zero compromise on health. Designed for professionals who care about what they eat, our food nourishes your body while fitting perfectly into your busy routine. Get home-style nutrition, without the prep.
            </motion.p>

            {/* Offer Tags */}
            <motion.div variants={containerVariants} className="!space-y-3 sm:!space-y-4 !mb-6 sm:!mb-8">
              {offers.map((offer, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`${offer.bg} rounded-full !px-4 sm:!px-6 !py-2 sm:!py-3 shadow-lg w-full max-w-md flex items-center gap-3 sm:gap-4`}
                >
                  <div className="bg-white bg-opacity-30 !p-2 rounded-full">
                    {offer.icon}
                  </div>
                  <span className="text-[#0b3171] font-semibold text-sm sm:text-base md:text-md">
                    {offer.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link to='/services'>
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#e7b745] to-[#f8d373] text-[#0b3171] font-bold !px-6 sm:!px-8 !py-3 sm:!py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center">
                  <span className="relative z-10 flex items-center">
                    View All Subscription <FaArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Side Images */}
          <motion.div
            variants={itemVariants}
            className="flex-1 order-1 lg:order-2 w-full max-w-lg lg:max-w-none"
          >
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8"
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  variants={floatVariants}
                  animate="float"
                  className="relative"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-contain drop-shadow-[0_15px_15px_rgba(231,183,69,0.3)] rounded-lg"
                  />
                  {index === 0 && (
                    <motion.div
                      variants={bounceVariants}
                      animate="bounce"
                      className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-[#e7b745] text-white !px-3 sm:!px-5 !py-2 sm:!py-3 rounded-full flex items-center gap-2 sm:gap-3 shadow-xl font-bold text-xs sm:text-sm"
                    >
                      <FaTags className="text-base sm:text-xl" />
                      <span>Start With ₹376</span>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-24 sm:w-32 h-24 sm:h-32 border-4 border-[#e7b745] border-opacity-30 rounded-full"></div>
            <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-16 sm:w-20 h-16 sm:h-20 border-2 border-[#e7b745] border-opacity-20 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuOffer;