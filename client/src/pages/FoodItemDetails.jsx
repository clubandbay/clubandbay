import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FaUtensils, FaLeaf, FaFire, FaWeight, FaClock, 
  FaStar, FaArrowLeft, FaShoppingCart, FaPlus, FaMinus 
} from 'react-icons/fa';
import { GiMeal, GiForkKnifeSpoon } from 'react-icons/gi';
import foodApi from '../assets/data/foodData';

const FoodItemDetails = () => {
  const { category, slug } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = () => {
      const foundItem = foodApi.getItemBySlug(category, slug);
      setItem(foundItem);
      setIsLoading(false);
    };

    // Simulate loading delay
    const timer = setTimeout(fetchItem, 500);
    return () => clearTimeout(timer);
  }, [category, slug]);

  const handleAddToCart = () => {
    // Add to cart logic here
    alert(`${quantity} ${item.name} added to cart!`);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-[#e7b745] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center !mt-20 text-center !p-4">
        <h1 className="text-4xl font-bold text-[#0b3171] !mb-4">Item Not Found</h1>
        <p className="text-xl text-gray-600 !mb-8">We couldn't find the menu item you're looking for</p>
        <button 
          onClick={() => navigate('/menu')}
          className="bg-[#0b3171] text-white !px-6 !py-3 rounded-full font-bold hover:bg-[#e7b745] transition"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen  bg-[#0b3171]">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ x: -100, y: 100 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/6 text-[#0b3171] text-6xl opacity-10"
        >
          <GiForkKnifeSpoon />
        </motion.div>
        <motion.div
          initial={{ x: 100, y: -100 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-1/4 right-1/6 text-[#0b3171] text-8xl opacity-10"
        >
          <GiMeal />
        </motion.div>
      </div>

      {/* Back button */}
      <button 
        onClick={() => navigate(-1)}
        className="fixed top-40 left-6 z-50 bg-white bg-opacity-80 backdrop-blur-sm !p-3 rounded-full shadow-lg hover:bg-[#0b3171] hover:text-white transition-all duration-300"
      >
        <FaArrowLeft className="text-xl" />
      </button>

      <div className="container !mx-auto !px-4 !py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Image and basic info */}
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="h-full"
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#e7b745] text-[#0b3171] font-bold !px-4 !py-2 rounded-full shadow-md">
                  ${item.price.toFixed(2)}
                </div>
              </motion.div>
            </div>

            <div className="md:w-1/2 !p-8 md:!p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center !mb-4">
                  <span className="bg-[#0b3171] text-white text-sm !px-3 !py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="!ml-4 flex items-center text-[#e7b745]">
                    <FaStar className="!mr-1" />
                    <span className="font-bold">{item.rating}</span>
                  </div>
                </div>

                <h1 className="text-4xl font-bold text-[#0b3171] !mb-4">{item.name}</h1>
                <p className="text-gray-600 text-lg !mb-6">{item.description}</p>

                {/* Nutrition info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 !mb-8">
                  <div className="bg-gray-50 !p-3 rounded-lg text-center">
                    <div className="text-[#e7b745] flex justify-center !mb-1">
                      <FaFire />
                    </div>
                    <div className="font-bold">{item.calories}</div>
                    <div className="text-xs text-gray-500">Calories</div>
                  </div>
                  <div className="bg-gray-50 !p-3 rounded-lg text-center">
                    <div className="text-[#e7b745] flex justify-center !mb-1">
                      <FaClock />
                    </div>
                    <div className="font-bold">{item.prepTime}</div>
                    <div className="text-xs text-gray-500">Prep Time</div>
                  </div>
                  <div className="bg-gray-50 !p-3 rounded-lg text-center">
                    <div className="text-[#e7b745] flex justify-center !mb-1">
                      <FaLeaf />
                    </div>
                    <div className="font-bold">{item.nutrition.carbs}</div>
                    <div className="text-xs text-gray-500">Carbs</div>
                  </div>
                  <div className="bg-gray-50 !p-3 rounded-lg text-center">
                    <div className="text-[#e7b745] flex justify-center !mb-1">
                      <FaWeight />
                    </div>
                    <div className="font-bold">{item.nutrition.protein}</div>
                    <div className="text-xs text-gray-500">Protein</div>
                  </div>
                </div>
                
            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0b3171] !mb-6 flex items-center">
                <FaUtensils className="text-[#e7b745] !mr-3" />
                Ingredients
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#e7b745] rounded-full !mr-3"></div>
                    <span className="text-gray-700">{ingredient}</span>
                  </div>
                ))}
              </div>
            </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Detailed info sections */}
          <div className="!p-8 md:!p-12 border-t border-gray-100">

            {/* Nutrition */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="!mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0b3171] !mb-6 flex items-center">
                <FaWeight className="text-[#e7b745] !mr-3" />
                Nutrition Information
              </h2>
              <div className="bg-gray-50 rounded-xl !p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-700 !mb-2">Calories</h3>
                    <p>{item.calories}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700 !mb-2">Total Fat</h3>
                    <p>{item.nutrition.fat}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700 !mb-2">Protein</h3>
                    <p>{item.nutrition.protein}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700 !mb-2">Carbs</h3>
                    <p>{item.nutrition.carbs}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Allergens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="!mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0b3171] !mb-6">Allergens</h2>
              <div className="flex flex-wrap gap-2">
                {item.allergens.map((allergen, index) => (
                  <span key={index} className="bg-red-50 text-red-600 !px-3 !py-1 rounded-full text-sm">
                    {allergen}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Chef's Recommendation */}
            {item.chefRecommendation && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-[#0b3171] bg-opacity-5 !p-6 rounded-xl border border-[#0b3171] border-opacity-20"
              >
                <h2 className="text-2xl font-bold text-white !mb-4">Chef's Recommendation</h2>
                <p className="text-gray-100 italic">"{item.chefRecommendation}"</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FoodItemDetails;