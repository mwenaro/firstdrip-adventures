'use client'; // Ensure this component is treated as a Client Component

// import { MessageCircle } from "lucide-react";
import { SocialIcon } from "react-social-icons";

export function FloatingWhatsAppButton() {
  const phoneNumber = process.env.WHATSAPP_NUMBER || +254792982134; // WhatsApp number from environment variables
  const message = "Hello, I would like to inquire about your tour packages."; // Default message

  const handleClick = () => {
    if (!phoneNumber) {
      console.error("WhatsApp number is not defined.");
      return;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // If the WhatsApp number is not defined, don't render the button
  if (!phoneNumber) {
    console.warn("WhatsApp number is missing. Floating WhatsApp button will not be rendered.");
    return null;
  }

  return (
    <div
      // className="z-50 fixed bottom-8 right-8 bg-green-500 p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all"
      className="z-50 fixed bottom-8 right-8  rounded-full shadow-lg cursor-pointer transition-all"

      onClick={handleClick}
    >
      {/* <MessageCircle className="text-white" size={32} /> */}
      <SocialIcon className="text-white w-full h-full text-3xl" url="https://www.whatsapp.com/" />
    </div>
  );
}