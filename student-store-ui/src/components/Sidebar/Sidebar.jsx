import React, { useState } from "react"
import "./Sidebar.css"
import {FaArrowLeft , FaArrowRight} from "react-icons/fa"
// import CheckoutForm from "../CheckoutForm/CheckoutForm"
// import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

       let arrowIcon;
        if (isOpen) {
      arrowIcon = <FaArrowLeft className="arrow" />;
      } else {
      arrowIcon = <FaArrowRight className="arrow" />;
      } 

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="toggle-btn" onClick={handleToggle}>
          {arrowIcon}
      </div>
    </aside>
  )
}
