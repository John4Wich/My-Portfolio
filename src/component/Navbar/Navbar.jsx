import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logoOrange.png";
import Button from "../../Button/Button";
import { AlignJustify, AlignRight } from "lucide-react";
import { animate, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const buttonRef = useRef(true);
  const burger = useRef(false);

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const objanim = {
    visible: {
      x: 0,
      // transition: { duration: 1.3,type:"spring"}
    },
    hidden: {
      x: 400,
      // transition: { duration: 1.3, type: "spring" },
    },
  };

  

  useEffect(() => {
    console.log("resize run")
//  dont know why it is not working the condition when reload so i  put this code in useeffect
      buttonRef.current.style.display = "none";

    const handleResize = (e) => {
      console.log(e)
      if (window.innerWidth <= 800) {
        buttonRef.current.style.display = "none";
      } else {
        buttonRef.current.style.display = "block";
      }
    };
    window.addEventListener("resize", handleResize);
    
  }, [window.innerWidth <= 800])

  // window.addEventListener("load", () => {
  //     console.log("inner width -",window.innerWidth)
  //   if (window.innerWidth <= 800) {
  //     buttonRef.current.style.display = "none";
  //   } else {
  //     buttonRef.current.style.display = "block";
  //   }
  // });

  

  const closeNavBar = () => {
    setIsBurgerOpen((prev) => !prev);
  };

  const contactScroll = () => {
    setTimeout(() => {
      scroll.scrollTo("contact-id", {
        smooth: true,
        duration: 500,
        offset: -70, // Optional offset if needed
      });
    }, 2000);
  };
  useEffect(()=>{
  console.log("current value -", burger.current.style.display);
  },[burger.current])
  return (
    <div className="navbar flex items-center justify-between px-[10px]">
      <div  className="logo">
        <Link to="/" className="inside-logo flex items-center">
          <motion.img animate={{rotate:180}} transition={{duration:.5 , delay:.5}} src={logo} alt="logo" width="32px" className="text-red-500" />
          <span className="font-extrabold text-3xl text-[rgb(22, 21, 19)]"></span>
        </Link>
      </div>

      <motion.div
        // animate={isBurgerOpen ? "hidden" : "visible"}
        animate={isBurgerOpen ? "visible" : "hidden"}
        // animate={burger.current && burger.current.style.display === 'flex' ? "visible" : "hidden"}
        transition={{ type: "spring", duration: 0.3 }}
        variants={objanim}
        className="list-items"
        ref={burger}

      >
        <div
          className="burderCLick"
          style={{
            display: "none",
            position: "absolute",
            top: 20,
            right: "25px",
          }}
          onClick={() => {
            if (isBurgerOpen) burger.current.style.display = "flex";
            setIsBurgerOpen((prevState) => !prevState);
            console.log(isBurgerOpen);
            
          }}
        >
          <AlignRight />
        </div>

        <NavLink
          onClick={closeNavBar}
          to="/"
          className={({ isActive }) => `${isActive ? "text-orange-500" : ""}`}
        >
          Home
        </NavLink>

        <NavLink
          onClick={closeNavBar}
          to="/about"
          className={({ isActive }) => `${isActive ? "text-orange-500 " : ""}`}
        >
          About
        </NavLink>

        <NavLink
          onClick={closeNavBar}
          to="/contact"
          className={({ isActive }) => `${isActive ? "text-orange-700 " : ""}`}
        >
          Contact
        </NavLink>
      </motion.div>

      <motion.div
        className="burderCLick"
        style={{
          display: "none",
          position: "relative",
          zIndex: "-10",
        }}
        onClick={() => {
          if (!isBurgerOpen) burger.current.style.display = "flex";
          setIsBurgerOpen((prevState) => !prevState);
          console.log(isBurgerOpen);
        }}
      >
        <AlignJustify />
      </motion.div>

      <div ref={buttonRef} className="navButton">
        <Button text={"Let's Talk"} />
      </div>
    </div>
  );
};

export default Navbar;
