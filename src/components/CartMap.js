function CartMap({ cartItems, handleRemoveItem }) {
  return (
    <div className="cart-items">
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <div className="cart-item-imgbox">
            {item.img ? (
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <span>No Image</span>
            )}
          </div>

          <div className="cart-item-name">{item.name}</div>
          <div className="cart-item-price">₹{item.price}</div>
          <div className="cart-item-qty">{item.count}</div>
          <div className="cart-item-total">
            ₹{(item.price * item.count).toFixed(2)}
          </div>

          <button
            className="remove-item-btn"
            onClick={() => handleRemoveItem(item.name)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartMap;
