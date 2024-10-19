import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryList from './CategoryList';
import FolderList from './FolderList';
import QuizSection from './QuizSection';
import Breadcrumb from './Breadcrumb'; 


const Aptitude = () => {
  const navigate = useNavigate();
  const categories = [
    {
      name: 'Arithmetic Aptitude',
      description: 'Arithmetic practice and concepts.',
      folders: {
        'Problems on Trains': [
          {
            question: 'A train 100 m long crosses a platform 200 m long in 10 seconds. Find the speed of the train.',
            options: ['36 km/h', '54 km/h', '72 km/h', '108 km/h'],
            correctAnswer: '36 km/h',
          },
          {
            question: 'If a car travels 120 km in 2 hours, what is its speed?',
            options: ['60 km/h', '70 km/h', '80 km/h', '90 km/h'],
            correctAnswer: '60 km/h',
          },
        ],
        'Time and Distance': [
          {
            question: 'A person walks 5 km in 1 hour. How much time will they take to walk 20 km?',
            options: ['2 hours', '3 hours', '4 hours', '5 hours'],
            correctAnswer: '4 hours',
          },
        ],
        'Ratio and Proportion': [
          {
            question: 'If a:b = 2:3, then b:a is?',
            options: ['3:2', '2:3', '1:2', '1:3'],
            correctAnswer: '3:2',
          },
        ],
        'Height and Distance': [],
        'Time and Work': [],
        'Simple Interest': [],
        'Compound Interest': [],
        'Profit and Loss': [],
        'Partnership': [],
        'Percentage': [],
        'Problems on Ages': [],
        'Calendar': [],
        'Clock': [],
        'Average': [],
        'Area': [],
        'Volume and Surface Area': [],
        'Permutation and Combination': [],
        'Numbers': [],
        'Problems on Numbers': [],
        'Problems on H.C.F and L.C.M': [],
        'Decimal Fraction': [],
        'Simplification': [],
        'Square Root and Cube Root': [],
        'Surds and Indices': [],
        'Ratio and Proportion': [],
        'Chain Rule': [],
        'Pipes and Cistern': [],
        'Boats and Streams': [],
        'Alligation or Mixture': [],
        'Logarithm': [],
        'Races and Games': [],
        'Stocks and Shares': [],
        'Probability': [],
        'True Discount': [],
        "Banker's Discount": [],
        'Odd Man Out and Series': [],
      },
    },
    {
      name: 'Data Interpretation',
      description: 'Data and graph-based problem-solving.',
      folders: {
        'Table Charts': [
          {
            question: 'In 2020, Company X had 500 employees. How many employees did they have in 2022 if the number increased by 20% each year?',
            options: ['600', '720', '864', '960'],
            correctAnswer: '720',
          },
        ],
        'Bar Charts': [
          {
            question: 'What is the total revenue in 2020 according to the given chart?',
            options: ['10M', '15M', '20M', '25M'],
            correctAnswer: '20M',
          },
        ],
        'Pie Charts': [
          {
            question: 'In a pie chart showing the percentage of votes received by four candidates, Candidate A received 30%. What fraction of the total votes did A receive?',
            options: ['1/3', '2/5', '3/10', '3/5'],
            correctAnswer: '3/10',
          },
        ],
        'Line Charts': [
          {
            question: 'What was the percentage increase in sales from 2019 to 2020?',
            options: ['10%', '20%', '30%', '40%'],
            correctAnswer: '20%',
          },
        ],
      },
    },
    {
      name: 'Verbal Ability',
      description: 'Data and graph-based problem-solving.',
      folders: {
        'Spotting Errors': [],
        'Synonyms': [],
        'Antonyms': [],
        'Selecting Words': [],
        'Spellings': [],
        'Sentence Formation': [],
        'Ordering of Words': [],
        'Sentence Correction': [],
        'Sentence Improvement': [],
        'Completing Statements': [],
        'Ordering of Sentences': [],
        'Paragraph Formation': [],
        'Cloze Test': [],
        'Comprehension': [],
        'One Word Substitutes': [],
        'Idioms and Phrases': [],
        'Change of Voice': [],
        'Change of Speech': [],
        'Verbal Analogies': [],
      },
    },
    {
      name: 'Logical Reasoning',
      description: 'Data and graph-based problem-solving.',
      folders: {
        'Coding and Decoding': [],
        'Blood Relations': [],
        'Number Series': [],
        'Letter and Symbol Series': [],
        'Verbal Classification': [],
        'Essential Part': [],
        'Analogies': [],
        'Artificial Language': [],
        'Matching Definitions': [],
        'Making Judgments': [],
        'Verbal Reasoning': [],
        'Logical Problems': [],
        'Logical Games': [],
        'Analyzing Arguments': [],
        'Statement and Assumption': [],
        'Course of Action': [],
        'Statement and Conclusion': [],
        'Theme Detection': [],
        'Cause and Effect': [],
        'Statement and Argument': [],
        'Logical Deduction': [],
      },
    },
    {
      name: 'Verbal Reasoning',
      description: 'Data and graph-based problem-solving.',
      folders: {
        'Logical Sequence of Words': [],
        'Blood Relation Test': [],
        'Syllogism': [],
        'Series Completion': [],
        'Cause and Effect': [],
        'Dice': [],
        'Venn Diagrams': [],
        'Cube and Cuboid': [],
        'Analogy': [],
        'Seating Arrangement': [],
        'Character Puzzles': [],
        'Direction Sense Test': [],
        'Classification': [],
        'Data Sufficiency': [],
        'Arithmetic Reasoning': [],
        'Verification of Truth': [],
      },
    },
    {
      name: 'Nonverbal Reasoning',
      description: 'Data and graph-based problem-solving.',
      folders: {
        'Series': [],
        'Analogy': [],
        'Classification': [],
        'Analytical Reasoning': [],
        'Mirror Images': [],
        'Water Images': [],
        'Embedded Images': [],
        'Pattern Completion': [],
        'Figure Matrix': [],
        'Paper Folding': [],
        'Paper Cutting': [],
        'Rule Detection': [],
        'Grouping of Images': [],
        'Dot Situation': [],
        'Shape Construction': [],
        'Image Analysis': [],
        'Cubes and Dice': [],
      },
    },
  ];

  

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [isQuizActive, setIsQuizActive] = useState(false);



  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    setSelectedFolder(null);
    setIsQuizActive(false);
  };

  const handleFolderClick = (folderName, questions) => {
    setSelectedFolder({ name: folderName, questions });
    setIsQuizActive(true);
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Left Sidebar - Topics */}
      <div className="w-1/4 bg-black border border-customBlack rounded-lg p-5  h-screen  flex flex-col">
      
        <h2 className="text-2xl font-bold mb-5">Aptitude Topics</h2>
        <CategoryList categories={categories} handleCategoryClick={handleCategoryClick} currentCategory={currentCategory} />
      </div>

      {/* Right Section - Folders and Quiz */}
      <div className="w-3/4 p-5 h-screen overflow-y-auto">
        <Breadcrumb
          path={[
            { name: 'Aptitude', onClick: () => setCurrentCategory(null) },
            currentCategory && {
              name: currentCategory.name,
              onClick: () => setIsQuizActive(false),
            },
            selectedFolder && { name: selectedFolder.name },
          ].filter(Boolean)}
        />

        {!isQuizActive && currentCategory && (
          <FolderList 
            folders={currentCategory.folders} 
            handleFolderClick={handleFolderClick} 
          />
        )}

        {isQuizActive && selectedFolder && (
          <QuizSection folder={selectedFolder} />
        )}
      </div>
    </div>
  );
};

export default Aptitude;
