import React, { useState, useEffect } from 'react';
import { FaGem, FaStar, FaBolt, FaCrown, FaInfoCircle, FaExclamationTriangle, FaCheck, FaArrowRight } from 'react-icons/fa';
import { GiOysterPearl } from "react-icons/gi";
import { DiRuby } from "react-icons/di";
import { IoDiamond } from "react-icons/io5";
import { GiEmerald } from "react-icons/gi";
import SubscriptionImg from '../../assets/subcontbg.jpg'

const SubscriptionComponent = () => {
  const [selectedPlan, setSelectedPlan] = useState('Club Ruby');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      name: 'Club Crystal',
      days: '2 days/week',
      dname: 'Monday & Wednesday',
      basePrice: 358,
      gst: 18,
      totalPrice: 376,
      bestFor: 'Light users / entry plan',
      icon: <FaGem className="w-6 h-6" />,
      gradient: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-500/5',
      borderColor: 'border-cyan-500/30',
      popular: false,
      color: 'cyan'
    },
    {
      name: 'Club Pearl',
      days: '3 days/week',
      dname: 'Monday, Wednesday & Friday',
      basePrice: 537,
      gst: 27,
      totalPrice: 564,
      bestFor: 'Part-timers',
      icon: <GiOysterPearl className="w-6 h-6" />,
      gradient: 'from-slate-500 to-gray-600',
      bgColor: 'bg-gray-500/5',
      borderColor: 'border-gray-500/30',
      popular: false,
      color: 'gray'
    },
    {
      name: 'Club Ruby',
      days: '5 days/week',
      dname: 'Monday to Friday',
      basePrice: 995,
      gst: 50,
      totalPrice: 1045,
      bestFor: 'Regular professionals',
      icon: <DiRuby className="w-6 h-6" />,
      gradient: 'from-rose-500 to-pink-600',
      bgColor: 'bg-red-500/5',
      borderColor: 'border-rose-500/30',
      popular: true,
      color: 'rose'
    },
    {
      name: 'Club Emerald',
      days: '5 days/week',
      dname: 'Monday to Friday + 2 alternate working saturday only',
      basePrice: 1374,
      gst: 69,
      totalPrice: 1443,
      bestFor: 'High-frequency users',
      icon: <GiEmerald className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-500/5',
      borderColor: 'border-emerald-500/30',
      popular: false,
      color: 'emerald'
    },
    {
      name: 'Club Diamond',
      days: '6 days/week',
      dname: 'Monday to Saturday',
      basePrice: 1494,
      gst: 75,
      totalPrice: 1569,
      bestFor: 'Premium daily subscribers',
      icon: <IoDiamond className="w-6 h-6" />,
      gradient: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-500/5',
      borderColor: 'border-violet-500/30',
      popular: false,
      color: 'violet'
    }
  ];

  return (
    <div className="min-h-screen !py-12 !px-4 sm:!px-6 lg:!px-8"
    style={{backgroundImage: `url(${SubscriptionImg})`}}>

      <div className="relative max-w-7xl !mx-auto">
        {/* Header Section */}
        <div className={`text-center !mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white !px-6 !py-2 rounded-full text-sm font-medium !mb-4 shadow-lg">
            <IoDiamond className="w-4 h-4" />
            Premium Subscription Plans
          </div> */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#e7b745] !mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
            Club & Bay
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl !mx-auto leading-relaxed">
            Choose your perfect plan and elevate your experience with our premium subscription options
          </p>
          <div className="!mt-4 text-sm text-gray-400">
            (Prices exclusive of GST – 5% additional applicable)
          </div>
        </div>

        {/* Modern Subscription Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 !mb-12">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative transform transition-all duration-700 text-[#e7b745] ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(plan.name)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold !px-4 !py-1 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div
                className={`relative h-full rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group ${
                  selectedPlan === plan.name 
                    ? `ring-2 ring-offset-2 ring-offset-slate-900 ring-${plan.color}-500 scale-[1.02]` 
                    : ''
                }`}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 ${plan.bgColor} ${plan.borderColor} border`}></div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Card Content */}
                <div className="relative !p-6 h-full flex flex-col">
                  {/* Plan Header */}
                  <div className="flex items-center justify-between !mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${plan.gradient} flex items-center justify-center text-white shadow-lg`}>
                      {plan.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium text-white">PER WEEK</span>
                      <div className="text-2xl font-bold text-[#e7b745]">₹{plan.totalPrice}</div>
                    </div>
                  </div>
                  
                  {/* Plan Name */}
                  <h3 className="text-xl font-bold text-[#e7b745] !mb-1">
                    {plan.name}
                  </h3>
                  
                  {/* Days */}
                  <p className="text-sm text-white !mb-2">
                    {plan.days}
                  </p>

                  {/* Days */}
                  <p className="text-sm text-white !mb-6">
                    {plan.dname}
                  </p>
                  
                  {/* Divider */}
                  <div className={`h-px bg-gradient-to-r ${plan.gradient} opacity-30 !my-4`}></div>
                  
                  {/* Best For */}
                  <div className="!mb-6">
                    <div className="text-xs text-white uppercase tracking-wider !mb-1">Best For</div>
                    <div className="text-sm font-medium text-[#e7b745]">
                      {plan.bestFor}
                    </div>
                  </div>
                  
                  {/* Price Breakdown */}
                  <div className="!mt-auto !space-y-2 text-sm">
                    <div className="flex justify-between items-center text-gray-400">
                      <span>Base Price:</span>
                      <span className="font-medium">₹{plan.basePrice}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-400">
                      <span>GST (5%):</span>
                      <span className="font-medium">₹{plan.gst}</span>
                    </div>
                  </div>
                  
                  {/* Select Button */}
                  <button className={`w-full !mt-6 !py-3 rounded-lg font-medium text-sm transition-all duration-300 relative overflow-hidden ${
                    selectedPlan === plan.name
                      ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg`
                      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                  }`}>
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      {selectedPlan === plan.name ? (
                        <>
                          <FaCheck className="w-4 h-4" />
                          <span>Selected</span>
                        </>
                      ) : (
                        <>
                          <span>Select Plan</span>
                          <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes Section */}
        <div className={`!space-y-6 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* GST Note */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl !p-6 border border-white/10 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <FaInfoCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white !mb-2">
                  GST Information
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  GST will be charged separately on the invoice at 5%. Once our GST registration is official, 
                  this will reflect in your tax-compliant bill. Until then, this format keeps pricing 
                  professional and ready for future scale.
                </p>
              </div>
            </div>
          </div>

          {/* Startup Compliance Note */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl !p-6 border border-white/10 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <FaExclamationTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white !mb-2">
                  Startup Compliance Notice
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Club & Bay BKC is currently operating under startup compliance. We are not charging GST yet. 
                  Once our official GST registration is complete, government taxes will be added as per norms. 
                  Thank you for supporting our growing brand!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center !mt-12 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white !px-8 !py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SubscriptionComponent;