import React from 'react';
import Chef from '../../assets/man-eating.jpeg'
import FoodBox from '../../assets/pack-box.jpeg'
import RollFood from '../../assets/food_6.png'

const RestaurantBanner = () => {
  return (
    <div className="w-full bg-black relative overflow-hidden">
      {/* Animated Shooting Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Shooting Stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-80"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `shootingStar ${3 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Twinkling Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i + 15}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(-100px) translateY(0px) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateX(-50px) translateY(-10px) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateX(100vw) translateY(-100px) scale(1);
          }
          100% {
            transform: translateX(100vw) translateY(-120px) scale(0);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
      {/* Main Container */}
      <div className="max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-8 lg:!py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="!space-y-6 lg:!space-y-8">
            {/* Header with decorative elements */}
            <div className="flex items-center !space-x-2 text-[#e7b745]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
              </svg>
              <span className="text-lg font-medium">Club and Bay BKC Introduction</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
              </svg>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight">
              To Take Healthy Food.
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
              essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
              containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200">
              <div className="!space-y-3">
                <div className="flex items-center !space-x-3">
                  <span className="text-[#e7b745] text-lg">»</span>
                  <span className="font-medium">Delicious Food</span>
                </div>
                <div className="flex items-center !space-x-3">
                  <span className="text-[#e7b745] text-lg">»</span>
                  <span className="font-medium">Cost Effective</span>
                </div>
                <div className="flex items-center !space-x-3">
                  <span className="text-[#e7b745] text-lg">»</span>
                  <span className="font-medium">Quality Food</span>
                </div>
              </div>
              <div className="!space-y-3">
                <div className="flex items-center !space-x-3">
                  <span className="text-[#e7b745] text-lg">»</span>
                  <span className="font-medium">Expert Chef</span>
                </div>
                <div className="flex items-center !space-x-3">
                  <span className="text-[#e7b745] text-lg">»</span>
                  <span className="font-medium">Letraset Sheets</span>
                </div>
                <div className="flex items-center !space-x-3">
                  <span className="text-[#e7b745] text-lg">»</span>
                  <span className="font-medium">Quality Food</span>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="!space-y-4">
              <h3 className="text-lg font-medium text-white">Our Achievement:</h3>
              <div className="flex flex-wrap gap-4">
                {/* Achievement Badges */}
                <div className="w-16 h-16 rounded-full bg-[#e7b745] flex items-center justify-center shadow-lg">
                  <div className="text-white text-xs font-bold text-center">
                    <div>BEST</div>
                    <div>CHEF</div>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#e7b745] flex items-center justify-center shadow-lg">
                  <div className="text-white text-xs font-bold text-center">
                    <div>QUALITY</div>
                    <div>FOOD</div>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#e7b745] flex items-center justify-center shadow-lg">
                  <div className="text-white text-xs font-bold text-center">
                    <div>FAST</div>
                    <div>SERVICE</div>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#e7b745] flex items-center justify-center shadow-lg">
                  <div className="text-white text-xs font-bold text-center">
                    <div>FRESH</div>
                    <div>FOOD</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Discover More Button */}
            <div className="!pt-4">
              <button className="border-2 border-[#e7b745] text-[#e7b745] !px-8 !py-3 font-medium hover:bg-[#e7b745] hover:text-black transition-colors duration-300 flex items-center !space-x-2">
                <span className="text-[#e7b745] hover:text-black">?</span>
                <span>Discover More</span>
              </button>
            </div>
          </div>

          {/* Right Images Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Top Left - Food Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl h-64 sm:h-80 flex items-center justify-center">
                  <img src={FoodBox} className='h-64 sm:h-80 rounded-2xl object-cover' alt="" />
                </div>
              </div>

              {/* Top Right - Chef Image */}
              <div className="relative row-span-2">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-full min-h-64 sm:min-h-96 flex items-center justify-center">
                  <img src={Chef} className='rounded-2xl h-full min-h-64 sm:min-h-96 object-cover' alt="" />
                </div>
              </div>

              {/* Bottom Left - Vegetables */}
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl h-48 sm:h-64 flex items-center justify-center">
                 <img src={RollFood} className='rounded-2xl h-48 sm:h-64 object-cover' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantBanner;