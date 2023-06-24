import React, { useState, useContext } from "react";
import { ProductContext } from "../../state/ProductContext";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriesVisible, setCategoriesVisible] = useState(false);

  const { products, setFilteredProducts } = useContext(ProductContext);

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    const filteredProducts = products.products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    setFilteredProducts({products: filteredProducts});
  };
  
  const handleFilter = (category) => {
    const filteredProducts = products.products.filter((product) =>
      category === "all" ? true : product.category === category
    );

    console.log(filteredProducts);
  
    setFilteredProducts({products: filteredProducts});
  };

  const toggleCategoriesVisibility = () => {
    setCategoriesVisible(!categoriesVisible);
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <input
        className="search-input"
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={`filter-categories ${categoriesVisible ? "visible" : "hidden"}`}>
        <div onClick={toggleCategoriesVisibility} className="toggle-button">
            menu
        </div>
        {categoriesVisible && (
          <div className="search-categories">
            <p onClick={() => handleFilter("all")}>All Categories</p>
            <p onClick={() => handleFilter("clothing")}>Clothing</p>
            <p onClick={() => handleFilter("food")}>Food</p>
            <p onClick={() => handleFilter("accessories")}>Accessories</p>
            <p onClick={() => handleFilter("tech")}>Tech</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;