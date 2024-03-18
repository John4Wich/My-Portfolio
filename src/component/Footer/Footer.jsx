import React, { useEffect, useState } from "react";
// import logo from '../../assets/logo.svg'
import whitelogo from '../../assets/whitelogo.png'
import "./footer.css";
import { Linkedin,Instagram,Facebook } from 'lucide-react';
import Button from "../../Button/Button";
import {EmailSend} from "./../../emailSend";
import Spiner from "../../Spiner/Spiner";
const Footer = () => {

  const [email,setEmail] = useState("");
  const [loader,setLoader] = useState(false);



  async function handleSubscribe(e){
    setLoader((prev)=>!prev)
    e.preventDefault();
    let resp = await EmailSend({email : email , name: "Subscribe" ,subject:"subscribe to news letter" , Comment:"Subscribe"})
    console.log("subcribe response - ",resp)
    setLoader((prev)=>!prev)
    setEmail("")
  }

  useEffect(()=>{
    console.log("email -",email)
  },[email])

  return (
    <>
    <div className="bfsub bg-[#e7e3df] py-[70px]">
        <div className="subscribe flex justify-between w-[80%] mx-auto items-center h-[100%] ">
            <p className="text-2xl font-bold">Subscribe to our newsletter</p>
        
            <form className="flex gap-[20px] border-2 border-red" onSubmit={handleSubscribe}>
                <input type="email" placeholder="Email Address" required onChange={(e)=>setEmail(e.target.value)} value={email} className=" inputemail p-[10px] px-[30px] border-2 border-black bg-[#e7e3df] " />
                {
                  loader ?
                  <Button text={<Spiner />}/>
                  :
                <Button text={"Subscribe"}/>
                }
                
            </form>
        </div>
    </div>

    <div className="footer">
        

      <div className="items flex justify-between">
        <div className="logo">
          <img src={whitelogo} alt="logo" width='45px' />
        </div>
        <ul className="flex gap-[40px]">
          <li>Style Guide</li>
          <li>Licence</li>
          <li>Changelog</li>
        </ul>
      </div>

    <div className="second-line flex justify-between mt-[28px]">
        <p className="text-white text-center">© This project is licensed under the MIT license.</p>
        <div className="socialMedia flex gap-10 ">
            <Linkedin size={28} color="white" />
            <Instagram size={28} color="white"/>
            <Facebook size={28} color="white"/>
        </div>
    </div>

    </div>
    </>

  );
};

export default Footer;
