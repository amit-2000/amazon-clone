import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import About from "./component/About";
import NavBar from "./component/NavBar.js";
import Header from "./component/Header";

export default function App() {
 
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
