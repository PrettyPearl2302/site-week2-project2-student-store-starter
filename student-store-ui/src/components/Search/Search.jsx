import React, { useState } from 'react';
import "./Search.css";

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchQuery(value);
  
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

  
    setSearchResults(filteredProducts);

    
      
  };

  return (
    <div className="search-bar">
        <div className="search-container">
        <input type="text" className="search-input" value={searchQuery} onChange={handleSearch} placeholder="Search products here" />
        </div>
    </div>
)

}

export default Search;

  