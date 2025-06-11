import React from 'react';
import { FaUtensils, FaMotorcycle, FaLeaf, FaChessRook } from 'react-icons/fa';
import { motion } from "framer-motion";

const MenuHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "Best Quality Food",
      description: "Only the finest, freshest ingredients—cooked with care, just like home. No compromises, ever.",
      icon: <FaUtensils className="!text-3xl !text-amber-500" />
    },
    {
      id: 2,
      title: "Office delivery",
      description: "Piping hot meals delivered straight from our kitchen to your office. Fast, reliable, and always on time.",
      icon: <FaMotorcycle className="!text-3xl !text-amber-500" />
    },
    {
      id: 3,
      title: "Real Taste",
      description: "Authentic flavors that bring comfort and satisfaction in every bite. Nothing artificial—just real, honest food.",
      icon: <FaLeaf className="!text-3xl !text-amber-500" />
    },
    {
      id: 4,
      title: "Traditional food",
      description: "Handmade recipes rooted in tradition. Experience the warmth of homemade cooking, every single day.",
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