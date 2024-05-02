import React, { useContext, useState } from "react";
import './Cartitems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const [showCheckout, setShowCheckout] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: ''
    });
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [error, setError] = useState('');

    const totalPrice = all_product.reduce((total, product) => {
        return total + (cartItems[product.id] * product.new_price);
    }, 0);

    const handleCheckout = () => {
        setShowCheckout(true);
    }

    const handleCloseCheckout = () => {
        setShowCheckout(false);
    }

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.address) {
            setError('Please fill in all fields.');
            return;
        }
        // Here you can perform the checkout process, e.g., send data to server, clear the cart, etc.
        console.log("Checkout data:", formData);
        // Clear the cart after successful checkout
        // clearCart();
        setOrderPlaced(true);
    }

    const renderCheckoutForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} required />
                <label htmlFor="address">Address:</label>
                <textarea id="address" name="address" value={formData.address} onChange={handleFormChange} required />
                <button type="submit">Place Order</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        );
    }

    const renderCheckoutSuccess = () => {
        return (
            <div>
                <p>Thank you for your order!</p>
                <p>Total Price: ₹{totalPrice}</p>
            </div>
        );
    }

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((product) => {
                const quantity = cartItems[product.id];
                if (quantity > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cartitems-format">
                                <img src={product.image} alt="" className="carticon-product-icon"/>
                                <p>{product.name}</p>
                                <p>₹{product.new_price}</p>
                                <button className="cartitems-quantity">{quantity}</button>
                                <p>₹{product.new_price * quantity}</p>
                                <img src={remove_icon} onClick={() => removeFromCart(product.id)} alt=""/>
                            </div>
                            <hr/>
                        </div>
                    );
                }
                return null;
            })}
            {/* Display total price */}
            <div className="cart-total">
                <p>Total: ₹{totalPrice}</p>
            </div>
            {/* Checkout button */}
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
            {/* Render checkout form or success message */}
            {showCheckout && !orderPlaced ? renderCheckoutForm() : null}
            {orderPlaced ? renderCheckoutSuccess() : null}
        </div>
    )
}

export default CartItems;
