import React from "react";
import { motion } from "framer-motion";
import { 
  FaMedal, FaUtensils, FaShippingFast, FaLeaf 
} from "react-icons/fa";

const HomeHighlights = () => {
  const highlights = [
    {
      title: "Super Quality Food",
      description: "Only premium ingredients selected by our master chefs for exceptional taste",
      icon: <FaMedal className="text-[#e7b745] text-4xl" />
    },
    {
      title: "Original Recipes",
      description: "Unique culinary creations you won't find anywhere else",
      icon: <FaUtensils className="text-[#e7b745] text-4xl" />
    },
    {
      title: "Quick Fast Delivery",
      description: "Hot, fresh meals delivered to your door in record time",
      icon: <FaShippingFast className="text-[#e7b745] text-4xl" />
    },
    {
      title: "100% Fresh Foods",
      description: "Never frozen, always prepared with the freshest ingredients",
      icon: <FaLeaf className="text-[#e7b745] text-4xl" />
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className=" !py-20 overflow-hidden">
      

      <div className="container !mx-auto relative highlight_bg !px-4 !py-10 z-10 rounded-2xl">
        {/* Floating decorative rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/3 w-96 h-96 border-2 border-[#e7b745] border-opacity-10 rounded-full"
        />
      </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative"
            >
              {/* Vertical divider for all except first item */}
              {index !== 0 && (
                <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-[#e7b745] to-transparent opacity-30 hidden md:block" />
              )}

              <div className="h-full flex flex-col items-center text-center !px-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="!mb-6 !p-4 bg-transparent bg-opacity-10 rounded-full backdrop-blur-sm border border-[#e7b745] border-opacity-30"
                >
                  {highlight.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white !mb-4">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-300">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Horizontal divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="!mt-16 w-full h-px bg-gradient-to-r from-transparent via-[#e7b745] to-transparent"
        />
      </div>
    </section>
  );
};

export default HomeHighlights;