import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const FAQpage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // FAQ Data
  const faqData = [
    {
      question: "What services does Advance Construction & Remodeling offer?",
      answer:
        "Advance Construction & Remodeling offers a wide range of services including Roof-to-Roof Construction, Property Management, Interior Design & Remodeling, and House Remodeling & Renovations.",
    },
    {
      question: "How can I request a quote?",
      answer:
        "You can request a quote by visiting our website and filling out the contact form, or by calling us directly at +1 (123) 456-7890.",
    },
    {
      question: "Do you provide free consultations?",
      answer:
        "Yes, we offer free consultations to discuss your project requirements and provide an estimate.",
    },
    {
      question: "Are your services available for both residential and commercial properties?",
      answer:
        "Yes, we cater to both residential and commercial properties, offering tailored solutions for each.",
    },
    {
      question: "How long does a typical construction project take?",
      answer:
        "The duration of a project depends on its scope and complexity. We provide a timeline during the consultation phase.",
    },
    {
      question: "What materials do you use for construction?",
      answer:
        "We use high-quality, durable materials that meet industry standards and ensure long-lasting results.",
    },
    {
      question: "Do you offer eco-friendly construction options?",
      answer:
        "Yes, we provide eco-friendly and energy-efficient solutions to help reduce your environmental footprint.",
    },
    {
      question: "Can I customize my project design?",
      answer:
        "Absolutely! We work closely with clients to create custom designs that meet their specific needs and preferences.",
    },
    {
      question: "What is your payment process?",
      answer:
        "We require a deposit upfront, with the remaining balance due upon project completion. Payment plans are also available.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@armiami.com or by calling +1 (123) 456-7890.",
    },
  ];

  // Handle Eye Icon Click
  const handleQuestionClick = (index) => {
    setSelectedQuestion(faqData[index]);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedQuestion(null);
  };

  return (
    <div className="!py-12 !px-4 lg:!px-8 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#e7b745] text-center !mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 !p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex justify-between items-center"
            >
              <p className="text-lg font-medium text-white">{faq.question}</p>
              <button
                onClick={() => handleQuestionClick(index)}
                className="text-gray-600 hover:text-[#e7b745] !bg-[#e7b745] transition-all transform hover:scale-110"
              >
                <FaEye className="w-6 h-6 text-[#0b3171] cursor-pointer" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Answer */}
      {isModalOpen && selectedQuestion && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white/90 backdrop-blur-lg rounded-lg !p-8 max-w-2xl w-full !mx-4 relative transform transition-all duration-300 ease-out"
            style={{
              animation: "modalFadeIn 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#5c7c3b] hover:text-[#2b4d2f] transition-all transform hover:scale-110 cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-gray-800 !mb-4">
              {selectedQuestion.question}
            </h3>
            <p className="text-gray-600">{selectedQuestion.answer}</p>
          </div>
        </div>
      )}

      {/* Add CSS for Modal Animation */}
      <style>
        {`
          @keyframes modalFadeIn {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default FAQpage;