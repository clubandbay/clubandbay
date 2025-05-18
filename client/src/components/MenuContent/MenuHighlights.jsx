import React from 'react';
import { FaUtensils, FaMotorcycle, FaLeaf, FaChessRook } from 'react-icons/fa';
import { motion } from "framer-motion";

const MenuHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "Best Quality Food",
      description: "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.",
      icon: <FaUtensils className="!text-3xl !text-amber-500" />
    },
    {
      id: 2,
      title: "Home delivery",
      description: "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.",
      icon: <FaMotorcycle className="!text-3xl !text-amber-500" />
    },
    {
      id: 3,
      title: "Real Taste",
      description: "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.",
      icon: <FaLeaf className="!text-3xl !text-amber-500" />
    },
    {
      id: 4,
      title: "Traditional food",
      description: "Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past.",
      icon: <FaChessRook className="!text-3xl !text-amber-500" />
    }
  ];

  return (
    <section className="!py-16 bg-white relative">

      <div className="container !mx-auto !px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">

          {highlights.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#EFF6FF" // blue-50
              }}
              className="bg-white !p-8 !m-4 rounded-lg shadow-md text-center transition-all duration-300 relative"
            >
              <div className="flex justify-center !mb-4">
                <div className="bg-white !p-4 rounded-full shadow-lg">
                  {item.icon}
                </div>
              </div>
              <h3 className="!text-xl font-bold !mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;