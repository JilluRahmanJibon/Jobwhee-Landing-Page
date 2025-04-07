import Image from "next/image";
import React from "react";

function stepsofsuccess ()
{
  const stepsofsuccessData = [
    {
      id: 1,
    },
  ];
  return (
    <div className="w-full">
      <div className="[@media(min-width:1450px)]:!w-[1440px] [@media(min-width:1210px)]:w-[1200px] w-full mx-auto">
        <div className="sm:w-[17.7rem] w-[11.9rem] relative mx-auto flex justify-center items-center text-center">
          <h1 className="text-[#000000] sm:text-[30px] text-[20px] font-[800]">
            STEPS OF SUCCESS
          </h1>
          <div className="absolute sm:left-[-25px] left-[-20px] top-0 h-full flex items-center">
            <div className="sm:w-[14px] w-[10px] sm:h-[14px] h-[10px] bg-[#C0D724]"></div>
          </div>
          <div className="absolute right-0 bottom-0 h-full flex items-end">
            <div className="sm:w-[124px] w-[92px] sm:h-[5px] h-[2px] rounded-[25px] bg-[#C0D724]"></div>
          </div>
        </div>
        <div className="w-[297px] h-[56px] mt-[3rem] mb-[1.5rem] flex items-center bg-white rounded-[30px]">
          <button className="w-[50%] h-full cursor-pointer text-[18px] font-[500] text-[#18470D] bg-[#ffffff] rounded-[30px]">
            Client
          </button>
          <button className="w-[50%] h-full cursor-pointer text-[18px] font-[500] text-[#18470D] bg-[#CBEC5E] border-[3px] border-[#ffffff] rounded-[30px]">
            Talent
          </button>
        </div>
        <div className="w-[275px] h-[384px] rounded-[30px] bg-white relative">
          {/* <div className="absolute left-[1rem] top-[1rem] w-[50px] h-[50px] rounded-[13px] bg-[#000]" style={{"clip-path": "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"}}></div> */}
          
          <div className="">
            <h1>under construction</h1>
            <Image
              fill
              src="/stepofsuccess/1.png"
              alt="Logo"
              sizes="185px,"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default stepsofsuccess;
