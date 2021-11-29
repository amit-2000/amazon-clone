import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { addToBasket, increment, removeFromCart } from "../Reducer";
import "./Products.css";
const Products = ({ title, id, image, rating, price }) => {
  const [add, setAdd] = useState(false);
  const state = useSelector((state) => state.counter);
  console.log("Products in basket are  ", state);
  const dispatch = useDispatch();
  const addToCart = (title, id, image, rating, price) => {
    dispatch(addToBasket({ title, id, image, rating, price }));
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <span>$</span>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, idx) => {
              return <p key={idx}>⭐</p>;
            })}
        </div>
      </div>
      <img className="product__image" src={image} alt="product_image" />
      {add ? (
        <button
          className="product__btn product__btn-cart"
          onClick={() => {
            // addToCart(title, id, image, rating, price);
            dispatch(removeFromCart(id));
            setAdd(false);
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="product__btn product__btn-cart"
          onClick={() => {
            addToCart(title, id, image, rating, price);
            setAdd(true);
          }}
        >
          Add to cart
        </button>
      )}

      <button
        className="product__btn"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Products;
 