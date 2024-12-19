import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function OrderInput({ resData }) {
  const [count, setCount] = useState(0);

  // Define internal functions for handling increment and decrement
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const dispatch = useDispatch();

  const handleItem = () => {
    // Pass item data (resData) and count to Redux action
    dispatch(addItem({ ...resData, count }));

    setCount(0);
  };

  return (
    <div className="order-input">
      <button className="reduce" onClick={handleDecrement}>
        -
      </button>
      <div className="count">{count}</div>
      <button className="addition" onClick={handleIncrement}>
        +
      </button>
      <button
        className="submitOrder"
        onClick={handleItem}
        disabled={count === 0}
      >
        Submit order
      </button>
    </div>
  );
}

export default OrderInput;
