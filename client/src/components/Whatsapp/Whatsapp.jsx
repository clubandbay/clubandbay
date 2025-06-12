import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon from react-icons

const WhatsAppButton = () => {
  const phoneNumber = "12345678900"; // Replace with your WhatsApp number

  return (
    <div className="fixed bottom-10 right-6 !z-[999]">
      <a
        href={`https://wa.me/${919930630900}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200"
      >
        <FaWhatsapp size={24} color="white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
