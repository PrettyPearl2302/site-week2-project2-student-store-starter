import React, { useState } from 'react';
import "./Search.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search functionality here
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setSearchResults(filteredProducts);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search products here"
          />
          <button className="searchBtn" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
