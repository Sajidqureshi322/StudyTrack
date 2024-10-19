import React, { useState } from 'react';

const QuizSection = ({ folder }) => {
  const [selectedOptions, setSelectedOptions] = useState(Array(folder.questions.length).fill(''));
  const [results, setResults] = useState(Array(folder.questions.length).fill(null));
  const [totalCorrect, setTotalCorrect] = useState(0); // State to hold total correct answers
  const [isSubmitted, setIsSubmitted] = useState(false); // Track quiz submission

  const handleOptionChange = (index, option) => {
    if (!isSubmitted) { // Prevent changes after submission
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[index] = option;
      setSelectedOptions(newSelectedOptions);
    }
  };

  const handleSubmit = () => {
    const newResults = folder.questions.map((question, index) =>
      selectedOptions[index] === question.correctAnswer 
        ? { text: 'Correct!', isCorrect: true } 
        : { text: `Wrong! Correct answer: ${question.correctAnswer}`, isCorrect: false }
    );
    setResults(newResults);

    // Calculate total correct answers
    const correctCount = selectedOptions.filter((option, index) => option === folder.questions[index].correctAnswer).length;
    setTotalCorrect(correctCount);

    // Mark quiz as submitted
    setIsSubmitted(true);
  };

  return (
    <div className="bg-customBlack p-10 rounded-lg mt-10">
      <h2 className="text-3xl font-bold mb-6">Quiz - {folder.name}</h2>
      {folder.questions.map((q, index) => (
        <div key={index} className="mb-6">
          <p className="text-xl mb-2">{q.question}</p>
          <div className="flex flex-col gap-2">
            {q.options.map((option, idx) => (
              <label key={idx} className="flex items-center">
                <input
                  type="radio"
                  name={`question-${index}`} // Unique name for each question
                  className="form-radio h-4 w-4 text-blue-600"
                  checked={selectedOptions[index] === option}
                  onChange={() => handleOptionChange(index, option)}
                  disabled={isSubmitted} // Disable options after submission
                />
                <span className="ml-2">{option}</span>
              </label>
            ))}
          </div>
          {results[index] && (
            <p className={`mt-2 text-lg ${results[index].isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              {results[index].text}
            </p>
          )}
        </div>
      ))}
      {!isSubmitted && (
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      )}

      {/* Display total correct answers after submission */}
      {isSubmitted && (
        <p className="mt-4 text-xl">
          You got {totalCorrect} out of {folder.questions.length} correct!
        </p>
      )}
    </div>
  );
};

export default QuizSection;
