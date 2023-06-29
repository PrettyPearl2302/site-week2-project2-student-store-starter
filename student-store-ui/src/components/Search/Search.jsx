import React, { useState, useContext } from "react";
import { ProductContext } from "../../state/ProductContext";
import { RxHamburgerMenu } from "react-icons/rx"
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { products, setFilteredProducts } = useContext(ProductContext);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);


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

  const toggleCategories = () => {setIsCategoriesOpen(!isCategoriesOpen);};


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
        <div className="help">
        <img src="/help-photo.png" alt="help" />
        </div>
        <div className="cart-image">
        <img src="/my-cart.png" alt="cart image" />
        </div>
      </div>

      <div className={`filter-categories ${isCategoriesOpen ? "open" : ""}`}>
        <div onClick={toggleCategories} className="hamburger-menu">
            <RxHamburgerMenu className="materials-icon"/>
        </div>
        {isCategoriesOpen && (
          <ul className="search-categories">
            <li onClick={() => handleFilter("all")}>All Categories</li>
            <li onClick={() => handleFilter("clothing")}>Clothing</li>
            <li onClick={() => handleFilter("food")}>Food</li>
            <li onClick={() => handleFilter("accessories")}>Accessories</li>
            <li onClick={() => handleFilter("tech")}>Tech</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;