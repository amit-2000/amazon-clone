import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About";
import NavBar from "./component/NavBar.js";
import Header from "./component/Header";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./Reducer";
export default function App() {
  const {products} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const postStatus = useSelector((state) => state.counter.status);
  const state = useSelector((state) => state.counter);
  console.log("postStatus ", postStatus);
  useEffect(() => {
    return dispatch(fetchProducts({}));
  }, [dispatch]);
  console.log(products);
  console.log(state);
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/checkout" exact element={<Header />} /> */}
          <Route path="/about/:randomId" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
function Login() {
  return <div>This is a login</div>;
}
