import React, { useState } from 'react';
import { FaLink } from "react-icons/fa6"; // Importing the link icon
import { VscFileCode } from "react-icons/vsc"; // Importing the code file icon

// Coding topics and their respective questions with difficulty levels
const codingData = {
  "Array": [
    { id: 1, title: "1. Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
    { id: 2, title: "2. Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" },
  ],
  "String": [
    { id: 3, title: "1. Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
    { id: 4, title: "2. Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Hard" },
  ],
  "Sorting": [
    { id: 5, title: "1. Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", difficulty: "Medium" },
    { id: 6, title: "2. Quick Sort Implementation", link: "#", difficulty: "Hard" },
  ],
};

const getColorForDifficulty = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return "text-green-400";
    case "Medium":
      return "text-yellow-400";
    case "Hard":
      return "text-red-400";
    default:
      return "text-white";
  }
};

const Coding = () => {
  const [selectedTopic, setSelectedTopic] = useState(Object.keys(codingData)[0]);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Left Sidebar - Topics */}
      <div className="w-1/4 bg-black border border-customBlack rounded-lg p-5 h-screen flex flex-col">
        <h2 className="text-2xl font-bold mb-5">Coding Topics</h2>
        {Object.keys(codingData).map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`w-full text-left px-4 py-3 m-2 rounded-lg cursor-pointer ${
              selectedTopic === topic ? "bg-customBlack" : "bg-black"
            } hover:bg-customBlack flex justify-between items-center`}
          >
            <div className="flex items-center">
              <VscFileCode className="mr-2 text-xl" /> {/* Code icon before topic */}
              <span>{topic}</span>
            </div>
            <span className="text-sm text-gray-400">
              ({codingData[topic].length}) {/* Number of questions */}
            </span>
          </button>
        ))}
      </div>

      {/* Right Content - Questions */}
      <div className="w-3/4 bg-black p-6 space-y-4">
        <h2 className="text-2xl font-bold text-white mb-4">
          {selectedTopic} Questions
        </h2>
        <ul className="space-y-3">
          {codingData[selectedTopic].map((question) => (
            <li
              key={question.id}
              className="bg-customBlack p-4 rounded-lg hover:bg-customOb flex items-center justify-between"
            >
              <a
                href={question.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-400 flex items-center"
              >
                <FaLink className="mr-2" /> {/* Link Icon in front */}
                {question.title}
              </a>
              <span className={`ml-4 ${getColorForDifficulty(question.difficulty)} font-semibold`}>
                {question.difficulty} {/* Difficulty Level */}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Coding;
