import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Reducer";
import "./checkout.css";
// import "./Products.css";
const Checkout = ({ props }) => {
  console.log("checkout state ", props);
  var total = 0;
  const dispatch = useDispatch();
  return (
    <div className="checkout">
      <div className="checkout__headerImage">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout__img"
        />
      </div>
      <div className="checkout__price__dFlex">
        <div className="checkout__product">
          {props.productsBasket.length > 0 ? (
            props.productsBasket.map(
              (prod, idx) => (
                (total = total + prod.price),
                (
                  <div className="product">
                    <div className="product__info">
                      <p className="product__title">{prod.title}</p>
                      <p className="product__price">
                        <span>$</span>
                        <strong>{prod.price}</strong>
                      </p>
                      <div className="product__rating">
                        {Array(prod.rating)
                          .fill()
                          .map((_, idx) => {
                            return <p key={idx}>⭐</p>;
                          })}
                      </div>
                    </div>
                    <img
                      className="product__image"
                      src={prod.image}
                      alt="product_image"
                    />

                    <button
                      className="product__btn product__btn-cart"
                      onClick={() => {
                        // addToCart(title, id, image, rating, price);
                        dispatch(removeFromCart(prod.id));
                      }}
                    >
                      Remove from Cart
                    </button>
                    <button
                      className="product__btn"
                      onClick={() => {
                        // dispatch(increment());
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                )
              )
            )
          ) : (
            <h1 className="no_products_found">No Products in Your Cart !! </h1>
          )}
        </div>
        <div className="checkout__total">
          <h1>Total price : {total}</h1>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
