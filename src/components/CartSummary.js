function CartSummary({ totalQuantity, totalAmount }) {
  return (
    <div className="cart-summary">
      <div className="summary-item">
        <strong>Total Quantity:</strong> {totalQuantity}
      </div>
      <div className="summary-item">
        <strong>Total Amount:</strong> ₹{totalAmount.toFixed(2)}
      </div>
    </div>
  );
}

export default CartSummary;
