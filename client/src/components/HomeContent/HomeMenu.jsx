import React, { useState, useRef, useEffect } from "react";
import foodApi from "../../assets/data/foodData";
import { motion, AnimatePresence } from 'framer-motion';

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

  const menuItems = data[activeTab];

  useEffect(() => {
    const activeTabElement = tabsRef.current.find(tab => tab?.dataset?.category === activeTab);
    if (activeTabElement) {
      setUnderlineWidth(activeTabElement.offsetWidth);
      setUnderlineLeft(activeTabElement.offsetLeft);
    }
  }, [activeTab]);

  return (
    <div className="homemenu_bg text-white !px-4 md:!px-20 !py-20 font-serif">
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
        <div className="relative !mb-16 border-t border-b border-[#e7b745] border-opacity-30 !py-4 rounded-xl">
          <div className="flex justify-center !space-x-1 md:!space-x-6 overflow-x-auto !pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <button
                key={category.id}
                ref={el => tabsRef.current[index] = el}
                data-category={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center !px-6 !py-3 transition-all duration-300 whitespace-nowrap ${activeTab === category.id
                  ? '!text-white !bg-transparent '
                  : '!text-gray-300 !bg-transparent'
                  }`}
              >
                <span className="font-medium text-lg">{category.name}</span>
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

        {/* Menu Items Grid with Golden Separator */}
        <div className="relative">
          {/* Golden vertical separator line - only shows on md+ screens */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#e7b745] to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`flex gap-4 ${index % 2 === 0 ? 'md:!pr-10' : 'md:!pl-10'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
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
            ))}
          </div>
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

export default HomeMenu;