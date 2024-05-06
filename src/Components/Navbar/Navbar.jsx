import React, { Profiler, useEffect } from "react";
import "./Navbar.css";
import profile from "./profile.png";
import logo from "./logo.png";
import search from "./search.png";
import AOS from "aos";
import "aos/dist/aos.css";
import explore from "./../Offers/offer2.png"

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
          <a href="" className="shop-name">SHOP</a>
          <div className="inside-shop">
            <div className="man">
              <div className="word">Man</div>
              <ul>
                <li><a href="">Jacket</a></li>
                <li><a href="">Suits</a></li>
                <li><a href="">Sports</a></li>
                <li><a href="">Jeans</a></li>
                <li><a href="">T-Shirts</a></li>
                <li><a href="">Shirts</a></li>
                <li><a href="">Hoodies</a></li>
                <li><a href="">Accessories</a></li>
              </ul>
            </div>
            <div className="woman">
            <div className="word">Woman</div>
              <ul>
                <li><a href="">Coats</a></li>
                <li><a href="">OutWear</a></li>
                <li><a href="">Dress</a></li>
                <li><a href="">Tops</a></li>
                <li><a href="">T-Shirts</a></li>
                <li><a href="">Shoes</a></li>
                <li><a href="">Handbags</a></li>
                <li><a href="">Accessories</a></li>
              </ul>
            </div>
            <div className="explore">
              <div className="word">Explore</div>
              <a href=""><img src={explore} alt="" /></a>
              <p>
                Get exclusive discounts and hampers with your first order!
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
