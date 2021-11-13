import React from "react";
import "./Products.css";
const Products = ({ title, id, image, rating, price }) => {
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
      <button className="product__btn product__btn-cart">Add to cart</button>
      <button className="product__btn">Buy Now</button>
    </div>
  );
};

export default Products;
