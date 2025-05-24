import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Logo from '../../assets/pnglogo.png'
import { Link } from 'react-router-dom';

const Hero = ({HomeHero, MenuHero, AboutHero}) => {
  const heroContent = HomeHero || MenuHero || AboutHero;
  return (
    // <section className="relative !py-28 md:!py-36 lg:!pb-44 lg:!pt-20 menuhero_bg overflow-hidden">
    <section
      className="relative !py-28 md:!py-36 lg:!pb-44 lg:!pt-20 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroContent.image})`, backgroundAttachment: 'fixed' }} // Replace with your background image path
    >
      {/* Floating Food Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating foods */}
        <motion.div
          initial={{ y: 0, x: -100, rotate: -15 }}
          animate={{ y: [0, -20, 0], x: [-100, -80, -100] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 text-[#0b3171] opacity-70"
        >
          <img src={heroContent.HF1} className='w-40 h-40' alt="Food" />
        </motion.div>

        <motion.div
          initial={{ y: 0, x: 100, rotate: 15 }}
          animate={{ y: [0, 20, 0], x: [100, 120, 100] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/6 md:top-1/3 right-10 text-[#0b3171] opacity-70"
        >
          <img src={heroContent.HF2} className='w-72 h-72' alt="Food" />
        </motion.div>

        {/* Medium floating foods */}
        <motion.div
          initial={{ y: 50, x: -50, rotate: -10 }}
          animate={{ y: [50, 30, 50], x: [-50, -70, -50] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-20 text-[#0b3171] opacity-70"
        >
          <img src={heroContent.HF3} className='w-52 h-52 hidden md:block' alt="Food" />
        </motion.div>

        {/* Small floating foods */}
        <motion.div
          initial={{ y: 100, x: -30, rotate: -5 }}
          animate={{ y: [100, 80, 100], x: [-30, -50, -30] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 md:top-1/4 md:left-1/4 text-[#0b3171] opacity-70"
        >
          <img src={heroContent.HF4} className='w-52 h-52' alt="Food" />
        </motion.div>

        <motion.div
          initial={{ y: 100, x: 30, rotate: 5 }}
          animate={{ y: [100, 120, 100], x: [30, 50, 30] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 text-[#0b3171] opacity-70"
        >
          <img src={heroContent.HF5} className='w-52 h-52 hidden md:block' alt="Food" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container !mx-auto !px-4 relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center !mb-8 md:!mb-12"
        >
          <div className="w-32 h-28">
            <img src={Logo} alt="Club & Bay BKC" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#e7b745] text-center !mb-6"
        >
          {heroContent.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-200 text-center max-w-2xl !mx-auto !mb-10 md:!mb-14"
        >
          {heroContent.description}
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <Link to={heroContent.button.link}>
          <motion.button
            className="!px-4 !py-2 md:!px-8 md:!py-4 !rounded-full !bg-transparent !border-2 !border-[#e7b745] !text-[#e7b745] hover:!bg-[#0b3171] font-semibold md:font-bold text-md md:text-xl flex items-center shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {heroContent.button.text} <FaArrowRight className="!ml-3 hidden md:block" />
          </motion.button>
          </Link>

          <Link to={heroContent.buttonAbout.link}>
          <motion.button
            className="!px-4 !py-2 md:!px-8 md:!py-4 !rounded-full !bg-transparent !border-2 !border-[#e7b745] !text-[#e7b745] hover:!bg-[#0b3171] font-semibold md:font-bold text-md md:text-xl flex items-center shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {heroContent.buttonAbout.text} <FaArrowRight className="!ml-3 hidden md:block" />
          </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24 lg:h-32"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-[#e7b745]"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-[#e7b745]"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-[#e7b745]"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;