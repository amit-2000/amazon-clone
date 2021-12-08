import React from "react";
import "./Header.css";
import Products from "./Products";
import Footer from "./Footer";
const Header = () => {
  return (
    <div className="home">
      <img
        className="home__banner"
        src="https://m.media-amazon.com/images/I/615ta1xVw9L._SX3000_.jpg"
        alt="banner"
      />
      <div className="home__row home__row-topMargin">
        <Products
          id={1}
          title="Duplicate"
          price={78}
          rating={5}
          image="https://m.media-amazon.com/images/I/61FjVQa2R5L._AC_SY400_.jpg"
        />
        <Products
          id={2}
          title="This site can’t be reachedCheck if there is a typo in amitperane.io.
If spelling is correct, try running Windows Network Diagnostics.
"
          price={79}
          rating={5}
          image="https://m.media-amazon.com/images/I/71BVHds3lNL._AC_SY400_.jpg"
        />
      </div>
      <div className="home__row">
        <Products
          id={3}
          title="This site can’t be reachedCheck if there is a typo in amitperane.io.
If spelling is correct, try running Windows Network Diagnostics.
"
          price={9}
          rating={5}
          image="https://m.media-amazon.com/images/I/41laAYFqMFL._AC_SY400_.jpg"
        />
        <Products
          id={4}
          title="This site can’t be reachedCheck if there is a typo in amitperane.io.
If spelling is correct, try running Windows Network Diagnostics.
"
          price={29}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OP/BTS/D14264916_IN_Printers_OP_GW_revamp_nov19_dashbord_Card_2X_4._SY608_CB667376048_.jpg"
        />
        <Products
          id={5}
          title="This site can’t be reachedCheck if there is a typo in amitperane.io.
If spelling is correct, try running Windows Network Diagnostics.
"
          price={209}
          rating={5}
          image="https://m.media-amazon.com/images/I/41mu2ceVWuL._AC_SY400_.jpg"
        />

        <Products
          id={6}
          title="This site can’t be reachedCheck if there is a typo in amitperane.io.
If spelling is correct, try running Windows Network Diagnostics.
"
          price={39}
          rating={5}
          image="https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        />
      </div>
      <div className="home__row">
        <Products
          id={7}
          title="This site can’t be reachedCheck if there is a typo in amitperane.io.
If spelling is correct, try running Windows Network Diagnostics.
"
          price={20}
          rating={5}
          image="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Header;
