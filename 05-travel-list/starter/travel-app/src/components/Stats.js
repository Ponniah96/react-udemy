import React from "react";

export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list!</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length; // get packed items length alone by using filter method
  const percentPacked =
    numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You got everything! Ready to go ✈️"
          : `🧳You have ${numItems} items on your list and you already packed ${numPacked} items (${percentPacked}%)`}
      </em>
      <p></p>
    </footer>
  );
}
