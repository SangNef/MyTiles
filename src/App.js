import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./Images/logo.png";
import Home from "./components/Home";
import About from "./components/About";
import WallTiles from "./components/WallTiles";
import Contact from "./components/Contact";

const App = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav ref={navRef}>
          <ul className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              Product
              <label>
                <input type="checkbox" unchecked />
                <i class="fa-solid fa-angle-down"></i>
              </label>
              <ul>
                <li>
                  <a href="/wall-tiles">Wall Tiles</a>
                </li>
                <li>Floor Tiles</li>
                <li>Special Tiles</li>
              </ul>
            </li>
          </ul>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <i class="fa-solid fa-angles-left"></i>
          </button>
        </nav>
        <button className="nav-btn nav-open-btn" onClick={showNavbar}>
          <i class="fa-solid fa-bars"></i>
        </button>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wall-tiles" element={<WallTiles />} />
      </Routes>

      <footer>
        <div className="footer-row">
          <div className="tiles-content">
            <h3>MyTiles</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
              suscipit.
            </p>
          </div>
          <div className="get-update">
            <h3>Subrribe to get important updates</h3>
            <label>
              <input type="email" />
              <button className="send-btn">
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </label>
          </div>
          <div className="follow">
            <h3>Follow Us</h3>
            <button className="follow-btn">
              <i class="fa-brands fa-discord"></i>
            </button>
            <button className="follow-btn">
              <i class="fa-brands fa-instagram"></i>
            </button>
            <button className="follow-btn">
              <i class="fa-brands fa-facebook"></i>
            </button>
          </div>
          <div className="call-us">
            <h3>Call Us</h3>
            <p>(+84) 522943795</p>
          </div>
        </div>
        <div className="copyright">
          <p>CopyRight &copy; 2023 | My Tiles | Code By Sang</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
