import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import {
  About,
  NavBar,
  Header,
  Checkout,
  Login,
  SignUp,
} from "./component/index";
import { setisLoggedin } from "./Reducer";
// amit1@gmail.com
export default function App() {
  // const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  // localStorage.removeItem("token");
  console.log("token from app", token);
  if (token) {
    dispatch(setisLoggedin(true));
  }
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about/:randomId" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
