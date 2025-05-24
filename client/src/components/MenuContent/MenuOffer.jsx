import React from "react";
import { FaTags, FaArrowRight } from "react-icons/fa";
import foodImage from "../../assets/offerfood.png";
import {
  FaPizzaSlice, FaHamburger, FaIceCream, FaLeaf, FaUtensils
} from 'react-icons/fa';
import { GiChickenLeg } from 'react-icons/gi';
import { motion } from "framer-motion";

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
      text: "30% off with in 4pcs crispy wings",
      bg: "bg-blue-200"
    },
    {
      icon: <FaPizzaSlice className="text-[#e7b745] text-xl" />,
      text: "40% off in large pizza within $99",
      bg: "bg-blue-300"
    },
    {
      icon: <FaUtensils className="text-[#e7b745] text-xl" />,
      text: "30% off in family meal with $149 – limited time!",
      bg: "bg-blue-400"
    }
  ];

  return (
    <section className="section_bg w-full relative bg-gradient-to-br from-[#0b3171] to-[#0a2458] !py-16 !px-4 md:!px-8 lg:!px-16 overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-600 opacity-10"
            style={{
              fontSize: `${Math.random() * 3 + 3}rem`,
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
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#e7b745] rounded-full filter blur-[100px] opacity-10"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#e7b745] rounded-full filter blur-[100px] opacity-10"></div>

      <div className="max-w-7xl !mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Left Side Content */}
          <div className="flex-1 order-2 lg:order-1">
            <motion.div variants={itemVariants} className="flex items-center gap-3 !mb-6">
              <div className="w-2 h-10 bg-[#e7b745] rounded-full"></div>
              <p className="text-[#e7b745] font-bold uppercase tracking-widest text-sm">
                Limited Time Offer
              </p>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white !mb-6 leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e7b745] to-[#f8d373]">
                Gourmet Feast
              </span> <br />
              At Unbeatable Prices!
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-lg md:text-xl !mb-8 max-w-2xl"
            >
              Indulge in our chef's special creations with exclusive discounts. 
              Perfect for any occasion - order now before this deal melts away!
            </motion.p>

            {/* Offer Tags */}
            <motion.div variants={containerVariants} className="!space-y-4 !mb-8">
              {offers.map((offer, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`${offer.bg} rounded-full !px-6 !py-3 shadow-lg w-full max-w-md flex items-center gap-4`}
                >
                  <div className="bg-white bg-opacity-30 !p-2 rounded-full">
                    {offer.icon}
                  </div>
                  <span className="text-[#0b3171] font-bold text-base md:text-lg">
                    {offer.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#e7b745] to-[#f8d373] text-[#0b3171] font-bold !px-8 !py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center">
                <span className="relative z-10 flex items-center">
                  Claim Your Offer <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </button>
            </motion.div>
          </div>

          {/* Right Side Image */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 relative order-1 lg:order-2 w-full max-w-lg lg:max-w-none"
          >
            <motion.div
              variants={floatVariants}
              animate="float"
              className="relative"
            >
              <img
                src={foodImage}
                alt="Special Food Offer"
                className="w-full h-auto object-contain drop-shadow-[0_25px_25px_rgba(231,183,69,0.3)]"
              />
              
              {/* Floating Price Tag */}
              <motion.div
                variants={bounceVariants}
                animate="bounce"
                className="absolute -top-6 -left-6 bg-[#e7b745] text-white !px-5 !py-3 rounded-full flex items-center gap-3 shadow-xl font-bold"
              >
                <FaTags className="text-xl" />
                <span>Only $9.99</span>
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-[#e7b745] border-opacity-30 rounded-full"></div>
              <div className="absolute -top-8 -right-8 w-20 h-20 border-2 border-[#e7b745] border-opacity-20 rounded-full"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuOffer;