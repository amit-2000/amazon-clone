import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
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

export default function App() {
  const PrivateRoute = ({ path, element: Element, isLoggedin }) => {
    return (
      <Route
        exact
        path={path}
        render={(props) => {
          return isLoggedin ? (
            <Element {...props} />
          ) : (
            <Navigate
              // 'to' can also accept an object !
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }}
      ></Route>
    );
  };

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
