// import React from "react";

// const FAQs = [
//   {
//     q: "What types of e-waste do you collect?",
//     a: "We collect computers, laptops, printers, phones, tablets, and most electronic devices.",
//   },
//   {
//     q: "Is there a minimum collection amount?",
//     a: "We require a minimum of 10 devices or 50kg. Custom options for smaller amounts available.",
//   },
//   {
//     q: "How do you ensure data security?",
//     a: "We follow secure destruction protocols and provide certificates.",
//   },
//   {
//     q: "How quickly can you arrange a collection?",
//     a: "We schedule collections within 3–5 business days.",
//   },
// ];

// const FAQSection: React.FC = () => (
//   <section className="bg-[#EDF4ED] py-16 px-6">
//     <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
//     <div className="max-w-3xl mx-auto space-y-6">
//       {FAQs.map((faq, index) => (
//         <div
//           key={index}
//           className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
//         >
//           <h4 className="text-green-600 font-semibold mb-2">{faq.q}</h4>
//           <p className="text-gray-700">{faq.a}</p>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default FAQSection;
import React, { useState } from "react";
import * as IoIcons from "react-icons/io5";

const faqs = [
  {
    q: "What is SortUs?",
    a: "SortUs is a platform for sustainable e-waste collection and recycling.",
  },
  {
    q: "How does SortUs work?",
    a: "You schedule a pickup, we collect your e-waste and ensure responsible recycling.",
  },
  {
    q: "Who can use SortUs?",
    a: "Individuals, businesses, and institutions looking to dispose of e-waste ethically.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const ChatIcon = IoIcons.IoChatboxEllipsesOutline as React.ElementType;
  const ChevronIcon = IoIcons.IoChevronForward as React.ElementType;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#EDF4ED] py-20 px-4 md:px-10 overflow-visible min-h-screen">
      <h2 className="text-2xl md:text-3xl text-gray-800 font-semibold text-center mb-20">
        Frequently Asked Questions
      </h2>

      <div className="relative z-10 bg-white w-full max-w-3xl mx-auto rounded-xl shadow-md px-6 py-12 md:px-10 overflow-visible">
        <img
          src="./images/faqgirl.png"
          alt="FAQ Girl"
          className="absolute -left-32 top-1/2 transform -translate-y-1/2 w-40 md:w-30 z-10"
        />

        <div className="space-y-6 z-30 relative">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center border-b border-gray-300 pb-3 cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center gap-3">
                  <ChatIcon className="text-black text-xl" />
                  <span className="text-black font-semibold text-base">
                    {faq.q}
                  </span>
                </div>
                <ChevronIcon
                  className={`text-gray-600 text-lg transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-2 text-sm text-gray-600 px-2">{faq.a}</p>
              )}
            </div>
          ))}
        </div>

        {/* See more link */}
        <div className="text-right mt-6">
          <a
            href="#"
            className="text-green-600 text-sm underline hover:text-green-800"
          >
            see more?
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
