import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";
import { wrapIcon } from "../../utlis/IconWrapper";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const faqSections = [
  {
    title: "General FAQ’s",
    image: "/images/faq1.png",
    questions: [
      {
        question: "Is this a question?",
        answer: "Yes, this is the answer to the general FAQ question.",
      },
      {
        question: "Is this a question?",
        answer: "Another helpful answer for users here.",
      },
      {
        question: "Is this a question?",
        answer: "This section contains general information.",
      },
      {
        question: "Is this a question?",
        answer: "You can expand each FAQ for more info.",
      },
    ],
  },
  {
    title: "Pickup & Collection",
    image: "/images/faq2.png",
    questions: [
      {
        question: "Is this a question?",
        answer: "Pickup services can be scheduled in the dashboard.",
      },
      {
        question: "Is this a question?",
        answer: "You’ll get a confirmation SMS after booking.",
      },
      {
        question: "Is this a question?",
        answer: "Make sure your items are ready by the selected time.",
      },
      {
        question: "Is this a question?",
        answer: "Yes, rescheduling is also available.",
      },
    ],
  },
  {
    title: "Marketplace FAQs",
    image: "/images/faq3.png",
    questions: [
      {
        question: "Is this a question?",
        answer: "This is the marketplace-related FAQ answer.",
      },
      {
        question: "Is this a question?",
        answer: "Products must meet listing requirements.",
      },
      {
        question: "Is this a question?",
        answer: "Payment will be credited after successful delivery.",
      },
      {
        question: "Is this a question?",
        answer: "You can track orders from your account.",
      },
    ],
  },
  {
    title: "Business & Compliance",
    image: "/images/faq4.png",
    questions: [
      {
        question: "Is this a question?",
        answer: "Yes, compliance with regulations is maintained.",
      },
      {
        question: "Is this a question?",
        answer: "Certificates can be downloaded after pickup.",
      },
      {
        question: "Is this a question?",
        answer: "We follow all relevant waste disposal norms.",
      },
      {
        question: "Is this a question?",
        answer: "Documentation is sent via email.",
      },
    ],
  },
  {
    title: "Tech & Security",
    image: "/images/faq5.png",
    questions: [
      {
        question: "Is this a question?",
        answer: "Your data is protected using AES-256 encryption.",
      },
      {
        question: "Is this a question?",
        answer: "We do not store your card or bank details.",
      },
      {
        question: "Is this a question?",
        answer: "2FA is available for login security.",
      },
      {
        question: "Is this a question?",
        answer: "Please reset your password regularly.",
      },
    ],
  },
  {
    title: "Support & Feedback",
    image: "/images/faq6.png",
    questions: [
      {
        question: "Is this a question?",
        answer: "Feedback can be submitted through our contact form.",
      },
      {
        question: "Is this a question?",
        answer: "We reply within 24 hours on weekdays.",
      },
      {
        question: "Is this a question?",
        answer: "Support chat is available from 10 AM to 6 PM.",
      },
      {
        question: "Is this a question?",
        answer: "You can also email us at support@sortus.in.",
      },
    ],
  },
];

const FaqPage: React.FC = () => {
  const FaChevronUp = wrapIcon(FaIcons.FaChevronUp);
  const FaChevronDown = wrapIcon(FaIcons.FaChevronDown);
  const BiMessageDetail = wrapIcon(BiIcons.BiMessageDetail);
  const [openIndexes, setOpenIndexes] = useState<{
    [key: string]: number | null;
  }>({});

  const toggleAnswer = (sectionIndex: number, questionIndex: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [sectionIndex]:
        prev[sectionIndex] === questionIndex ? null : questionIndex,
    }));
  };

  return (
    <div className="min-h-screen bg-[#e6f4ea] py-6 font-sans w-full px-4 sm:px-6 md:px-10 lg:px-20 overflow-x-hidden">
      {/* Back button */}
      <div className="mb-2">
        <Link
          to="/#faq"
          className="text-white text-xs px-4 py-1 rounded bg-green-700 hover:bg-green-800"
        >
          ← BACK TO FAQ
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-extrabold text-center text-black mb-8">
        FAQ
      </h1>

      {/* Sections */}
      <div className="flex flex-col gap-10 w-full">
        {faqSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="text-lg font-bold mb-2">{section.title}</h2>
            <div className="bg-white shadow rounded-xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full">
              {/* Left: Questions */}
              <div className="w-full md:w-2/3 flex flex-col gap-4">
                {section.questions.map((q, qIndex) => {
                  const isOpen = openIndexes[sectionIndex] === qIndex;
                  return (
                    <div key={qIndex} className="text-sm text-black">
                      <div
                        className="flex justify-between items-center border-b-2 border-green-600 pb-1 cursor-pointer"
                        onClick={() => toggleAnswer(sectionIndex, qIndex)}
                      >
                        <div className="flex items-center gap-2">
                          <BiMessageDetail className="text-green-600" />
                          <span>{q.question}</span>
                        </div>
                        {isOpen ? (
                          <FaChevronUp className="text-gray-500 text-xs" />
                        ) : (
                          <FaChevronDown className="text-gray-500 text-xs" />
                        )}
                      </div>
                      {isOpen && (
                        <p className="text-gray-700 mt-2 ml-6 border-l-2 border-green-600 pl-3">
                          {q.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right: Image */}
              <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full max-w-[260px] md:max-w-[300px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
