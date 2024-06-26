import React, { useState } from "react";
import { close, menu, logo } from "../assets/";
import { navLinks } from "../constants";
function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-[93%]   flex py-6 justify-between items-center navbar">
      <img
        src={logo}
        alt="hooBank"
        className="w-[124px] cursor-pointer h-[32px]"
      />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins  font-normal  text-[16px] text-white  hover:text-red ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}>
            <a className="" href={`${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden  flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle
              ? "flex rounded-xl min-w-[140px] p-6 bg-black-gradient absolute top-20 right00 mx-4 my-2 sidebar]"
              : "hidden"
          }`}>
          <ul className="flex-col  justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-10"
                }`}>
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
