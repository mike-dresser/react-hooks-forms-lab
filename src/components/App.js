import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import Header from './Header';
import itemData from '../data/items';
import { v4 as uuid } from 'uuid';

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [newItemForm, setNewItemForm] = useState({
    name: '',
    category: 'Produce',
  });

  function onItemFormSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: newItemForm.name,
      category: newItemForm.category,
    };
    setItems([...items, newItem]);
    setNewItemForm({ name: '', category: 'Produce' });
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={'App ' + (isDarkMode ? 'dark' : 'light')}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
        newItemForm={newItemForm}
        setNewItemForm={setNewItemForm}
        onItemFormSubmit={onItemFormSubmit}
        items={items}
      />
    </div>
  );
}

export default App;
