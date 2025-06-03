import React from 'react';
import { motion } from 'framer-motion';
import { FaHamburger, FaStar, FaUtensils, FaGlassWhiskey, FaLeaf } from 'react-icons/fa';
import { GiChickenLeg, GiMeal } from 'react-icons/gi';
import Food2 from '../../assets/man-eating-2.jpeg';

const HomeBanner = () => {
  // Animation variants
  const floatVariants = {
    float: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const bounceVariants = {
    bounce: {
      y: [0, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };

  const scaleVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="w-full bg-white !py-16 !px-4 md:!px-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
      {/* Floating food icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/6 text-[#e7b745] text-5xl opacity-20"
        >
          <FaHamburger />
        </motion.div>
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/6 text-[#0b3171] text-6xl opacity-20"
        >
          <FaUtensils />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/3 text-[#e7b745] text-4xl opacity-15"
        >
          <GiChickenLeg />
        </motion.div>
      </div>

      {/* Burger Image with Tags */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <motion.div
          variants={scaleVariants}
          animate="pulse"
          className="relative"
        >
          <img
            src={Food2}
            alt="Premium Burger"
            className="w-80 md:w-[28rem] lg:w-[32rem] object-contain drop-shadow-2xl"
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="absolute top-8 left-4 md:left-12 text-[#e7b745] font-black text-4xl md:text-5xl rotate-[-15deg] bg-white/80 !px-4 !py-2 rounded-xl shadow-lg"
          >
            FRESH MEALS
          </motion.div>

          <motion.div
            variants={bounceVariants}
            animate="bounce"
            className="absolute bottom-12 left-8 bg-[#0b3171] text-white font-bold !px-5 !py-2 rounded-full shadow-xl text-lg rotate-[-12deg]"
          >
            SEE OUR Subscriptions
          </motion.div>

          <motion.div
            variants={floatVariants}
            animate="float"
            className="absolute bottom-4 right-4 bg-[#e7b745] text-[#0b3171] font-extrabold !px-6 !py-3 rounded-full shadow-2xl text-2xl"
          >
            100% Healty Food
          </motion.div>
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left !px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="!mb-8"
        >
          <h4 className="text-[#e7b745] font-bold uppercase tracking-widest !mb-4 text-lg">
            ABOUT OUR FOOD
          </h4>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight !mb-6">
            WHERE <span className="text-[#0b3171]">QUALITY</span> MEETS <br />
            <span className="text-[#e7b745]">EXCELLENCE</span>
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed !mb-8 max-w-2xl !mx-auto lg:mx-0">
            Experience culinary perfection where every dish is crafted with the freshest,
            highest-quality ingredients. Our lightning-fast service ensures your meal arrives
            hot and delicious, every single time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 !mb-10"
        >
          <div className="flex items-start gap-4">
            <div className="bg-[#0b3171] text-[#e7b745] !p-3 rounded-full">
              <FaHamburger className="text-2xl" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#0b3171] !mb-2">SUPER QUALITY FOOD</h3>
              <p className="text-gray-600">
                Our chefs use only premium ingredients to create unforgettable flavors
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#0b3171] text-[#e7b745] !p-3 rounded-full">
              <FaStar className="text-2xl" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#0b3171] !mb-2">AWARD-WINNING SERVICE</h3>
              <p className="text-gray-600">
                Recognized for excellence in hospitality and customer satisfaction
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block !mb-8"
        >
          <button className="bg-gradient-to-r from-[#0b3171] to-[#e7b745] hover:from-[#e7b745] hover:to-[#0b3171] text-white !px-10 !py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            DISCOVER OUR STORY
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t-2 border-[#e7b745] border-opacity-30 !pt-6 max-w-md !mx-auto lg:mx-0"
        >
          <p className="font-bold text-lg text-[#0b3171]">
            "CUSTOMER SATISFACTION IS OUR HIGHEST PRIORITY."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBanner;