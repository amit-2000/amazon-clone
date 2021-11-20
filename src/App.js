import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/About";
import NavBar from "./component/NavBar.js";
import Header from "./component/Header";
import { useDispatch } from "react-redux";
import { getProducts } from "./Reducer";
export default function App() {
  const { products } = useSelector((state) => state.counter);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    return dispatch(getProducts());
  }, [1]);
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
