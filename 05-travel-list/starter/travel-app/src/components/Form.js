import React, { useState } from "react";

export default function Form({ onAddItem, onSetItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  //We can't use the items state here because it is not in the same component as the List component. We can lift the state up to the App component and pass it down as props to the Form and List components. But for now, we will just log the new item to the console.
  // const [items, setItems] = useState([]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!description) return;
  //   const newItem = {
  //     id: Date.now(),
  //     description,
  //     quantity,
  //     packed: false,
  //   };
  //   // setItems((items) => items.push(newItem)); // This is wrong because push() returns the new length of the array, not the array itself. So we should use the spread operator to create a new array with the new item added.
  //   setItems((items) => [...items, newItem]);
  //   console.log(items);
  //   console.log(newItem);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    // onAddItem(newItem);
    onSetItems((items) => [...items, newItem]);
    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add New Destination</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => {
          return i + 1;
        }).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
