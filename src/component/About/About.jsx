import { useEffect } from "react";
import logoOrange from "../../assets/logoOrange.png";
import GifConversion from "../../gifconversion";
import Building from "../../assets/building.json";
import ExpProClient from "../Home/ExpProClient/ExpProClient";
import PhoneAnimation from "../../assets/Phone-animation.json";
import Service from "../Home/Service/Service";

const About = () => {
  return (
    <div className="container border-2 border-red-600 mx-auto">
      {/* <h1 className="text-center text-5xl">About Us</h1> */}
      <section className="top">
        <p className="font-bold text-[3rem] text-center w-[50%] mx-[auto] text-[#161513] pb-[40px]">
          You're launching a business and we can help you make it look pretty.
        </p>

        <div className="sub-text flex flex-wrap gap-[10px] mt-[20px] mb-[40px]  justify-center items-center">
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

        <div
          className="gif mx-[auto] flex justify-center "
          style={{ translate: "0 -50px" }}
        >
          <GifConversion data={Building} />
        </div>
        <div className="text-about mt-[-100px]">
          <p className="columns-2 px-[60px] font-[500] text-[18px] leading-[32px] text-[#161513] gap-[50px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            officia non ducimus architecto earum nemo repellat, autem deserunt
            eum ea amet porro! Quisquam error ipsum ea debitis facilis saepe.
            Accusamus deleniti architecto quos provident laborum velit nostrum,
            eveniet dignissimos, unde inventore rem expedita cum voluptatem
            perferendis quia placeat tempora mollitia neque aliquam ea magnam,
            est nisi doloribus dolore? Facilis, amet, illum ut sit ipsam dolore
            commodi dolores ducimus doloremque quo maxime suscipit, harum beatae
            tenetur culpa porro inventore! Alias, aliquid maiores praesentium
            cupiditate, quidem corrupti, in laborum recusandae commodi provident
            autem est expedita eveniet? Enim ut quasi provident. Maiores, in!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            officia non ducimus architecto earum nemo repellat, autem deserunt
            eum ea amet porro! Quisquam error ipsum ea debitis facilis saepe.
            Accusamus deleniti architecto quos provident laborum velit nostrum,
            eveniet dignissimos, unde inventore rem expedita cum voluptatem
            perferendis quia placeat temp
          </p>
        </div>

        <div className="epc border-2 border-red-500">
          <ExpProClient data={{ exp: 7, project: 50, client: 30 }} />
        </div>

        <div className="text-about">
          <p
            className="px-[20px] font-[500] w-[60%] leading-[32px] text-[18px] mx-[auto] text-[#161513] gap-[50px]"
            style={{ marginBottom: "50px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            officia non ducimus architecto earum nemo repellat, autem deserunt
            eum ea amet porro! Quisquam error ipsum ea debitis facilis saepe.
            Accusamus deleniti architecto quos provident laborum velit nostrum,
            eveniet dignissimos, unde inventore rem expedita cum voluptatem
            perferendis quia placeat tempora mollitia neque aliquam ea magnam,
            es
          </p>
          <p className="px-[20px] font-[500] w-[60%] text-[18px] leading-[32px] mx-[auto] text-[rgb(22, 21, 19)] gap-[50px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            officia non ducimus architecto earum nemo repellat, autem deserunt
            eum ea amet porro! Quisquam error ipsum ea debitis facilis saepe.
            <div
              className="gif mx-[auto] flex justify-center "
              style={{ translate: "0 0px" }}
            >
              <GifConversion data={PhoneAnimation} />
            </div>
            Accusamus deleniti architecto quos provident laborum velit nostrum,
            eveniet dignissimos, unde inventore rem expedita cum voluptatem
            perferendis quia placeat tempora mollitia neque aliquam ea magnam,
            es
          </p>
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
      </section>
    </div>
  );
};

export default About;
