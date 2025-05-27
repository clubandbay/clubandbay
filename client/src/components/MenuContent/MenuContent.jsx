import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaPizzaSlice, FaHamburger, FaIceCream, FaGlassWhiskey,
  FaFish, FaLeaf, FaStar, FaArrowRight, FaFire, FaSeedling
} from 'react-icons/fa';
import foodApi from '../../assets/data/foodData';

const MenuContent = () => {
  const [activeTab, setActiveTab] = useState('pizza');
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const tabsContainerRef = useRef(null);
  const tabsRef = useRef([]);
  const navigate = useNavigate();

  const menuCategories = [
    { id: 'week1', name: 'WEEK1', icon: <FaPizzaSlice /> },
    { id: 'burgers', name: 'Burgers', icon: <FaHamburger /> },
    { id: 'seafood', name: 'Seafood', icon: <FaFish /> },
    { id: 'desserts', name: 'Desserts', icon: <FaIceCream /> },
    { id: 'drinks', name: 'Drinks', icon: <FaGlassWhiskey /> },
    { id: 'salads', name: 'Salads', icon: <FaLeaf /> }
  ];

  const menuItems = foodApi.getAllItems();

  useEffect(() => {
    const updateUnderlinePosition = () => {
      const activeTabElement = tabsRef.current.find(tab => tab?.dataset?.category === activeTab);
      const container = tabsContainerRef.current;
      
      if (activeTabElement && container) {
        const containerRect = container.getBoundingClientRect();
        const tabRect = activeTabElement.getBoundingClientRect();
        
        // Calculate relative position within the container
        setUnderlineWidth(tabRect.width);
        setUnderlineLeft(tabRect.left - containerRect.left);
      }
    };

    updateUnderlinePosition();
    
    // Add resize and scroll listeners to update position
    window.addEventListener('resize', updateUnderlinePosition);
    window.addEventListener('scroll', updateUnderlinePosition);
    
    return () => {
      window.removeEventListener('resize', updateUnderlinePosition);
      window.removeEventListener('scroll', updateUnderlinePosition);
    };
  }, [activeTab]);

  const handleItemClick = (category, slug) => {
    navigate(`/menu/${category}/${slug}`);
  };

  return (
    <section className="!py-20 bg-white relative overflow-hidden">
      {/* Background floating food icons */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <FaPizzaSlice className="absolute top-1/4 left-1/6 text-[#e7b745] text-4xl opacity-10 animate-float1" />
        <FaHamburger className="absolute top-1/3 right-1/5 text-[#0b3171] text-5xl opacity-10 animate-float2" />
        <FaIceCream className="absolute bottom-1/4 left-1/4 text-[#e7b745] text-6xl opacity-10 animate-float3" />
        <FaGlassWhiskey className="absolute top-2/5 right-1/3 text-[#0b3171] text-4xl opacity-10 animate-float1" />
        <FaFish className="absolute bottom-1/3 right-1/4 text-[#e7b745] text-5xl opacity-10 animate-float2" />
        <FaLeaf className="absolute top-1/2 left-1/3 text-[#0b3171] text-6xl opacity-10 animate-float3" />
      </div>

      <div className="container !mx-auto !px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center !mb-16"
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="hidden sm:block w-14 h-[2px] bg-[#e7b745]"></div>
            <h2 className="text-4xl font-bold text-[#0b3171] !mb-4 font-cursive italic whitespace-nowrap">
              Special Menu
            </h2>
            <div className="hidden sm:block w-14 h-[2px] bg-[#e7b745]"></div>
          </div>
          <p className="text-gray-600 max-w-2xl !mx-auto">
            Carefully crafted dishes made with the finest ingredients
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="relative !mb-16" ref={tabsContainerRef}>
          <div className="flex justify-start border-1 border-[#e7b745] shadow-lg rounded-xl !space-x-1 md:!space-x-6 overflow-x-auto !pb-2 scrollbar-hide !px-4">
            {menuCategories.map((category, index) => (
              <button
                key={category.id}
                ref={el => tabsRef.current[index] = el}
                data-category={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center !px-4 sm:!px-6 !py-3 rounded-full transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeTab === category.id 
                    ? '!text-[#0b3171] !bg-transparent' 
                    : '!text-[#0b3171] !bg-transparent hover:text-[#e7b745] bg-opacity-70 backdrop-blur-sm'
                }`}
              >
                <span className="!mr-2 text-xl">{category.icon}</span>
                <span className="font-medium text-sm sm:text-base">{category.name}</span>
              </button>
            ))}
          </div>
          
          <motion.div
            className="absolute bottom-0 h-1 bg-[#e7b745] rounded-full shadow-lg"
            initial={false}
            animate={{
              width: underlineWidth,
              left: underlineLeft,
              transition: { type: 'spring', stiffness: 300, damping: 25 }
            }}
            style={{
              // Ensure the underline stays within the container
              minWidth: '50px', // Minimum width for small tabs
              maxWidth: '150px' // Maximum width for large tabs
            }}
          />
        </div>

        {/* Menu Items - Circular Design */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {menuItems[activeTab]?.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(11, 49, 113, 0.1), 0 10px 10px -5px rgba(11, 49, 113, 0.04)"
                }}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer bg-gradient-to-br from-[#f9f9f9] to-white"
              >
                {/* Price Tag - Top Right Corner */}
                <div className="absolute top-4 right-4 bg-[#0b3171] text-white !px-3 !py-1 rounded-full font-bold z-20 shadow-md">
                  ${item.price.toFixed(2)}
                </div>

                {/* Animated Design - Top Left Corner */}
                <motion.div 
                  className="absolute top-4 left-4 z-20"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                >
                  {item.category === 'salads' ? (
                    <FaSeedling className="text-green-500 text-2xl" />
                  ) : (
                    <FaFire className="text-[#e7b745] text-2xl" />
                  )}
                </motion.div>

                {/* Background Animation for Image */}
                <motion.div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-[#0b3171] to-[#e7b745] opacity-10 blur-xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                />

                {/* Circular Image */}
                <div className="flex justify-center !mt-16 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-40 h-40 rounded-full border-8 border-white shadow-xl overflow-hidden group-hover:border-[#e7b745] transition-colors duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Ratings Below Image */}
                <div className="flex justify-center items-center !mt-4 !mb-2">
                  <div className="flex items-center bg-[#0b3171] !px-3 !py-1 rounded-full text-white">
                    <FaStar className="!mr-1 text-[#e7b745]" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="!p-6 !pt-4 text-center">
                  <h3 className="text-2xl font-bold text-[#0b3171] !mb-2">{item.name}</h3>
                  
                  <p className="text-gray-600 !mb-6">{item.description}</p>

                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#0b3171"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleItemClick(activeTab, item.slug)}
                    className="!bg-[#0b3171] text-white !p-3 !rounded-full font-bold hover:!bg-blue-600 transition-colors duration-300"
                  >
                     <FaArrowRight className="text-xl text-[#e7b745]" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuContent;