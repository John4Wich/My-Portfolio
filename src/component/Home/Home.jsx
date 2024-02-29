import React from "react";
import heroSelected from "./../../assets/heroSelected.png";
import logoOrangepic from "./../../assets/logoOrangepic.png";
import heroWithLogo from "./../../assets/hero-with-logo.png";
import "./home.css";
import Button from "../../Button/Button";
import logo from "../../assets/logo.svg";
import logoOrange from "../../assets/logoOrange.png";
import Tape from "../Tape/Tape";
import TitleAndDesc from './../TitleNDescription/TitleAndDesc';
import ExpProClient from './ExpProClient/ExpProClient';

function Home() {
  return (
    <div className="home">

      <div className="px-[50px] mainContainer">
        <div className="hero-text">
          <p className="beforelondon">
            HI, I’M TAYLER. A CREATIVE
            <img
              src={logoOrange}
              alt=""
              className="w-[54px] border-3"
              style={{ display: "inline-block", margin: "0px 0px 10px 10px" }}
            />
            DESIGNER{" "}
          </p>
          <p className="london">
            BASED IN <strike>LONDON</strike>
          </p>

          <div className="sub-text flex gap-5 mt-[20px] mb-[40px]">
            <p>DESIGN</p>
            <i>
              <img
                src={logoOrange}
                alt=""
                className="w-[14px] border-3"
                style={{ display: "inline-block" }}
              />
            </i>
            <p>DEVELOPMENT</p>
            <i>
              <img
                src={logoOrange}
                alt=""
                className="w-[14px] border-3"
                style={{ display: "inline-block" }}
              />
            </i>
            <p>WEBFLOW</p>
          </div>

          <div className="hero-button">
            <Button text={"Got a Project"} color={"black"} />
            <Button text={"Let's Talk"} />
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-insdie">
            <img src={logoOrangepic} alt="" className="hmge" />
            <img src={heroSelected} alt="hero" className="heroSelected" />
          </div>
        </div>
      </div>


      <div className="tape-Component w-[101vw] rotate-[-5deg]  mb-[50px] bg-[#161513] text-[#ffffff] relative left-[-10px]">
        <Tape />
      </div>

      <div className="p-[100px] w-[100vw] ">

      <div className="info-section flex gap-[60px] justify-center">
          
          <div className="tiltle">
            <p className="font-[700] text-[24px]">TYLER
              <img className="inline-block mx-[10px]" src="https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051abbfd0ad8d5_Icon%203.svg" alt="" />
              BARTHHOLD
            </p>
            <p className="text-[3.5rem] font-bold leading-[4rem] mt-[20px]">Lead product designer and art director.</p>
          </div>
          
          <div className="additional-info ">
            <p className="font-bold text-[2rem] leading-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <p className="text-[18px] font-[500] my-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className="flex justify-between">
              <TitleAndDesc title={'BORN IN'} desc={'NEW YORK'}/>
              <TitleAndDesc title={'EXPERIENCE'} desc={'7+ Years'}/>
              <TitleAndDesc title={'DATE OF BIRTH'} desc={'27 June 1992'}/>
            </div>
          </div>

      </div>

      <div className="epc">
        <ExpProClient data={{exp:7,project:50,client:30}} />
      </div>


      </div>

    </div>
  );
}

export default Home;
