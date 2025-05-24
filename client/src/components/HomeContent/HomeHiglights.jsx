import React from "react";
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

  return (
    <section className="bg-black !py-20 overflow-hidden relative">
      {/* Animated Shooting Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Shooting Stars */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `shootingStar ${3 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
        
        {/* Twinkling Stars */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i + 12}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}

        {/* Gold accent shooting stars */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i + 30}
            className="absolute w-1 h-1 bg-[#e7b745] rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `shootingStar ${4 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`
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

      <div className="container !mx-auto relative highlight_bg !px-4 !py-10 z-10 rounded-2xl">
        {/* Floating decorative rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/3 right-1/3 w-96 h-96 border-2 border-[#e7b745] border-opacity-10 rounded-full"
            style={{
              animation: 'floatingRing 12s ease-in-out infinite'
            }}
          />
        </div>

        {/* Additional floating ring animation */}
        <style jsx>{`
          @keyframes floatingRing {
            0%, 100% {
              transform: scale(1);
              opacity: 0.1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.15;
            }
          }
        `}</style>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Vertical divider for all except first item */}
              {index !== 0 && (
                <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-[#e7b745] to-transparent opacity-30 hidden md:block" />
              )}

              <div className="h-full flex flex-col items-center text-center !px-6">
                <div className="!mb-6 !p-4 bg-transparent bg-opacity-10 rounded-full backdrop-blur-sm border border-[#e7b745] border-opacity-30 hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white !mb-4">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-300">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal divider line */}
        <div className="!mt-16 w-full h-px bg-gradient-to-r from-transparent via-[#e7b745] to-transparent" />
      </div>
    </section>
  );
};

export default HomeHighlights;