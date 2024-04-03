import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navebar = () => {
  const [show, setshow] = useState(true);

  const click = () => {
    setshow(!show);
  };
  return (
    <>
      <div className="bg-black w-full text-white sm:p-4 sticky  p-4 flex justify-between sm:px-8 ">
        <div>
          <h1 className="text-xl font-semibold">Lo.News</h1>
        </div>
        <div>
          <ul className=" text-white gap-6 font-semibold sm:flex md:flex hidden">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/enetrtainmenet">
              <li>Entertainmenet</li>
            </NavLink>
            <NavLink to="/science">
              <li>Science</li>
            </NavLink>
            <NavLink to="/Sports">
              <li>Sports</li>
            </NavLink>
            <NavLink to="/Technology">
              <li>Technology</li>
            </NavLink>
          </ul>
          <div className="sm:hidden block ml-4" onClick={click}>
            {show ? <CgMenuRight size={25} /> : null}
          </div>
        </div>
      </div>
      <div>
        <ul
          className={
            show
              ? "fixed right-[-10cm]  text-[#fdf4dc]    text-2xl top-0 font-bold h-screen  bg-[#464646]  flex flex-col text-end   pr-2 pl-20    transition-all ease-in-out duration-700  "
              : "absolute  right-0 top-0 text-end flex flex-col  h-screen bg-[#464646] text-[#fdf4dc] pr-2 pl-20 text-2xl transition-all ease-in-out duration-700 "
          }
        >
          <div
            className=""
            onClick={() => {
              setshow(!show);
            }}
          >
            <IoCloseSharp className=" relative top-2 left-[5cm]" size={30} />
          </div>
          <NavLink to="/">
            <li onClick={click} className="p-3 border-b  text-4xl  font-bold">
              HOME
            </li>
          </NavLink>
          <NavLink to="/sports"> 
            <li onClick={click} className="p-3 border-b text-4xl  font-bold ">
              SPORTS
            </li>
          </NavLink>

          <NavLink to="/technology">
            <li onClick={click} className="p-3 border-b   font-bold ">
              Technology
            </li>
          </NavLink>

          <NavLink to="/enetrtainmenet">
            <li onClick={click} className="p-3 border-b   font-bold ">
              Entertainmenet
            </li>
          </NavLink>

          <NavLink to="/health">
            <li onClick={click} className="p-3 border-b font-bold ">
              Health
            </li>
          </NavLink>
          <NavLink to="/science">
            <li onClick={click} className="p-3 border-b   font-bold ">
              Science
            </li>
          </NavLink>

          <div className="flex gap-6  p-6  w-[5.5cm] ml-2">
            <MdFacebook
              onClick={() => {
                window.open(
                  "https://www.facebook.com/profile.php?id=100016002570229"
                );
              }}
              className="border px-1 py-1 scale-[1.3]"
            />
            <FaInstagram
              onClick={() => {
                window.open(
                  "https://www.instagram.com/_princekrishna?igsh=MTcyc3Jkc2E4eGMyeg=="
                );
              }}
              className="border px-1 py-1 scale-[1.3]"
            />
            <FaLinkedin
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/krishna-vishwakarma-485267291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                );
              }}
              className="border px-1 py-1 scale-[1.3]"
            />
            <FaGithub
              onClick={() => {
                window.open("https://github.com/krishnaprince7");
              }}
              className="border px-1 py-1 scale-[1.3]"
            />
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navebar;
