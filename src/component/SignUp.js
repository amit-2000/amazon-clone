import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "./login.css";
// import { auth } from "../config/firebase";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "../config/firebase";
function SignUp() {
  // const state = useSelector((state) => state.counter);
  // console.log("State from Login ", state);
  console.log("db : ", "auth :", auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    if (password.length > 0 && email) {
      console.log("Email ", email, "password ", password);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code
          const errorMessage = error.message;
          console.log(errorMessage);
          if (errorMessage) {
            console.log("Email is ", email);
            alert("Email already exist");
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

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="/img" alt="logo" />
      </Link>
      <div className="login__container">
        <h1 className="login__title">Sign Up</h1>
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
            onClick={handleRegister}
          >
            Sign up
          </button>
        </form>
        <p className="login__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          reprehenderit, possimus quam eligendi voluptatum quae! Ut, accusantium
          corporis perspiciatis, nostrum in iure amet error laborum nisi
        </p>
        <Link to="/login" className="login__button_link">
          <button className="login__button login__button_link">
            Already have an acoount ? Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
