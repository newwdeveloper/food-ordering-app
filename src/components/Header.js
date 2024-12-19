import logo from "../utils/logoApp.jfif";
import hamb from "../utils/icons8-hamburger-menu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import cartimg from "../utils/icons8-food-cart-48.png";

const Header = () => {
  const [btnNameUpdate, setBtnNameUpdate] = useState("login");
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  // Get cart items from Redux store
  const cartItems = useSelector((store) => store.cart.items);

  // Calculate the total quantity of items in the cart (sum of counts for each item)
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.count,
    0
  );

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="app logo" />
        </Link>
      </div>

      <div className={`nav-items ${isNavVisible ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" className="no-underline">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="no-underline">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="no-underline">
              CONTACT
            </Link>
          </li>
          <div>
            <Link to="/CartItem" className="cartLi">
              <div className="cart-img">
                <img src={cartimg} alt="cart" />
                <span id="qty">{totalCartQuantity}</span>
              </div>
            </Link>
          </div>

          <button
            className="user"
            onClick={() => {
              setBtnNameUpdate(btnNameUpdate === "login" ? "logout" : "login");
            }}
          >
            {btnNameUpdate}
          </button>
        </ul>
      </div>

      <div className="hamBerger" onClick={toggleNav}>
        <img src={hamb} className="menuBar" alt="menu-bar" />
      </div>
    </div>
  );
};

export default Header;
