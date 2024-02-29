import React from "react";
import { NavLink, Link } from "react-router-dom";
import './navbar.css';
import logo from '../../assets/logoOrange.png'
import Button from '../../Button/Button';


const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between p-[10px]">
      <div className="logo">
        <Link to="/" className="inside-logo flex gap-1 items-center">
          <img src={logo} alt="logo" width='32px' className="text-red-500" /> 
          <span className="font-extrabold text-3xl text-[#171512]">Wick</span>
        </Link>
      </div>

      <div className="list-items">
        <NavLink
          to="/"
          className={({isActive}) =>
            `${isActive ? "text-orange-500" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({isActive}) =>
            `${isActive ? "text-orange-500 " : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({isActive}) =>
            `${isActive ? "text-orange-700 " : ""}`
          }
        >
          Contact
        </NavLink>
      </div>

      <Button text={"Let's Talk"}/>
    </div>
  );
};

export default Navbar;
