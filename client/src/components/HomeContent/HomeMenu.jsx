import React, { useState, useRef, useEffect } from "react";
import foodApi from "../../assets/data/foodData";
import { motion } from 'framer-motion';
import { GiMeat } from 'react-icons/gi';
import { BiLeaf } from 'react-icons/bi';
import NonVegIcon from '../../assets/nonVeg.png'
import VegIcon from '../../assets/veg.png'

// Debounce utility to limit frequent updates
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const HomeMenu = () => {
  const data = foodApi.getAllItems();
  const categories = Object.keys(data).map(category => ({
    id: category,
    name: category.toUpperCase(),
    icon: null // You can add icons here if needed
  }));

  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const tabsRef = useRef([]);
  const tabContainerRef = useRef(null);

  // Function to separate and sort items by veg/non-veg
  const getSortedItems = (items) => {
    if (!items) return [];
    
    const nonVegItems = items.filter(item => item.categ === 'non-veg');
    const vegItems = items.filter(item => item.categ === 'veg');
    
    return [...nonVegItems, ...vegItems];
  };

  // Check if current tab is drinks (no categ property)
  const isDrinksTab = activeTab.toLowerCase().includes('drink');
  const menuItems = isDrinksTab ? (data[activeTab] || []) : getSortedItems(data[activeTab]);

  useEffect(() => {
    const updateUnderline = () => {
      const activeTabElement = tabsRef.current.find(tab => tab?.dataset?.category === activeTab);
      if (activeTabElement && tabContainerRef.current) {
        const containerRect = tabContainerRef.current.getBoundingClientRect();
        const tabRect = activeTabElement.getBoundingClientRect();
        
        // Get container's scroll position and padding
        const containerStyles = getComputedStyle(tabContainerRef.current);
        const paddingLeft = parseFloat(containerStyles.paddingLeft) || 0;
        
        // Calculate position relative to the scrollable container
        const scrollLeft = tabContainerRef.current.scrollLeft;
        const tabOffsetLeft = activeTabElement.offsetLeft;
        
        // Position relative to visible area of container
        const leftPosition = tabOffsetLeft - scrollLeft;
        
        setUnderlineWidth(tabRect.width);
        setUnderlineLeft(leftPosition);
      }
    };

    // Debounced update for scroll and resize
    const debouncedUpdate = debounce(updateUnderline, 50);

    // Initial update with a small delay to ensure DOM is ready
    setTimeout(updateUnderline, 100);

    // Update on scroll
    const handleScroll = () => {
      debouncedUpdate();
    };

    // Update on resize
    const handleResize = () => {
      debouncedUpdate();
    };

    const container = tabContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    window.addEventListener('resize', handleResize);

    // Center the active tab on mobile with improved scrolling
    const activeTabElement = tabsRef.current.find(tab => tab?.dataset?.category === activeTab);
    if (activeTabElement && window.innerWidth < 768) {
      // Use a small delay to ensure the tab is rendered
      setTimeout(() => {
        activeTabElement.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
        // Update underline after scrolling
        setTimeout(updateUnderline, 300);
      }, 50);
    }

    // Cleanup event listeners
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [activeTab]);

  const handleTabClick = (categoryId) => {
    setActiveTab(categoryId);
  };

  return (
    <div className="homemenu_bg text-white !px-4 md:!px-20 !py-20 font-serif overflow-x-hidden">
      <div className="container !mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center !mb-16"
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="hidden sm:block w-14 h-px bg-[#e7b745]"></div>
            <h2 className="text-4xl font-bold text-[#e7b745] !mb-4 font-cursive italic whitespace-nowrap">
              Special Menu
            </h2>
            <div className="hidden sm:block w-14 h-px bg-[#e7b745]"></div>
          </div>
          <p className="text-gray-200 max-w-2xl !mx-auto">
            Carefully crafted dishes made with the finest ingredients
          </p>
        </motion.div>

        {/* Tabs with decorative lines */}
        <div className="relative !mb-16 border-t border-b border-[#e7b745] border-opacity-30 !py-4 rounded-xl overflow-hidden">
          <div
            ref={tabContainerRef}
            className="flex justify-start md:justify-center !space-x-1 md:!space-x-6 overflow-x-auto !pb-4 scrollbar-hide snap-x snap-mandatory relative"
            style={{ 
              WebkitOverflowScrolling: 'touch', 
              scrollBehavior: 'smooth',
              // Ensure the container has proper positioning context
              position: 'relative'
            }}
          >
            {categories.map((category, index) => (
              <button
                key={category.id}
                ref={el => tabsRef.current[index] = el}
                data-category={category.id}
                onClick={() => handleTabClick(category.id)}
                className={`flex items-center snap-center !px-4 sm:!px-6 !py-3 transition-all duration-300 whitespace-nowrap min-w-[100px] relative z-10 ${activeTab === category.id
                  ? '!text-white !bg-transparent '
                  : '!text-gray-300 !bg-transparent'
                  }`}
              >
                <span className="font-medium text-base sm:text-lg">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Fixed underline with proper positioning */}
          <motion.div
            className="absolute bottom-0 h-1 bg-[#e7b745] rounded-full shadow-lg"
            initial={false}
            animate={{
              width: underlineWidth,
              left: underlineLeft,
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 25,
              duration: 0.3
            }}
            style={{ 
              // Ensure the underline stays within the container bounds
              maxWidth: '100%',
              willChange: 'width, left',
              zIndex: 5
            }}
          />
        </div>

        {/* Menu Items Grid with Golden Separator */}
        <div className="relative">
          {/* Golden vertical separator line - only shows on md+ screens for veg/non-veg tabs */}
          {!isDrinksTab && (
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#e7b745] to-transparent"></div>
          )}

          {/* Drinks Section - Special handling for drinks without categ */}
          {isDrinksTab && menuItems.length > 0 && (
            <div className="!mb-12">
              <div className="flex items-center justify-center !mb-8">
                <div className="flex items-center bg-blue-900 bg-opacity-30 !px-6 !py-2 rounded-full border border-blue-500">
                  <svg className="w-5 h-5 text-blue-500 !mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold text-blue-400">BEVERAGES</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10">
                {menuItems.map((item, index) => (
                  <DrinkItem key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Non-Veg Section */}
          {!isDrinksTab && menuItems.filter(item => item.categ === 'non-veg').length > 0 && (
            <div className="!mb-12">
              <div className="flex items-center justify-center !mb-8">
                <div className="flex items-center bg-red-300 bg-opacity-30 !px-6 !py-2 rounded-full border border-red-500">
                  <img src={NonVegIcon} alt='Non-veg' className="w-5 h-5 !mr-2" />
                  <h3 className="text-xl font-bold text-red-700">NON-VEGETARIAN</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
                {menuItems.filter(item => item.categ === 'non-veg').map((item, index) => (
                  <MenuItem key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Veg Section */}
          {!isDrinksTab && menuItems.filter(item => item.categ === 'veg').length > 0 && (
            <div className="!mt-12">
              <div className="flex items-center justify-center !mb-8">
                <div className="flex items-center bg-green-900 bg-opacity-30 !px-6 !py-2 rounded-full border border-green-500">
                  <img src={VegIcon} alt='Veg' className="w-5 h-5 !mr-2" />
                  <h3 className="text-xl font-bold text-green-400">VEGETARIAN</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
                {menuItems.filter(item => item.categ === 'veg').map((item, index) => (
                  <MenuItem key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <motion.p
          className="text-center text-sm !mt-12 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          During winter daily from{" "}
          <span className="text-[#e7b745] font-medium">7:00 pm</span> to{" "}
          <span className="text-[#e7b745] font-medium">9:00 pm</span>
        </motion.p>
      </div>
    </div>
  );
};

// Menu Item Component
const MenuItem = ({ item, index }) => {
  return (
    <motion.div
      className={`flex gap-4 ${index % 2 === 0 ? 'md:!pr-10' : 'md:!pl-10'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image with veg/non-veg indicator */}
      <div className="shrink-0 relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className={`absolute -top-2 -left-2 z-10 ${item.categ === 'veg' ? 'text-green-500' : 'text-red-500'}`}>
          {item.categ === 'veg' ? (
            <img src={VegIcon} alt='Veg' className="w-5 h-5" />
          ) : (
            <img src={NonVegIcon} alt='Non-veg' className="h-5 w-5" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start !mb-1 relative">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-white">{item.name}</h3>
            {item.tag && (
              <span className="bg-[#e7b745] text-black text-xs !px-2 py-0.5 rounded-sm">
                {item.tag}
              </span>
            )}
          </div>
          <div className="flex items-center">
            {/* Decorative line */}
            <div className="h-1 bg-[#e7b745] flex-1 !mx-2 hidden md:block"></div>
            <span className="text-[#e7b745] font-semibold text-sm">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-400">{item.description}</p>
      </div>
    </motion.div>
  );
};

// Drink Item Component - Special component for drinks without veg/non-veg indicators
const DrinkItem = ({ item, index }) => {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {/* Image without veg/non-veg indicator */}
      <div className="shrink-0 relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        {/* Optional drink type indicator */}
        <div className="absolute -top-2 -left-2 z-10 text-blue-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start !mb-1 relative">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-white">{item.name}</h3>
            {item.tag && (
              <span className="bg-[#e7b745] text-black text-xs !px-2 py-0.5 rounded-sm">
                {item.tag}
              </span>
            )}
          </div>
          <div className="flex items-center">
            {/* Decorative line */}
            <div className="h-1 bg-[#e7b745] flex-1 !mx-2 hidden md:block"></div>
            <span className="text-[#e7b745] font-semibold text-sm">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-400">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default HomeMenu;