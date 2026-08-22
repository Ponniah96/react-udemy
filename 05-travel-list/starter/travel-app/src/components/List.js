import React, { useState } from "react";
import ListItem from "./ListItem";

export default function List({
  items,
  onDeleteItem,
  onTogglePacked,
  onClearItems,
}) {
  //implement sorting functionality
  const [sortBy, setSortBy] = useState("input"); // default sort by input order

  const sortedItems = items.map((item) => item); // create a copy of the items array to sort
  if (sortBy === "input") {
    // do nothing, keep the original order
  }

  if (sortBy === "description") {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
    //why localeCompare? - Because it compares two strings in the current locale, returning a number indicating whether the reference string comes before, after, or is the same as the given string in sort order. This is useful for sorting strings alphabetically in a way that respects language-specific rules.
  }
  if (sortBy === "packed") {
    sortedItems.sort((a, b) => a.packed - b.packed);
    //why a.packed - b.packed? - Because it converts the boolean values to numbers (false = 0, true = 1) and subtracts them. This results in false values (0) being sorted before true values (1), effectively sorting the items by their packed status.
  }
  // const sortedItems = [...items].sort((a, b) => {
  //   if (sortBy === "description") {
  //     return a.description.localeCompare(b.description); // sort by description alphabetically
  //   } else if (sortBy === "packed") {
  //     return a.packed - b.packed; // sort by packed status (false first, true last)
  //   } else {
  //     return 0; // input order
  //   }
  // });
  return (
    <div className="list">
      <ul>
        {sortedItems.map((items) => (
          <ListItem
            item={items}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear All</button>
      </div>
    </div>
  );
}
