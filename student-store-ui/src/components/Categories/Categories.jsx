import React from "react";
import "./Categories.css";

export default function Categories({ selectCategory }) {
  function handleClick(category) {
    selectCategory(category);
  }

  return (
    <nav className="categories">
      <nav>
        <ul>
          <li>
            <button onClick={() => handleClick("Clothing")}>Clothing</button>
          </li>
          <li>
            <button onClick={() => handleClick("Food")}>Food</button>
          </li>
          <li>
            <button onClick={() => handleClick("Accessories")}>Accessories</button>
          </li>
          <li>
            <button onClick={() => handleClick("Tech")}>Tech</button>
          </li>
          <li>
            <button onClick={() => handleClick("All categories")}>All categories</button>
          </li>
        </ul>
      </nav>
    </nav>
  );
}