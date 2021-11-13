import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const NavBar = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header__location">
        <div>
          <LocationOnOutlinedIcon className="header__location_icon" />
        </div>

        <div className="header__option">
          <span className="header_option_line-1 header__option-hello">
            Hello,
          </span>
          <span className="header_option_line-2 header__option-add">
            Select your address
          </span>
        </div>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login" className="header__nav-link">
          <div className="header__option">
            <span className="header_option_line-1">Hello,</span>
            <span className="header_option_line-2">Sign in</span>
          </div>
        </Link>
        <Link to="/" className="header__nav-link">
          <div className="header__option">
            <span className="header_option_line-1">Return </span>
            <span className="header_option_line-2">orders</span>
          </div>
        </Link>
        <Link to="/" className="header__nav-link">
          <div className="header__option">
            <span className="header_option_line-1"> Your </span>
            <span className="header_option_line-2">prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__nav-link">
          <div className="header__option_basket">
            <ShoppingBasketIcon className="header__cart_logo" />
            <span>{3}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
