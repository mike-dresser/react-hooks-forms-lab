import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ItemForm({ newItemForm, setNewItemForm, onItemFormSubmit }) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newItemForm.name}
          onChange={(e) =>
            setNewItemForm({ ...newItemForm, name: e.target.value })
          }
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={newItemForm.category}
          onChange={(e) =>
            setNewItemForm({ ...newItemForm, category: e.target.value })
          }
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
