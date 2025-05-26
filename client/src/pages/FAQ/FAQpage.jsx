import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FAQHero } from "../../assets/data/heroData";
import Hero from "../../components/Others/Hero";

const FAQpage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // FAQ Data
  const faqData = [
    {
      question: "What is Club & Bay - BKC Breakfast Company?",
      answer:
        "We are a curated breakfast service for professionals commuting to BKC, offering wholesome, chef-crafted meals delivered or available for pickup between 7:00 AM and 9:45 AM. Our menu includes omelettes, paneer-stuffed meals, white/brown/multigrain toast, fresh juices, and more.",
    },
    {
      question: "What exactly is included in my subscription plan?",
      answer:
        "Each subscription includes a freshly prepared breakfast combo with your chosen items like egg or paneer options, multigrain/brown/white bread, and cold-pressed juice. Delivery, packaging, and service fees are all included—no hidden charges.",
    },
    {
      question: "Are there any hidden charges like delivery or platform fees?",
      answer:
        "Currently, no. All prices are all-inclusive. We believe in transparent pricing. In the future, platform service fees may apply, which will be clearly communicated in advance.",
    },
    {
      question: "Can I customize my breakfast?",
      answer:
        "Yes, within limits. You can choose between vegetarian and egg-based combos and select your preferred juice. Weekly menus are shared so you can pick preferences in advance.",
    },
    {
      question: "Can I pause or skip a day in my subscription?",
      answer:
        "Absolutely. You may pause or reschedule your breakfast with at least 12-24 hours' notice via WhatsApp or your customer dashboard.",
    },
    {
      question: "When do I need to place my order?",
      answer:
        "All orders must be confirmed before 10:00 PM the night prior. This ensures our team schedules fresh preparation early in the morning.",
    },
    {
      question: "What time do you deliver breakfast?",
      answer:
        "We deliver between 7:00 AM and 9:45 AM, Monday to Friday. Alternate Saturdays may be operational (based on volume). We are closed on Sundays.",
    },
    {
      question: "Do you deliver to all areas in Mumbai?",
      answer:
        "Currently, we serve offices and professionals within BKC and nearby areas (3-9 km radius). Expansion to other business hubs is underway.",
    },
    {
      question: "How do I make payments?",
      answer: "We accept payments via UPI, debit/credit cards, and net banking. Subscriptions can be paid on a weekly or monthly basis, as per your plan.",
    },
    {
      question: "Can I cancel or modify my order after booking?",
      answer: "No. Once confirmed, orders cannot be cancelled or changed. This is because our preparation begins early based on your confirmed booking.",
    },
    {
      question: "Why do you require advance booking and payment?",
      answer: "To maintain quality, reduce food waste, and ensure smooth operations, we request intentional, advance payments. This allows us to prepare every breakfast fresh and on time.",
    },
    {
      question: "Can I get a refund if I don't pick up my order?",
      answer: "All orders are non-refundable. If you or someone on your behalf doesn't pick up the meal, Club & Bay cannot issue a refund or replacement",
    },
    {
      question: "Can someone else pick up my order?",
      answer: "Yes, a colleague or office representative can collect your meal. Once handed over, however, Club & Bay is not liable for any loss or mix-up.",
    },
    {
      question: "What if I'm late to pick up my order?",
      answer: "We hold your order for 20 minutes after your scheduled pickup time. After that, it's marked as delivered. No replacements or refunds apply.",
    },
    {
      question: "Can I transfer my order to a colleague if I can't make it?",
      answer: "Yes. Just make sure they mention the correct order name or ID at pickup. Club & Bay is not responsible once the meal is collected.",
    },
    {
      question: "What if there's an issue with my order?",
      answer: "If there's a missing or incorrect item, please contact us within 30 minutes of pickup along with a photo. We'll resolve it or issue a goodwill credit where applicable.",
    },
    {
      question: "Do you cater to dietary preferences or allergies?",
      answer: "We offer vegetarian, protein-rich, and egg-white options. However, our kitchen handles common allergens, so meals are not guaranteed allergen-free.",
    },
    {
      question: "Do you offer loyalty rewards like “Diamond Credits”?",
      answer: "Yes! With every order or subscription, you earn 1 Diamond Point per day. After collecting 15 points, you can redeem them for free meals, discounts, or exclusive gifts.",
    },
    {
      question: ". Do you offer corporate or bulk orders?",
      answer: "Yes! We cater to teams, departments, and full offices. Orders must be confirmed at least 48 hours in advance with 100% payment upfront.",
    },
    {
      question: "Where do you operate from?",
      answer: "We currently serve BKC (Bandra Kurla Complex), Mumbai. Our delivery and pickup are optimized for office-goers in this area.",
    },
    {
      question: "Do you have a loyalty or subscription program?",
      answer: "Yes! Our subscription plans include perks like weekly combos, priority booking, and Diamond Credits. Stay tuned as we expand the program.",
    },
    {
      question: "Do you offer corporate or bulk orders?",
      answer: "Yes! We partner with offices for regular breakfast deliveries, wellness-focused team meals, and bulk orders. Please contact our team to discuss a custom plan.",
    },
    {
      question: "Where do you deliver or operate from?",
      answer: "Currently, we serve professionals commuting to BKC (Bandra Kurla Complex), Mumbai. Our pickup point and delivery options are optimized for office-goers in this area.",
    },
    {
      question: "Do you cater to dietary preferences or allergies?",
      answer: "We offer vegetarian and protein-rich options, including paneer, egg-white, and multigrain choices. However, please note that our kitchen handles common allergens, and we do not guarantee allergen-free meals.",
    },
    {
      question: "Do you have a loyalty or subscription program?",
      answer: "Yes! We're working on exclusive perks for our regulars, including weekly combos, priority ordering, and diamond credits. Stay tuned or sign up to get early access.",
    },
  ];

  const handleQuestionClick = (index) => {
    setSelectedQuestion(faqData[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedQuestion(null);
  };

  return (
    <>
      <Hero FAQHero={FAQHero} />

      <div className="!py-12 !px-4 lg:!px-8 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#e7b745] text-center !mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 !p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex justify-between items-center border-2 border-[#e7b745]"
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

        {isModalOpen && selectedQuestion && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm "
            onClick={closeModal}
          >
            <div
              className="bg-white/90 backdrop-blur-lg rounded-lg !p-8 max-w-2xl w-full !mx-4 relative transform transition-all duration-300 ease-out border-2 border-[#e7b745]"
              style={{ animation: "modalFadeIn 0.3s ease-out" }}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-2xl font-bold text-gray-800 !mb-4">
                {selectedQuestion.question}
              </h3>
              <p className="text-gray-600">{selectedQuestion.answer}</p>
            </div>
          </div>
        )}

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
    </>
  );
};

export default FAQpage;
