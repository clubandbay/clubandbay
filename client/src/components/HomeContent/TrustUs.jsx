import React from 'react';

// TrustUs Component
const App = () => {
  // Data for the trust points
  const trustPoints = [
    {
      id: '01',
      title: 'We are located in the city center',
      description: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.',
    },
    {
      id: '02',
      title: 'Fresh ingredients from organic farms',
      description: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.',
    },
    {
      id: '03',
      title: 'Own fast delivery, 30 min Maximum',
      description: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.',
    },
    {
      id: '04',
      title: 'Professional, experienced chefs',
      description: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.',
    },
    {
      id: '05',
      title: 'The highest standards of service',
      description: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.',
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden font-inter !py-16 !px-4 sm:!px-6 lg:!px-8">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container !mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center !mb-12 leading-tight">
          Why Trust Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <div
              key={point.id}
              className="bg-white !p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-start"
            >
              <div className="flex items-center !mb-4">
                {/* Unique ID with circular border */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400 text-yellow-500 font-bold text-xl !mr-4">
                  {point.id}
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 leading-snug">
                  {point.title}
                </h3>
              </div>
              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS keyframes for blob animation */}
      <style>
        {`
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        `}
      </style>
    </section>
  );
};

export default App;