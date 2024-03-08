import React from "react";
import heroSelected from "./../../assets/heroSelected.png";
import logoOrangepic from "./../../assets/logoOrangepic.png";
import heroWithLogo from "./../../assets/hero-with-logo.png";
import "./home.css";
import Button from "../../Button/Button";
import logo from "../../assets/logo.svg";
import logoOrange from "../../assets/logoOrange.png";
import Tape from "../Tape/Tape";
import TitleAndDesc from "./../TitleNDescription/TitleAndDesc";
import ExpProClient from "./ExpProClient/ExpProClient";
import Service from "./Service/Service";
import Article from "./Article/Article";
import animationEffect from "./../../assets/animationEffect.svg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home relative w-[100vw]">

      <div className="style-logo">
        <img src={animationEffect} alt="image for design only" className="styleLogo1 size-50 absolute end-[-120px] bottom-[850px]" />
        <img src={animationEffect} alt="image for design only" className="styleLogo2 size-50 absolute start-[-150px] bottom-[45%]" />
      </div>


      <div className="px-[50px] mainContainer">

        <div className="hero-text">
          <p className="beforelondon">
            HI, I’M PAWAN.&nbsp;
            <span>
            A CREATIVE
              <img
                src={logoOrange}
                alt=""
                className="w-[54px] border-3 herohash"
                style={{ display: "inline-block", margin: "0px 0px 10px 10px" }}
              />
            </span>
              DESIGNER{" "}
          </p>
          <p className="london">
            BASED IN <strike></strike>INDIA
          </p>

          <div className="sub-text flex flex-wrap gap-[10px] mt-[20px] mb-[40px]">
            <p>UX DESIGN</p>
            <i>
              <img
                src={logoOrange}
                alt=""
                className="size-[14px]"
                style={{ display: "inline-block" }}
              />
            </i>
            <p>DEVELOPMENT</p>
            <i>
              <img
                src={logoOrange}
                alt=""
                className="size-[14px]"
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

      <div className="tape-Component w-[110vw] rotate-[-5deg]  mb-[50px] bg-[#161513] text-[#ffffff] relative left-[-50px]">
        <Tape />
      </div>

      <div className="infotabmain p-[100px] w-[100vw]">
        <div className="info-section flex gap-[60px] justify-center">
          <div className="tiltle">
            <p className="font-[700] text-[24px]">
              Pawandeep
              <img
                className="inline-block mx-[10px]"
                src="https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051abbfd0ad8d5_Icon%203.svg"
                alt=""
              />
              Singh
            </p>
            <p className="text-[3.5rem] font-bold leading-[4rem] mt-[20px]">
              Lead product designer and art director.
            </p>
          </div>

          <div className="additional-info ">
            <p className="font-bold text-[2rem] leading-[40px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <p className="text-[18px] font-[500] my-[40px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className=" exptabs flex justify-between">
              <TitleAndDesc title={"BORN IN"} desc={"NEW YORK"} />
              <TitleAndDesc title={"EXPERIENCE"} desc={"7+ Years"} />
              <TitleAndDesc title={"DATE OF BIRTH"} desc={"27 June 1992"} />
            </div>
          </div>
        </div>

        <div className="epc ">
          <ExpProClient data={{ exp: 7, project: 50, client: 30 }} />
        </div>

        <div className="service-container my-[200px]">
          <p>
            <img src={logoOrange} alt="" className="w-[3rem] mx-[auto]" />
          </p>
          <p className="text-center text-[3rem] font-[700]">Services</p>
          <p className="text-center text-[1.125rem] font-[700] leading-[2rem] mt-[1rem]">
            REGONITIONS & ACCOIMPLISHMENTS
          </p>
          <div className="service-blocks flex flex-wrap gap-[20px] justify-center mt-[4rem]">
            <Service
              data={{
                title: "Web Design",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi odio sint obcaecati alias veas est",
              }}
            />
            <Service
              data={{
                title: "Product Design",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi odio sint obcaecati alis est",
              }}
            />
            <Service
              data={{
                title: "UI/UX Design",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi odio sint obcaecati alias ve est",
              }}
            />
            <Service
              data={{
                title: "Art Direction",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eligendi odio sint obcaecati  est",
              }}
            />
          </div>
        </div>

        <div className="article">
          <p className="text-center text-[3rem] font-[700]">Articles</p>
          <p className="text-center text-[1.125rem] text-[#161513] font-[600] leading-[2rem] mt-[1rem] opacity-80">
            REGONITIONS & ACCOIMPLISHMENTS
          </p>
          <div className="article-contiainer  mt-[4rem]">
            <Article
              data={{
                type: "DESIGN",
                date: "APRIL 28, 2022",
                title: "Why i moved from Wordpress to Webflow",
                content: `
          Lorem ipsum dolor, sit amet consectetur adipisicing tore modi voluptatibus dicta. Reprehenderit facilis eius quibusdam eos nisi?`,
              }}
            />
            <Article
              data={{
                type: "DESIGN",
                date: "APRIL 26, 2022",
                title: "What did i learn fromdoing 50+ design sprints",
                content: `
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet isteptatibus dicta. Reprehenderit facilis eius quibusdam eos nisi?`,
              }}
            />

            <Article
              data={{
                type: "BUSINESS & OFFICE",
                date: "APRIL 26, 2022",
                title: "Fostering professional growth in your company",
                content: `
          Lorem ipsum dolor, sit amet consectetur  dicta. Reprehenderit facilis eius quibusdam eos nisi?`,
              }}
            />
          </div>
        </div>

        <div className="bg-[#161513] p-[5px] w-[90%] mx-[auto]">
          <NavLink to='/about'>
          <Button text={"Browse Article"} color={"black"} />
          </NavLink>
        </div>

      </div>
    </div>
  );
}

export default Home;
