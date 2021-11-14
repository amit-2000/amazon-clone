import React from "react";
import { useStateValue } from "../store/StateProvider";
import "./Products.css";
const Products = ({ title, id, image, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToCart = ({ title, id, image, rating, price }) => {
    // add item to my cart
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        image,
        price,
        title,
        rating,
      },
    });
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
            .map((_) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <img className="product__image" src={image} alt="product_image" />
      <button
        className="product__btn product__btn-cart"
        onClick={() => addToCart(id)}
      >
        Add to cart
      </button>
      <button className="product__btn">Buy Now</button>
    </div>
  );
};

export default Products;
