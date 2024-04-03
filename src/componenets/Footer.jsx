import React from "react";
import { RiMotorbikeFill } from "react-icons/ri";
import { GiRevolt } from "react-icons/gi";
import { RiPagesLine } from "react-icons/ri";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { FaRocketchat } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#464646] sm:h-[60vh] h-screen   px-10 w-full">
      <div className="max-w-[1240px] relative sm:h-[60vh]  h-screen sm:px-18 py-[1cm] grid sm:grid-cols-4 grid-cols-1 sm:gap-12 ">
        <div className="mx-auto">
          <ul className="text-white flex flex-col gap-1 sm:text-start text-center">
            <li>
              <LuNewspaper 
                className="relative   sm:size-10 size-8 sm:mx-0  mx-auto"
                style={{ color: "#00FFFF" }}
              />
            </li>
            <li className="text-2xl font-bold">News Hub</li>
            <li className="text-[18px] font-[300]">News</li>
            <li className="text-[18px] font-[300]">Lattest News</li>
          </ul>
        </div>
        <div className="mx-auto">
          <ul className="text-white flex flex-col gap-2 sm:text-start text-center">
            <li>
              <GiRevolt
                className=" sm:size-10 size-8 sm:mx-0 mx-auto"
                style={{ color: "#00FFFF" }}
              />
            </li>
            <li className="text-2xl font-bold">Joinus</li>
            <li className="text-[18px] font-[300]">Our Story</li>
            <li className="text-[18px] font-[300]">Princekrishna5707@gmail.com</li>
            <li className="text-[18px] font-[300]">Become a Dealer</li>
          </ul>
        </div>
        <div className="mx-auto">
          <ul className="text-white flex flex-col gap-2 sm:text-start text-center">
            <li>
              <RiPagesLine
                className=" sm:size-10 size-8 sm:mx-0  mx-auto"
                style={{ color: "#00FFFF" }}
              />
            </li>
            <li className="text-2xl font-bold">Legal</li>
            <li className="text-[18px] font-[300]">Terms & Conditions</li>
            <li className="text-[18px] font-[300]">Privacy Policy</li>
            <li className="text-[18px] font-[300]">Caution Notice</li>
            <li className="text-[18px] font-[300]">EULA</li>
          </ul>
        </div>

        <div className="mx-auto text-white flex gap-5 flex-col sm:text-start text-center ">
          <div>
            <h1 className="text-2xl font-bold list-none ">Follow us</h1>
          </div>
          <div className="flex gap-10 sm:pt-0 pt-3 cursor-pointer relative z-10">
            <MdFacebook onClick={()=>{
              window.open("https://www.facebook.com/profile.php?id=100016002570229")
            }} className="border rounded-sm  scale-[2]" />
            <FaInstagram onClick={()=>{
              window.open("https://www.instagram.com/_princekrishna?igsh=MTcyc3Jkc2E4eGMyeg==")
            }} className="border rounded-sm  scale-[2]" />
            <FaLinkedin onClick={()=>{
              window.open("https://www.linkedin.com/in/krishna-vishwakarma-485267291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")
            }} className="border  rounded-sm scale-[2]" />
            <FaGithub onClick={()=>{
              window.open("https://github.com/krishnaprince7")
            }} className="border  rounded-sm scale-[2]" />
        
          </div>
        
        </div>
      </div>
    
    </div>
  );
};

export default Footer;
