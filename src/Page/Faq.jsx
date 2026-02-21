import { useState } from "react";
import useSeo from "../components/hooks/useSeo";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide appliance disposal, electronic disposal, junk pickup, Christmas tree disposal, furniture disposal, dumpster rental, and mattress disposal across Billings, MT."
  },
  {
    question: "How do I schedule a service?",
    answer:
      "You can call us at +1 406-698-1112 or use the contact form on our website to schedule a pickup or service."
  },
  {
    question: "Do you recycle items?",
    answer:
      "Yes! We prioritize eco-friendly disposal whenever possible. Electronics, appliances, and other materials are handled in compliance with local recycling regulations."
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the type and volume of items. Call us for a free estimate, and we’ll provide transparent pricing upfront."
  },
  {
    question: "Can you remove heavy or large items?",
    answer:
      "Absolutely. Our trained team is equipped to handle heavy, bulky, or awkwardly shaped items safely and efficiently."
  },
  {
    question: "Do you offer same-day service?",
    answer:
      "Service availability varies by location and demand. Contact us directly, and we’ll do our best to accommodate urgent requests."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useSeo({
    title:
      "FAQ | LP Services Hauling & Installing in Billings, MT – Junk Removal & Hauling",
    description:
      "Find answers to common questions about LP Services Hauling & Installing in Billings, Montana. Learn about junk removal, appliance disposal, dumpster rentals, and more.",
    keywords:
      "LP Services FAQ Billings MT, Junk removal questions Billings, Hauling service FAQs Montana, Dumpster rental FAQs Billings, Appliance disposal FAQ Billings",
    canonical: "https://lpserviceshaulinginstalling.com/faq",
    author: "LP Services Hauling & Installing",
    robots: "index, follow",
    image: "https://lpserviceshaulinginstalling.com/og-image.jpg",
    url: "https://lpserviceshaulinginstalling.com/faq",
  });
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <span className="text-indigo-600 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 border-t border-gray-200 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
