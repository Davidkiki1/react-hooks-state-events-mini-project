import React from "react";

const CategoryFilter = ({ categories, onCategoryClick, selectedCategory }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? 'selected' : ''}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;