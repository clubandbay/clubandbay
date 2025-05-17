import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaPizzaSlice, FaHamburger, FaIceCream, FaGlassWhiskey, 
  FaFish, FaLeaf, FaStar, FaArrowRight 
} from 'react-icons/fa';
import foodApi from '../../assets/data/foodData';

const MenuContent = () => {
  const [activeTab, setActiveTab] = useState('pizza');
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const tabsRef = useRef([]);
  const navigate = useNavigate();

  const menuCategories = [
    { id: 'pizza', name: 'Pizza', icon: <FaPizzaSlice /> },
    { id: 'burgers', name: 'Burgers', icon: <FaHamburger /> },
    { id: 'seafood', name: 'Seafood', icon: <FaFish /> },
    { id: 'desserts', name: 'Desserts', icon: <FaIceCream /> },
    { id: 'drinks', name: 'Drinks', icon: <FaGlassWhiskey /> },
    { id: 'salads', name: 'Salads', icon: <FaLeaf /> }
  ];

  const menuItems = foodApi.getAllItems();

  useEffect(() => {
    const activeTabElement = tabsRef.current.find(tab => tab?.dataset?.category === activeTab);
    if (activeTabElement) {
      setUnderlineWidth(activeTabElement.offsetWidth);
      setUnderlineLeft(activeTabElement.offsetLeft);
    }
  }, [activeTab]);

  const handleItemClick = (category, slug) => {
    navigate(`/menu/${category}/${slug}`);
  };

  return (
    <section className="!py-20 bg-white relative overflow-hidden">
      {/* Animated floating food icons */}
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
          <h2 className="text-4xl font-bold text-[#0b3171] !mb-4 font-cursive">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl !mx-auto">
            Carefully crafted dishes made with the finest ingredients
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="relative !mb-16">
          <div className="flex justify-center !space-x-1 md:!space-x-6 overflow-x-auto !pb-2 scrollbar-hide">
            {menuCategories.map((category, index) => (
              <button
                key={category.id}
                ref={el => tabsRef.current[index] = el}
                data-category={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center !px-6 !py-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeTab === category.id 
                    ? 'text-white bg-[#0b3171] shadow-lg' 
                    : 'text-gray-600 hover:text-[#e7b745] bg-white bg-opacity-70 backdrop-blur-sm'
                }`}
              >
                <span className="!mr-2 text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
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
          />
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {menuItems[activeTab]?.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => handleItemClick(activeTab, item.slug)}
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#e7b745] text-[#0b3171] font-bold !px-4 !py-2 rounded-full shadow-md">
                    ${item.price.toFixed(2)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white !mb-1">{item.name}</h3>
                    <div className="flex items-center text-[#e7b745]">
                      <FaStar className="!mr-1" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white !p-6 relative">
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#e7b745] rounded-tl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#0b3171] rounded-br-lg"></div>
                  
                  <p className="text-gray-600 relative z-10 !mb-4">{item.description}</p>
                  
                  <button className="flex items-center text-[#0b3171] font-bold hover:text-[#e7b745] transition">
                    View Details <FaArrowRight className="!ml-2" />
                  </button>
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