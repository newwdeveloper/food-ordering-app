function Confirm({ handleClearCart, handleConfirmOrder }) {
  return (
    <div className="confirm">
      <button className="confirmBtn" onClick={handleConfirmOrder}>
        Confirm your Order
      </button>
      <button className="clearCart" onClick={handleClearCart}>
        Clear
      </button>
    </div>
  );
}

export default Confirm;
