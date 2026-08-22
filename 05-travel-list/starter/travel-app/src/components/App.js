import React, { useState } from "react";
import List from "./List";
import Form from "./Form";
import Stats from "./Stats";
import Logo from "./Logo";

const initialDestinations = [
  {
    id: 1,
    description: "Japan",
    quantity: 3,
    packed: true,
  },
  {
    id: 2,
    description: "Canada",
    quantity: 1,
    packed: false,
  },
  {
    id: 3,
    description: "Norway",
    quantity: 2,
    packed: false,
  },
];

function App() {
  const [items, setItems] = useState(initialDestinations);
  // Add new items to the list
  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  //Delete items from the list
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
    // why we use filter instead of delete? - Because filter creates a new array with all elements that pass the test implemented by the provided function. It does not mutate the original array, which is important in React to ensure proper re-rendering of components. Using delete would remove the property from the object but would not create a new array, which could lead to unexpected behavior in the UI.
  };

  // Update the packed status of an item
  const handleTogglePacked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
    // why we use map instead of forEach? - Because map creates a new array with the results of calling a provided function on every element in the calling array. It does not mutate the original array, which is important in React to ensure proper re-rendering of components. Using forEach would iterate over the array but would not create a new array, which could lead to unexpected behavior in the UI.
  };

  // Clear all items from the list
  const handleClearItems = () => {
    window.confirm("Are you sure you want to delete all items?") &&
      setItems([]);
  };

  // Render the app
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} onSetItems={setItems} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleTogglePacked}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
