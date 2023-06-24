import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi"
import "./ProductCard.css"
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="product-item">
      <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={product.image} alt={product.name} />
        <div className="product-name-count">
            <p>{product.name}</p>
            <div>
                <HiOutlinePlus className="sign plus" onClick={(event) => { event.preventDefault(); addToCart(product); }}/>
              <div>
                <HiOutlineMinus className="sign minus" onClick={(event) => { event.preventDefault(); removeFromCart(product); }} />
              </div>
            </div>
        </div>
            <p className="product-price">{formatPrice(product.price)}</p>
            <div className="stars">
                <img src="/stars.png" alt="stars" />
            </div>
        </Link>
    </div>
  )
}

export function formatPrice(price) {
	const formattedPrice = price % 1 === 0 ? price.toFixed(0) : price.toFixed(2)
	return `$${formattedPrice}`;
}

export default ProductCard