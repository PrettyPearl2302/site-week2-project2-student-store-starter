import { useContext, useState } from "react";
import { MdFactCheck } from "react-icons/md";
import "./CheckoutForm.css"
import { ProductContext } from "../../state/ProductContext";
import { formatPrice } from "../ProductCard/ProductCard"; 

const CheckoutForm = () => {
  const { cartItems, setCartItems } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [receiptVisible , setReceiptVisible] = useState(false);
  const [receiptDetails , setReceiptDetails] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setErrorMessage("Please fill out the name and email fields.");
      return
    } else {
      if (!cartItems.length) return setErrorMessage("You need items in the cart to checkout!")

      setErrorMessage("");
      console.log("Checkout successful!");
    }

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxRate = 0.9;
    const taxes = taxRate;
    const total = subtotal + taxes;

    const receipt = {
      name,
      email,
      items: cartItems,
      subtotal,
      taxes,
      total,
    };

    setName("");
    setCartItems([]);
    setEmail("");
    setAgreeTerms(false);

    setReceiptVisible(true);
    console.log(receiptVisible)
    setReceiptDetails(receipt);
  };


  return (
    <div className="checkout-form-container">
      <h3 className="form-title">Checkout Form</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              checked={agreeTerms}
              onChange={handleCheckboxChange}
            />
            I agree to the terms and conditions
          </label>
        </div>
        <button className="submit-button" type="submit" disabled={!agreeTerms}>
          Checkout
        </button>
      </form>

      <div className="checkout-info">
        <div className="checkout-title-icon">
          <h4 className="info-title">Checkout Info</h4>
          <MdFactCheck className="info-icon" />
        </div>
        <p className="info-text">
          See receipt when you check out. 
        </p>
      </div>


      {receiptVisible && (
      <div className="receipt">
          <h3 className="receipt-title">Receipt: </h3>
          <div className="receipt-details">
            <p className="receipt-label">Name: {receiptDetails.name}</p>
            <p className="receipt-label">Email: {receiptDetails.email}</p>
            <p className="receipt-label">Items:</p>
            <ul className="items">
              {receiptDetails.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - Quantity: {item.quantity} - Price: {formatPrice(item.price)}
                  </li>
                ))}
            </ul>
            <p className="receipt-label">Subtotal: {formatPrice(receiptDetails.subtotal)}</p>
            <p className="receipt-label">Tax: {formatPrice(receiptDetails.taxes)}</p>
            <p className="receipt-label">Total: {formatPrice(receiptDetails.total)}</p>

          </div>
      </div>
      )}
    </div>
  );
};

export default CheckoutForm;