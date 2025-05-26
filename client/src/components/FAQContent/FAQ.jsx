// src/FAQ.js
import React, { useState } from 'react';
import FAQimg from '../../assets/burger.jpg';
import ScannerImg from '../../assets/FAQ_scanner.jpg'; 
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';

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
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-[100px] !py-10 bg-textColo FAQ-Bg">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl !text-[#e7b745] sm:text-4xl font-bold !mb-4">
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#e7b745] !mr-2 !mb-2.5"></span>
            FAQ
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#e7b745] !ml-2 !mb-2.5"></span>
          </h2>
          <p className="text-base sm:text-lg text-[#e7b745] !mb-8 sm:!mb-12">
            Frequently Asked Questions
          </p>
        </div>
        <div className="flex flex-col items-center gap-10 justify-between md:flex-row !mx-5">

          {/* scanner */}
          <div className="flex-1 relative">
            <img src={FAQimg} className='w-full rounded-md h-[350px] sm:h-[500px] object-cover' alt="FAQ visual" />
            <img
              src={ScannerImg}
              alt="Scanner"
              className="absolute right-0 !bottom-0 w-20 h-20 sm:w-34 sm:h-34"
            />
          </div>

          {/* FAQ Accordion */}
          <div className="flex-1 !space-y-4 text-[#ffffff]">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-[#e7b745] rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out">
      <div
        className="border-2 border-[#e7b745] rounded-xl !p-4 cursor-pointer flex justify-between items-center transition-all duration-300 ease-in-out"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span
          className={`transform transition-transform text-[#0b3171] duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          ▼
        </span>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'
          } bg-black border-t border-[#e7b745]`}
      >
        <p className="!p-4 text-[#ffffff]">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
