import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGem, FaCrown, FaStar, FaFire, FaHandSparkles,
  FaArrowRight, FaHeart
} from 'react-icons/fa';
import subscriptionImg1 from '../../assets/aboutwel2.jpg';
import subscriptionImg2 from '../../assets/food_2.png';
import HomeSubBG from '../../assets/homesubbg.jpg';
import { useNavigate } from 'react-router-dom';

const HomeSubscription = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const navigate = useNavigate();

  const subscriptionPlans = [
    {
      id: 1,
      name: "Club Crystal",
      days: "2 days/week",
      totalPrice: 376,
      color: "from-blue-400 to-cyan-400",
      icon: <FaGem className='text-[#e7b745]' />,
    },
    {
      id: 2,
      name: "Club Pearl",
      days: "3 days/week",
      totalPrice: 564,
      color: "from-purple-400 to-pink-400",
      icon: <FaStar className='text-[#e7b745]' />,
    },
    {
      id: 3,
      name: "Club Ruby",
      days: "5 days/week",
      totalPrice: 1045,
      color: "from-red-400 to-orange-400",
      icon: <FaFire className='text-[#e7b745]' />,
    },
    {
      id: 4,
      name: "Club Emerald",
      days: "6 days/week",
      totalPrice: 1443,
      color: "from-green-400 to-emerald-400",
      icon: <FaHandSparkles className='text-[#e7b745]' />,
    },
    {
      id: 5,
      name: "Club Diamond",
      days: "6 days/week",
      totalPrice: 1569,
      color: "from-violet-400 to-purple-600",
      icon: <FaCrown className='text-[#e7b745]' />,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    },
    hover: {
      scale: 1.02,
      x: 5,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden !py-12 !px-4"
      style={{ backgroundImage: `url(${HomeSubBG})` }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-10 -right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-violet-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container !mx-auto relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center !mb-12"
        >
          <div className="flex items-center justify-center gap-4 !mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FaGem className="text-4xl text-cyan-400" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-[#e7b745] bg-clip-text text-transparent">
              Club & Bay
            </h1>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FaCrown className="text-4xl text-yellow-400" />
            </motion.div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white !mb-4">
            Premium Subscription Plans
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl !mx-auto">
            Choose your perfect plan and unlock exclusive dining experiences
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          {/* Left Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={subscriptionImg1}
                alt="Premium dining experience"
                className="w-full h-auto rounded-2xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent !p-6"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Exclusive Member Benefits
                </h3>
                <p className="text-gray-300">
                  Priority reservations, special events, and more
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 w-1/3 h-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
            >
              <img
                src={subscriptionImg2}
                alt="Club member enjoying benefits"
                className="w-full h-auto rounded-xl"
              />
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-2 right-2 bg-yellow-400 text-black !px-2 !py-1 rounded-full text-xs font-bold"
              >
                VIP
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Subscription Table */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-black/30 backdrop-blur-xl rounded-3xl !p-6 border border-white/10 shadow-2xl">
              {/* Table */}
              <div className="overflow-hidden rounded-2xl">
                {/* Table Header */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm !px-6 !py-4 border-b border-white/10"
                >
                  <div className="grid grid-cols-3 gap-4 text-white font-bold text-base md:text-lg">
                    <div className="flex items-center gap-2">
                      <FaHeart className="text-[#e7b745]" />
                      <span>Plan Name</span>
                    </div>
                    <div className="text-center">Days/Week</div>
                    <div className="text-right">Total Price</div>
                  </div>
                </motion.div>

                {/* Table Body */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="!divide-y !divide-white/5"
                >
                  {subscriptionPlans.map((plan) => (
                    <motion.div
                      key={plan.id}
                      variants={rowVariants}
                      whileHover="hover"
                      onHoverStart={() => setHoveredRow(plan.id)}
                      onHoverEnd={() => setHoveredRow(null)}
                      className={`!px-6 !py-4 transition-all duration-300 ${hoveredRow === plan.id
                          ? 'bg-gradient-to-r from-white/5 to-white/10'
                          : 'hover:bg-white/5'
                        }`}
                    >
                      <div className="grid grid-cols-3 gap-4">
                        {/* Plan Name */}
                        <div className="flex items-center gap-3">
                          <motion.div
                            animate={hoveredRow === plan.id ? { rotate: 360, scale: 1.2 } : { scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className={`text-xl md:text-2xl bg-gradient-to-r ${plan.color} bg-clip-text text-transparent hidden sm:block`}
                          >
                            {plan.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-base md:text-lg font-bold text-white">{plan.name}</h3>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: hoveredRow === plan.id ? '100%' : '0%' }}
                              transition={{ duration: 0.3 }}
                              className={`h-0.5 bg-gradient-to-r ${plan.color} !mt-1`}
                            />
                          </div>
                        </div>

                        {/* Days */}
                        <div className="text-center">
                          <span className="text-sm md:text-base text-gray-300 font-medium">{plan.days}</span>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <motion.div
                            animate={hoveredRow === plan.id ? { scale: 1.1 } : { scale: 1 }}
                            className="inline-block"
                          >
                            <div className="text-lg md:text-xl font-bold text-white">₹{plan.totalPrice}</div>
                            <div className="text-xs md:text-sm text-gray-400">with GST</div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Single Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-center !mt-6"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-bold !py-3 md:!py-4 !px-8 md:!px-12 rounded-xl md:rounded-2xl text-base md:text-lg shadow-lg transition-all duration-300 flex items-center gap-2 md:gap-3 !mx-auto"
                  onClick={() => {
                    navigate('/services');
                  }}
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    View All Subscriptions
                  </motion.span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>

            {/* Important Message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-2xl !p-4 md:!p-6 !mt-6 text-center"
            >
              <div className="flex items-center justify-center gap-2 md:gap-3 !mb-2 md:!mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaFire className="text-xl md:text-2xl text-orange-400" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-white">Special Offer!</h3>
              </div>
              <p className="text-sm md:text-base text-gray-300">
                Prices exclusive of GST – 5% additional applicable.
                <span className="text-yellow-400 font-semibold"> Limited time offer!</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSubscription;