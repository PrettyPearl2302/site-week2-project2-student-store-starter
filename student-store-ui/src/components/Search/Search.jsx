import React, { useState } from 'react';

const handleSearch = (event) => {

    const [searchQuery, setSearchQuery] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const query = event.target.value;
    setSearchQuery(query);
  
    // Filter the products based on the search query
    const filteredProducts = products.filter((product) => {
      // Customize the filtering logic based on your specific requirements
      return product.name.toLowerCase().includes(query.toLowerCase());
    });

  
    setSearchResults(filteredProducts);

    <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search products here" />
  };

  export default handleSearch;

  
  