import React, { Profiler, useEffect, useRef, useState } from "react";
import "./Navbar.css";
import profile from "./profile.png";
import logo from "./logo.png";
import search from "./search.png";
import AOS from "aos";
import "aos/dist/aos.css";
import explore from "./../Offers/offer2.png"

function SearchComponent({ onClose }) {
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="search-overlay">
      <div className="search-box" ref={searchRef}>
        <input type="text" placeholder="Search Something" />
        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
}

function Navbar() {

  const [isInsideShopActive, setIsInsideShopActive] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = (e) => {
    e.preventDefault();
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleMouseEnter = () => {
    setIsInsideShopActive(true);
  };

  const handleMouseLeave = () => {
    setIsInsideShopActive(false);
  };

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
          <a href="" className="shop-name" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>SHOP</a>
          <div className={`inside-shop ${isInsideShopActive ? 'active' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
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
          <a href="" onClick={toggleSearch}>
            <img src={search} alt="" />
          </a>
          
        </li>
        <li>
          <a href="">
            <img src={profile} alt="" />
          </a>
        </li>
      </ul>
      {isSearchOpen && <SearchComponent onClose={closeSearch} />}
    </div>
  );
}

export default Navbar;
