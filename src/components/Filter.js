import React from 'react';

const Filter = ({ onCategoryChange }) => {
  return (
    <select onChange={onCategoryChange}>
      <option value="all">All</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
      <option value="accessories">Accessories</option>
    </select>
  );
};

export default Filter;