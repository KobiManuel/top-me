import React from "react";
import Ellipse from "../assets/Ellipse 36.svg";
import Angel from "../assets/angels-green.svg?react";
import Union from "../assets/Union.svg?react";
import Union1 from "../assets/Union1.svg?react";
import Subtract from "../assets/Subtract.svg?react";
import Subtract1 from "../assets/Subtract1.svg?react";
import Subtract2 from "../assets/Subtract2.svg?react";
import Subtract3 from "../assets/Subtract3.svg?react";
import Messages from "../assets/messages.svg?react";
import File from "../assets/file-folder.svg?react";

const Angels = () => {
  return (
    <section className="bg-white rounded-[16px] ml-[7px] mt-6 font-poppins text-black flex flex-col justify-center items-center w-full">
      <div className="flex flex-col gap-3 items-center py-6 w-[60%]">
        <div className="flex flex-col justify-center items-center gap-[10px] w-fit">
          <img
            src={Ellipse}
            alt=""
            className="w-[200px] 2xl:w-[250px] min-w-[200px]"
          />
          <span className=" uppercase text-custom-green py-1 px-2 rounded-lg bg-[rgba(67,196,178,0.15)] 2xl:text-xl text-[10px] leading-[15px] font-normal">
            Verified
          </span>
        </div>
        <h6 className="flex gap-4 items-center font-medium 2xl:text-3xl text-xl leading-[30px]">
          Theresa Ubong <Angel className="2xl:w-[31px] 2xl:h-[27px]" />
        </h6>
        <p className="text-center text-xs leading-[18px] font-normal flex flex-col 2xl:text-xl">
          Live is to be lived now; not yesterday, not tomorrow but today!
          <span>Let’s help others make this a reality, please.</span>
        </p>
        <div className="flex items-center gap-6 font-medium text-[10px] leading-[15px] 2xl:text-xl text-[rgba(0,0,0,0.5)] uppercase">
          <p className="flex items-center gap-3">
            <Union className=" 2xl:w-[27px] 2xl:h-[30px]" /> Lagos, Nigeria
          </p>
          <p className="flex items-center gap-3">
            <Union1 className=" 2xl:w-[27px] 2xl:h-[30px]" /> Joined May, 2023
          </p>
        </div>
        <div className="flex items-center gap-[44px]">
          <a href="">
            <Subtract className=" 2xl:w-[27px] 2xl:h-[30px]" />
          </a>
          <a href="">
            <Subtract1 className=" 2xl:w-[27px] 2xl:h-[30px]" />
          </a>
          <a href="">
            <Subtract2 className=" 2xl:w-[27px] 2xl:h-[30px]" />
          </a>
          <a href="">
            <Subtract3 className=" 2xl:w-[27px] 2xl:h-[30px]" />
          </a>
        </div>
        <div className="w-full bg-black rounded-[4px] p-3 flex items-center justify-between gap-9">
          <div className="flex flex-col text-center w-1/3 relative after:absolute after:right-[-18px] after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[55%] after:bg-[rgba(255,255,255,0.3)]">
            <h6 className="2xl:text-3xl 2xl:leading-[40px] text-[20px] leading-[30px] font-medium text-white">
              10k
            </h6>
            <p className="uppercase text-xs leading-[18px] font-medium text-custom-grey 2xl:text-xl">
              Views
            </p>
          </div>
          <div className="flex flex-col text-center w-1/3 relative after:absolute after:right-[-18px] after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[55%] after:bg-[rgba(255,255,255,0.3)]">
            <h6 className="2xl:text-3xl 2xl:leading-[40px] text-[20px] leading-[30px] font-medium text-white">
              11+
            </h6>
            <p className="uppercase text-xs leading-[18px] font-medium text-custom-grey 2xl:text-xl">
              Projects
            </p>
          </div>
          <div className="flex flex-col text-center w-1/3">
            <h6 className="2xl:text-3xl 2xl:leading-[40px] text-[20px] leading-[30px] font-medium text-white">
              1
            </h6>
            <p className="uppercase text-xs leading-[18px] font-medium text-custom-grey 2xl:text-xl">
              Proposed Projects
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-6 items-center w-[70%] gap-6">
        <div className=" btn-container w-full flex justify-between items-center gap-[44px] py-6 ">
          <button className=" py-[17.5px] rounded-lg border-2 border-solid border-black text-sm 2xl:text-2xl font-medium text-black w-1/3 uppercase">
            Suspend
          </button>
          <button className=" py-[17.5px] rounded-lg bg-[#FF6B6B] text-sm 2xl:text-2xl font-medium text-white w-1/3 uppercase">
            Reject
          </button>
          <button className="relative py-[17.5px] rounded-lg border-2 border-solid border-black text-sm 2xl:text-2xl font-medium text-black w-1/3 uppercase flex items-center justify-center gap-[52px]">
            <Messages className="absolute top-1/2 left-6 -translate-y-1/2" />{" "}
            Message
          </button>
        </div>
        <File className="w-[45%] h-[265px]" />
      </div>
    </section>
  );
};

export default Angels;
