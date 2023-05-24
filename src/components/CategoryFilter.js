import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  let categoryButtons = categories.map((category) => {
    let className = category === selectedCategory ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;