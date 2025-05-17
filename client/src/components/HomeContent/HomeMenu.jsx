import React, { useState } from "react";
import foodApi from "../../assets/data/foodData";

const HomeMenu = () => {
  const data = foodApi.getAllItems();
  const categories = Object.keys(data);

  const [activeTab, setActiveTab] = useState(categories[0]);

  const menuItems = data[activeTab];

  return (
    <div className="homemenu_bg text-white px-4 md:px-20 py-12 font-serif">
      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-6 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`uppercase text-sm md:text-lg tracking-wide pb-1 border-b-2 ${
              activeTab === category
                ? "text-yellow-500 border-yellow-500"
                : "text-gray-300 border-transparent hover:text-yellow-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
        {menuItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg shrink-0"
            />
            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  {item.tag && (
                    <span className="bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-sm">
                      {item.tag}
                    </span>
                  )}
                </div>
                <span className="text-yellow-500 font-semibold text-sm">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <p className="text-center text-sm mt-12 text-gray-400">
        During winter daily from{" "}
        <span className="text-yellow-500 font-medium">7:00 pm</span> to{" "}
        <span className="text-yellow-500 font-medium">9:00 pm</span>
      </p>
    </div>
  );
};

export default HomeMenu;
