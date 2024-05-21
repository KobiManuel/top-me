import React from "react";
import ChevronLeft from "../assets/chevron-left.svg?react";
import Search from "../assets/search.svg?react";
import ChevronDown from "../assets/chevron-down.svg?react";
import avatar from "../assets/navbar-avatar.png";

const Header = () => {
  return (
    <nav
      className="header h-[60px] fixed top-4 left-[calc(100% - 269px)] font-poppins  flex justify-between items-center rounded-[12px] border-b-2 border-solid border-[
#F6F6F6] py-[6px] px-6 bg-white"
    >
      <div className="flex items-center gap-6">
        <button className="bg-black w-12 h-12 rounded-full flex justify-center items-center">
          <ChevronLeft />
        </button>
        <h6 className="text-black fon-normal text-2xl leading-9">Angels</h6>
      </div>
      <div className="flex items-center justify-end gap-[41px]">
        <div className="w-[35%] flex justify-between items-center">
          <input
            type="text"
            className="w-full bg-transparent border-none outline-none"
          />
          <Search />
        </div>
        <div className="flex gap-3 items-center">
          <img src={avatar} alt="/" className="w-[43px] h-[43px]" />
          <span className="flex flex-col text-black mr-2">
            <p className=" text-xl font-semibold">Andre U.</p>
            <p className="font-medium text-base -mt-2">uandre@gmail.com</p>
          </span>
          <ChevronDown />
        </div>
      </div>
    </nav>
  );
};

export default Header;
