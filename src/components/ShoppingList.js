import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({
  newItemForm,
  setNewItemForm,
  onItemFormSubmit,
  items,
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchInput, setSearchInput] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(value) {
    setSearchInput(value);
  }

  function itemMatchesString(item) {
    // if search input is empty, render everything
    return (
      !searchInput ||
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === 'All') return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        newItemForm={newItemForm}
        onItemFormSubmit={onItemFormSubmit}
        setNewItemForm={setNewItemForm}
      />
      <Filter
        searchInput={searchInput}
        onSearchChange={onSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) =>
          itemMatchesString(item) ? (
            <Item key={item.id} name={item.name} category={item.category} />
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
