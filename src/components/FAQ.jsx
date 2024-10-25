import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What's the best way to prepare for coding interviews?",
      answer:
        "The best way to prepare is to practice coding problems daily, review concepts in data structures and algorithms, and take mock interviews.",
    },
    {
      question: "How should I approach system design interview questions?",
      answer:
        "For system design interviews, focus on scalability, reliability, and understanding trade-offs. Practice by designing large-scale systems like Twitter or Uber.",
    },
    {
      question: "Are the Striver's SDE sheet questions enough for interview preparation?",
      answer:
        "Striver's SDE sheet is a great start but complement it with real interview experiences and challenges to get better.",
    },
    {
      question: "What are the essential things to cover in core coding subjects?",
      answer:
        "Focus on data structures, algorithms, problem-solving techniques, object-oriented programming, and time complexity analysis.",
    },
    {
      question: "Do you offer any mentorship or career guidance programs?",
      answer:
        "Yes, we offer personalized mentorship programs. Contact us for more details!",
    },
  ];

  return (
    <div className="bg-black text-white py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-600 pb-4 cursor-pointer"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-xl font-medium">{item.question}</h3>
                <span
                  className={`text-xl transition-transform duration-400 ease-in-out ${
                    openIndex === index ? "rotate-0" : "rotate-90"
                  }`}
                >
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="mb-4">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
          <button className="bg-customRed text-white px-6 py-2 rounded-full hover:bg-customPinkHover">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
