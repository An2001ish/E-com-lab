import React, { Profiler, useEffect } from "react";
import "./Navbar.css";
import profile from "./profile.png";
import logo from "./logo.png";
import search from "./search.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="nav-container">
      <a href="" className="logo">
        <img src={logo} alt="" data-aos="fade-right" />
      </a>
      <ul className="nav-items">
        <li>
          <a href="">HOME</a>
        </li>
        <li className="shop">
          <a href="">SHOP</a>
          <div className="inside-shop">
            <div className="man">
              Man
              <ul>
                <li>Jacket</li>
                <li>Suits</li>
                <li>Sports</li>
                <li>Jeans</li>
                <li>T-Shirts</li>
                <li>Shirts</li>
                <li>Sweat-Shirts</li>
                <li>Hoodies</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div className="woman">
              Woman
              <ul>
                <li>Coats</li>
                <li>Outwear</li>
                <li>Dress</li>
                <li>Tops</li>
                <li>T-Shirts</li>
                <li>Shoes</li>
                <li>Sweat-Shirts</li>
                <li>Handbags</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div className="explore">
              Explore New Collections
              <img src="" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                totam.
              </p>
            </div>
          </div>
        </li>
        <li>
          <a href="">CONTACT</a>
        </li>
        <li>
          <a href="">
            <img src={search} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={profile} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
