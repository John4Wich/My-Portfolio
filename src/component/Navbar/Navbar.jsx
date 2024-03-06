import React, { useEffect, useRef,useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logoOrange.png";
import Button from "../../Button/Button";
import { AlignJustify,AlignRight  } from 'lucide-react';
 
const Navbar = () => {
  const buttonRef = useRef(true);
  const burger = useRef(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  

  window.addEventListener('load',()=>{
  if (window.innerWidth <= 800) {
        buttonRef.current.style.display = "none";
      }else{
        buttonRef.current.style.display = "block";
      }
  })

  useEffect(() => {
    const handleResize = () => {
      
      if (window.innerWidth <= 800) {
        buttonRef.current.style.display = "none";
      }else{
        buttonRef.current.style.display = "block";
      }
    };
    window.addEventListener("resize", handleResize);


  }, []); // empty dependency array means it runs only once after the initial render



  return (
    <div className="navbar flex items-center justify-between p-[10px]">
      <div className="logo">
        <Link to="/" className="inside-logo flex gap-1 items-center">
          <img src={logo} alt="logo" width="32px" className="text-red-500" />
          <span className="font-extrabold text-3xl text-[#171512]">Wick</span>
        </Link>
      </div>

      <div className="list-items" ref={burger}>
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive ? "text-orange-500" : ""}`}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => `${isActive ? "text-orange-500 " : ""}`}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `${isActive ? "text-orange-700 " : ""}`}
        >
          Contact
        </NavLink>
      </div>

      <div className="burderCLick" 
      style={{display:"none"}} 
      onClick={(event)=>{
        burger.current.classList.toggle("flex");
        setIsBurgerOpen(prevState => !prevState)
      }}>
       {isBurgerOpen ? <AlignRight /> : <AlignJustify />}
      </div>

      <div ref={buttonRef} className="navButton border-2 border-red-500">
        <Button text={"Let's Talk"}  />
      </div>
    </div>
  );
};

export default Navbar;
