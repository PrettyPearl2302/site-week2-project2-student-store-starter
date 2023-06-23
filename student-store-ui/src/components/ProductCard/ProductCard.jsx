import React from 'react';
import "./ProductCard.css"

function Product({ id, name, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}</p>
    </div>
  );
}

export default Product;
