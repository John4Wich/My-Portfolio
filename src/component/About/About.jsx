import { useEffect } from "react";
import logoOrange from "../../assets/logoOrange.png";
import GifConversion from "../../gifconversion";
import Building from "../../assets/building.json";
import ExpProClient from "../Home/ExpProClient/ExpProClient";
import PhoneAnimation from "../../assets/Phone-animation.json";
import Service from "../Home/Service/Service";
import { motion } from "framer-motion";
import Contact from "./../Contact/Contact";
import "./about.css";

const About = () => {
  const mainText = `You're launching a business and we can help you make it look pretty.`;
  const arrtext = mainText.split(" ");

  const animi = {
    hidden: {
      opacity: 0,
      // y:-100
    },
    visible: (i) => ({
      opacity: 1,
      // y:0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <>
      <div className="container mt-4 w-[90%] mx-auto">
        {/* <h1 className="text-center text-5xl">About Us</h1> */}
        <section className="top">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={animi}
            transition={{ duration: 0.2, type: "spring" }}
            className=" about-main-text font-bold text-[3rem] text-center w-[60%] mx-[auto] text-[#161513] pb-[40px] flex flex-wrap justify-center gap-[10px]"
          >
            {arrtext.map((item, i) => (
              <motion.span variants={animi} key={item} custom={i}>
                {item}
                {console.log(item)}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="sub-text font-[700] flex flex-wrap gap-[15px] mt-[20px] mb-[40px] justify-center items-center"
          >
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
          </motion.div>

          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="gif mx-[auto] flex justify-center align-center relative h-[90vh] overflow-hidden"
            style={{ translate: "0 -50px", alignItem: "center" }}
          >
            <GifConversion data={Building} />
          </motion.div>

          <div className="text-about mt-[-50px]">
            <p className="md:columns-2 lg:px-[60px] font-[500] text-[18px] leading-[32px] text-[#161513] gap-[50px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              officia non ducimus architecto earum nemo repellat, autem deserunt
              eum ea amet porro! Quisquam error ipsum ea debitis facilis saepe.
              Accusamus deleniti architecto quos provident laborum velit
              nostrum, eveniet dignissimos, unde inventore rem expedita cum
              voluptatem perferendis quia placeat tempora mollitia neque aliquam
              ea magnam, est nisi doloribus dolore? Facilis, amet, illum ut sit
              ipsam dolore commodi dolores ducimus doloremque quo maxime
              suscipit, harum beatae tenetur culpa porro inventore! Alias,
              aliquid maiores praesentium cupiditate, quidem corrupti, in
              laborum recusandae commodi provident autem est expedita eveniet?
              Enim ut quasi provident. Maiores, in! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Eius officia non ducimus architecto
              earum nemo repellat, autem deserunt eum ea amet porro! Quisquam
              error ipsum ea debitis facilis saepe. Accusamus deleniti
              architecto quos provident laborum velit nostrum, eveniet
              dignissimos, unde inventore rem expedita cum voluptatem
              perferendis quia placeat temp
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="epc"
          >
            <ExpProClient data={{ exp: 7, project: 50, client: 30 }} />
          </motion.div>

          <motion.div
            initial={{  y: 100,opacity:0 }}
            whileInView={{ y:0,opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration:.5, delay: 0.2, type: "spring" }}
            className="text-about"
          >
            <p
              className="px-[20px] font-[500] md:w-[60%] leading-[32px] text-[18px] mx-[auto] text-[#161513] gap-[50px]"
              style={{ marginBottom: "50px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              officia non ducimus architecto earum nemo repellat, autem deserunt
              eum ea amet porro! Quisquam error ipsum ea debitis facilis saepe.
              Accusamus deleniti architecto quos provident laborum velit
              nostrum, eveniet dignissimos, unde inventore rem expedita cum
              voluptatem perferendis quia placeat tempora mollitia neque aliquam
              ea magnam, es
            </p>
            <p className="px-[20px] font-[500] md:w-[60%] text-[18px] leading-[32px] mx-[auto] text-[rgb(22, 21, 19)] gap-[50px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              officia non ducimus architecto earum nemo repellat, autem deserunt
              eum ea amet porro! Quisquam error ipsum ea debitis facilis saepe.
              <div className="gif mx-[auto] flex justify-center h-[100vh] overflow-hidden ">
                <GifConversion data={PhoneAnimation} />
              </div>
              Accusamus deleniti architecto quos provident laborum velit
              nostrum, eveniet dignissimos, unde inventore rem expedita cum
              voluptatem perferendis quia placeat tempora mollitia neque aliquam
              ea magnam, es
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, type: "spring" }}
            className="service-container my-[100px]"
          >
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
          </motion.div>

          
        </section>
      </div>

      <div id="contact-id" className="contact-section bg-[#fffefe]">
        <Contact />
      </div>
    </>
  );
};

export default About;
