import React from "react";

function Filter({ onCategoryChange }) {
  function handleSelectChange(event) {
    onCategoryChange(event.target.value);
  }

  return (
    <select name="filter" onChange={handleSelectChange}>
      <option value="All">All</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}

export default Filter;
