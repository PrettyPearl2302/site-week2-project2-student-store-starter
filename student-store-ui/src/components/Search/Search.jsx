import React, { useState } from 'react';
import "./Search.css";

const Search = () => {

    const [searchQuery, setSearchQuery] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchQuery(value);
  
    // Filter the products based on the search query
    const filteredProducts = products.filter((product) => {
      // Customize the filtering logic based on your specific requirements
      return product.name.toLowerCase().includes(query.toLowerCase());
    });

  
    setSearchResults(filteredProducts);

    return (
        <div>
            <input type="text" value={query} onChange={handleSearch} placeholder="Search products here" />
        </div>
    )
      
  };

}

export default Search;

  