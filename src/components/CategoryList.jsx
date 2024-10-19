import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalculator, 
  faChartBar, 
  faClipboardList, 
  faSyncAlt, 
  faFont, 
  faLightbulb 
} from '@fortawesome/free-solid-svg-icons'; // Import icons

const icons = {
  'Arithmetic Aptitude': faCalculator,
  'Data Interpretation': faChartBar,
  'Verbal Ability': faClipboardList,
  'Logical Reasoning': faSyncAlt,
  'Verbal Reasoning': faFont,
  'Nonverbal Reasoning': faLightbulb,
};

const CategoryList = ({ categories, handleCategoryClick, currentCategory }) => {
  return (
    <ul className="space-y-4">
      {categories.map((category) => (
        <li
          key={category.name}
          className={`cursor-pointer flex items-center gap-3 p-3 rounded ${
            currentCategory === category ? 'bg-customBlack text-white' : 'text-white'
          } hover:bg-customBlack hover:text-white`}
          onClick={() => handleCategoryClick(category)}
        >
          {/* Icon for each category */}
          <FontAwesomeIcon icon={icons[category.name]} className="text-xl" />

          {/* Category Name */}
          <span>{category.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
