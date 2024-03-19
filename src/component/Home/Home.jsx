import React, { useEffect, useRef, useState } from "react";
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
import { motion, spring, AnimatePresence } from "framer-motion";

function Home() {
  const ref1 = useRef(null);
  const [handleVisibles, setHandleVisibles] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHandleVisibles(entry.isIntersecting);
    });

    if (ref1.current) observer.observe(ref1.current);
  }, []);

  return (
    <AnimatePresence>
      <div className="container">
        <div className="home w-[100%] mx-[auto]" style={{ maxWidth: "1500px" }}>
          <div className="style-logo">
            <img
              src={animationEffect}
              alt="image for design only"
              className="styleLogo1 size-50 absolute end-[-120px] bottom-[850px]"
            />
            <img
              src={animationEffect}
              alt="image for design only"
              className="styleLogo2 size-50 absolute start-[-150px] bottom-[1500px]"
            />
          </div>

          <div className=" mainContainer w-[100%] ">
            <motion.div
              // animate={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "linear" }}
              className="hero-text"
            >
              <p className="beforelondon">
                HI, I’M PAWAN.&nbsp;
                <span>
                  A CREATIVE
                  <motion.img
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  
                    drag
                    dragConstraints={{ left: 0, right: 0,top:0,bottom:0 }}
                    dragElastic={1}
                    src={logoOrange}
                    alt=""
                    className="w-[54px] border-3 herohash"
                    style={{
                      display: "inline-block",
                      margin: "0px 0px 10px 10px",
                     
                    }}
                  />
                </span>
                DESIGNER{" "}
              </p>
              <p className="london">
                BASED IN <strike></strike>INDIA
              </p>

              <div className="ux font-[600] flex flex-wrap gap-[10px] mt-[20px] mb-[40px]">
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
            </motion.div>

            <motion.div
              // animate={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "linear", delay: 0.3 }}
              className="hero-image flex justify-end"
            >
              <div className="hero-image-insdie">
                <img src={logoOrangepic} alt="" className="hmge" />
                <img src={heroSelected} alt="hero" className="heroSelected" />
              </div>
            </motion.div>
          </div>

          <div className="mb-[100px] ">
            <div className="tape-Component w-[109vw] rotate-[-5deg] mb-[50px] bg-[#161513] text-[#ffffff] absolute left-[-15px]">
              <Tape />
            </div>
          </div>

          <div className="infotabmain p-[100px]  w-[100%]">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 200 }}
              // animate={handleVisibles ? { opacity: 1, y: 0 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="info-section flex gap-[60px] justify-center mt-[50px]"
            >
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
                <p className="text-[3.5rem] font-bold sm:leading-[4rem] sm:mt-[20px] mt-[10px]">
                  Lead product designer and art director.
                </p>
              </div>

              <div className="additional-info ">
                <p className="font-bold text-[2rem] sm:leading-[40px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <p className=" text-[14px] sm:text-[18px]  font-[500] my-[40px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className=" exptabs flex justify-between">
                  <TitleAndDesc title={"BORN IN"} desc={"NEW YORK"} />
                  <TitleAndDesc title={"EXPERIENCE"} desc={"7+ Years"} />
                  <TitleAndDesc title={"DATE OF BIRTH"} desc={"27 June 1992"} />
                </div>
              </div>
            </motion.div>

            <motion.div
              // ref={ref1}
              initial={{ opacity: 0, y: 200 }}
              // animate={true ?  : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="epc"
            >
              <ExpProClient data={{ exp: 7, project: 50, client: 30 }} />
            </motion.div>

            <motion.div
              // ref={ref1}
              initial={{ opacity: 0, y: 200 }}
              // animate={true ? { opacity: 1, y: 0 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="service-container my-[200px]"
            >
              <p>
                <img src={logoOrange} alt="" className="w-[3rem] mx-[auto]" />
              </p>
              <p className="text-center text-[3rem] font-[700]">Services</p>
              <p className="text-center text-[1.125rem] font-[700] leading-[2rem] mt-[.6rem]">
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
            </motion.div>

            <motion.div
              // ref={ref1}
              initial={{ opacity: 0, y: 200 }}
              // animate={true ? { opacity: 1, y: 0 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="article"
            >
              <p>
                <img src={logoOrange} alt="" className="w-[3rem] mx-[auto]" />
              </p>
              <p className="text-center text-[3rem] font-[700]">Articles</p>
              <p className="text-center text-[1.125rem] text-[#161513] font-[600] leading-[2rem] mt-[1rem] opacity-80">
                REGONITIONS & ACCOIMPLISHMENTS
              </p>
              <div className="article-contiainer  mt-[4rem]">
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.3, type: "spring" },
                  }}
                  
                  viewport={{ once: true }}
                >
                  <Article
                    data={{
                      type: "DESIGN",
                      date: "APRIL 28, 2022",
                      title: "Why i moved from Wordpress to Webflow",
                      content: `
                            Lorem ipsum dolor, sit amet consectetur adipisicing tore modi voluptatibus dicta. Reprehenderit facilis eius quibusdam eos nisi?`,
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.3, type: "spring" },
                  }}
                  viewport={{ once: true }}
                >
                  <Article
                    data={{
                      type: "DESIGN",
                      date: "APRIL 26, 2022",
                      title: "What did i learn fromdoing 50+ design sprints",
                      content: `
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet isteptatibus dicta. Reprehenderit facilis eius quibusdam eos nisi?`,
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { delay: 0.7, duration: 0.3, type: "spring" },
                  }}
                  viewport={{ once: true }}
                >
                  <Article
                    data={{
                      type: "BUSINESS & OFFICE",
                      date: "APRIL 26, 2022",
                      title: "Fostering professional growth in your company",
                      content: `
          Lorem ipsum dolor, sit amet consectetur  dicta. Reprehenderit facilis eius quibusdam eos nisi?`,
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              // ref={ref1}
              initial={{ opacity: 0, y: 200 }}
              // animate={true ? { opacity: 1, y: 0 } : {}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#161513] p-[5px] w-[90%] mx-[auto]"
            >
              <NavLink to="/about">
                <Button text={"Browse Article"} color={"black"} />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Home;
