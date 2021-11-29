import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, NavBar, Header, Checkout } from "./component/index";
// import Temp from "./component/Temp";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./Reducer";
import { useGetPostsQuery } from "./api/apiSlice";

export default function App() {
  // const { products } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const state = useSelector((state) => state.counter);

  useEffect(() => {
    return dispatch(fetchProducts({}));
  }, [dispatch]);

  // products ? console.log(products) : console.log("Noo products found");
  console.log(state);

  const data = useGetPostsQuery(5);
  console.log("data is ", data);
  // if (data.error) {
  //   console.log(data.error.status);
  // }
  // useEffect(() => {
  //   if (data.data) {
  //     dispatch(addToProducts(data.data));
  //     // dispatch(addToFilterPosts(data.data));
  //   }
  //   return;
  // }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout props={state} />} />
          <Route path="/about/:randomId" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
function Login() {
  return <div>This is a login</div>;
}
