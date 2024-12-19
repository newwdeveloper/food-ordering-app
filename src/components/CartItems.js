import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import checkMark from "../utils/icons8-checkmark.svg"; // Import the checkmark icon
import CartTabelHeader from "./CartTableHeader";
import CartMap from "./CartMap";
import CartSummary from "./CartSummary";
import Confirm from "./Confirm";

function CartItems() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [orderConfirmed, setOrderConfirmed] = useState(false); // State to track if the order is confirmed
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Calculate total quantity and total amount
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.count,
    0
  );
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  const handleRemoveItem = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch the clearCart action to clear all items
  };

  const handleConfirmOrder = () => {
    // Display the order confirmation message
    setOrderConfirmed(true);

    // Set a timeout to redirect the user to the homepage after 2 seconds
    setTimeout(() => {
      navigate("/");
      dispatch(clearCart());
    }, 3000); // 2000ms = 5 seconds delay
  };

  return (
    <div className="cartList">
      <h2>Your Order</h2>
      {orderConfirmed ? (
        <div className="order-confirmation">
          <img src={checkMark} alt="Checkmark" className="heartbeat" />
          <h3>Thank you! Your order is confirmed.</h3>
        </div>
      ) : cartItems && cartItems.length > 0 ? (
        <div className="cart-table">
          <CartTabelHeader />
          <CartMap cartItems={cartItems} handleRemoveItem={handleRemoveItem} />
          <CartSummary
            totalQuantity={totalQuantity}
            totalAmount={totalAmount}
          />
          <Confirm
            handleConfirmOrder={handleConfirmOrder}
            handleClearCart={handleClearCart}
          />
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartItems;
