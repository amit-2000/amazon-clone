import React, { useState, useEffect } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../config/firebase";
import { setisLoggedin } from "../Reducer";
import "./login.css";
function Login() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loggedin, setLoggedin] = useState(state.counter);

  useEffect(() => {
    dispatch(setisLoggedin(loggedin));
  }, [loggedin]);

  const saveCredential = (info) => {
    console.log("working", info.accessToken);
    setLoggedin(true);
    localStorage.setItem("token", info.accessToken);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.length > 0 && email) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          saveCredential(user);

          // localStorage.setItem('token', )
          // dispatch(setisLoggedin(true));
        })
        .catch((error) => {
          // const errorCode = error.code
          // const errorMessage = error.message;
          if (error) {
            alert("Enter valid password and email");
          }
          // ..
        });
    } else {
      alert("Enter valid password and email");
    }
  };

  const handleShowPassword = () => {
    setShow(!show);
    return;
  };

  const handleShowPasswordHideOnMouseOut = () => {
    setShow(false);
    return;
  };

  console.log("is Logged in ?", state.isLoggedin);
  // state.isLoggedin ?  : "";
  if (state.isLoggedin) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="login">
        <Link to="/">
          <img className="login__logo" src="/img" alt="logo" />
        </Link>
        <div className="login__container">
          <h1 className="login__title">Sign in</h1>
          <form>
            <h3>Email</h3>
            <input
              className="login__input"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3>Password</h3>
            <input
              className="login__input"
              type={show ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p
              onMouseDown={handleShowPassword}
              onMouseUp={handleShowPassword}
              onMouseOut={handleShowPasswordHideOnMouseOut}
              className="login__showPassword"
            >
              <RemoveRedEyeIcon className="login__showPassword__eye" />
              show password
            </p>
            <button
              className="login__button"
              type="submit"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </form>
          <p className="login__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            reprehenderit, possimus quam eligendi voluptatum quae! Ut,
            accusantium corporis perspiciatis, nostrum in iure amet error
            laborum nisi
          </p>
          <Link to="/signup" className="login__button_link">
            <button className="login__button ">
              Not have an accout ? create account
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
