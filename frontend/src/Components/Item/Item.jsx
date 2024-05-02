// Item.js
import React, { useState, useContext } from "react";
import "./Item.css";
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useContext(ShopContext);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="item">
      <img
        className="item-image"
        src={props.image}
        alt="product"
        onClick={handleOpenModal}
      />

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Hello</h2>
          </div>
        </div>
      )}

      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-old">
          <s>{props.old_price}</s>
        </div>
        <div className="item-price-new">₹{props.new_price}</div>
        <button onClick={() => handleAddToCart(props.id)} className="cart">
          Add to cart
        </button>
      </div>

      {addedToCart && <p className="added-to-cart-message">Added to cart!</p>}
    </div>
  );
};

export default Item;
