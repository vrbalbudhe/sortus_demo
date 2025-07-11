import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/io5";
import { wrapIcon } from "../../utlis/IconWrapper";

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
  const IoChatboxEllipsesOutline = wrapIcon(FaIcons.IoChatboxEllipsesOutline);
  const IoChevronForward = wrapIcon(FaIcons.IoChevronForward);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-[#EDF4ED] py-16 px-4 md:px-10 overflow-x-hidden"
    >
      <h2 className="text-3xl text-gray-800 font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="relative z-10 bg-white w-full max-w-4xl mx-auto rounded-3xl shadow-md px-6 py-10 md:px-12 overflow-hidden">
        <div className="absolute top-4 left-4 md:left-10 w-10 h-10 md:w-[38px] md:h-[38px]">
          <img
            src="/images/mark.png"
            alt="Question Badge"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left image */}
          <div className="md:w-1/3 w-full flex justify-center md:justify-start">
            <img
              src="/images/faqboy.png"
              alt="FAQ Character"
              className="w-24 md:w-36 max-w-full"
            />
          </div>

          {/* Right Q&A section */}
          <div className="md:w-2/3 w-full space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center border-b border-gray-300 pb-3 cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <span className="text-black font-semibold text-base flex items-center gap-2">
                    <IoChatboxEllipsesOutline className="text-green-600 text-xl" />
                    {faq.q}
                  </span>
                  <IoChevronForward
                    className={`text-gray-600 text-xl transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-sm text-gray-600">{faq.a}</p>
                )}
              </div>
            ))}

            <div className="flex text-right mt-4">
              <Link
                to="/faq-more"
                className="text-green-600 text-sm underline hover:text-green-800"
              >
                See more?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
