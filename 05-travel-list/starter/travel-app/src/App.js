import React, { useState } from "react";
function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <List />
      <Stats />
    </div>
  );
}

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
function Logo() {
  return (
    <header>
      <h1>🏝️ Far Away 🧳</h1>
    </header>
  );
}
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    console.log(description, quantity);
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    console.log(newItem);
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

function ListItem({ item }) {
  return (
    <li key={item.id}>
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function List() {
  return (
    <div className="list">
      <ul>
        {initialDestinations.map((destination) => (
          <ListItem item={destination} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <p>🧳You have X items to be packed</p>
    </footer>
  );
}

export default App;
