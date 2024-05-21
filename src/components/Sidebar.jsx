import React from "react";
import Logo from "../assets/Logo.svg?react";
import Dashboard from "../assets/apps.svg?react";
import Projects from "../assets/receipt-payment.svg?react";
import Donation from "../assets/donation.svg?react";
import Users from "../assets/users.svg?react";
import Angels from "../assets/angels.svg?react";
import Email from "../assets/email.svg?react";
import AvatarChain from "./AvatarChain/AvatarChain";
import ellipse1 from "../assets/Ellipse1.png";
import ellipse2 from "../assets/Ellipse2.png";
import ellipse3 from "../assets/Ellipse3.png";
import ellipse4 from "../assets/Ellipse4.png";

const Sidebar = () => {
  const avatars = [ellipse1, ellipse2, ellipse3, ellipse4];
  return (
    <nav className="fixed h-[96dvh] top-[15px] left-[20px] rounded-2xl font-poppins flex flex-col gap-12 w-[252px] bg-white  items-center py-[18px] px-3 overflow-y-auto">
      <Logo className="w-1/2" />
      <ul className="w-full flex flex-col gap-[15px] mt-[21.28px]">
        <span className="flex gap-3 items-center justify-center pt-0 pb-3 px-3 text-[10px] font-normal w-fit text-custom-grey ">
          MENU <b className=" font-bold">6</b>
        </span>
        <li className="nav-links first-nav-link w-full flex gap-2 items-center text-sm text-black font-medium pl-[11px] pr-2 py-[10px] rounded-[8px] hover:bg-custom-green hover:text-white">
          <Dashboard /> Dashboard
        </li>
        <li className="nav-links w-full flex gap-2 items-center text-sm text-black font-medium pl-[11px] pr-2 py-[10px] rounded-[8px] hover:bg-custom-green hover:text-white">
          <Projects className="w-[26px]" /> Projects
        </li>
        <li className="nav-links w-full flex gap-2 items-center text-sm text-black font-medium pl-[11px] pr-2 py-[10px] rounded-[8px] hover:bg-custom-green hover:text-white">
          <Donation /> Donation
        </li>
        <li className="nav-links w-full flex gap-2 items-center text-sm text-black font-medium pl-[11px] pr-2 py-[10px] rounded-[8px] hover:bg-custom-green hover:text-white">
          <Users /> Users
        </li>
        <li className="nav-links nav-links-angels w-full flex gap-2 items-center text-sm text-black font-medium pl-[11px] pr-2 py-[10px] rounded-[8px] hover:bg-custom-green hover:text-white">
          <Angels className="w-6" /> Angels
        </li>
        <li className="nav-links w-full flex gap-3 items-center text-sm text-black font-medium pl-[11px] pr-2 py-[10px] rounded-[8px] hover:bg-custom-green hover:text-white">
          <Email className="w-[20px] h-[20px]" /> Email
        </li>
      </ul>
      <div className="w-full flex flex-col gap-[15px]">
        <span className="flex gap-3 items-center justify-center pt-0 pb-3 px-3 text-[10px] font-normal w-fit text-custom-grey ">
          NOTIFICATIONS <b className=" font-bold">1</b>
        </span>
        <div className="w-full flex items-center justify-between px-[11px] py-[10px]">
          <span className="w-fit flex gap-2 items-center text-sm text-black font-medium">
            <Email className="w-[17px] h-[17px]" /> Message
          </span>
          <AvatarChain avatars={avatars} />
          <span className="w-6 h-6 rounded-full bg-custom-green text-white font-bold text-[10px] flex items-center justify-center">
            4
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
