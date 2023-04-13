import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import Home from "./components/Home";
import About from "./components/About";
import WallTiles from "./components/WallTiles";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/about">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                Product
                <ul>
                  <li>Wall Tiles</li>
                  <li>Floor Tiles</li>
                  <li>Special Tiles</li>
                </ul>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wall-tiles" element={<WallTiles />} />
      </Routes>

      <footer>
        <div className="row">
          <div className="about-us">
            <h3>MyTiles</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              dolorum hic voluptatem corporis sapiente, non, pariatur quod
              mollitia id natus minima, cupiditate quidem qui voluptatum earum
              ea nam dolorem accusamus. Quaerat officiis facere deleniti eius
              saepe nam tempora, vel, dicta laudantium modi, hic ratione
              consectetur fuga vero quidem nihil vitae aliquid unde velit. Culpa
              recusandae commodi aliquid iste fugiat magnam! A tempore veniam
              error atque aspernatur maxime quis voluptatem vero!
            </p>
          </div>
          <div className="content">
            <div className="footer-link">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="new-letter">
              <input type="email" name="email" placeholder="enter your email" />
              <input type="submit" value="Gửi" />
            </div>
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
