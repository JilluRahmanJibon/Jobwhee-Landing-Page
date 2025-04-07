import React from "react";

function stepsofsuccess() {
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
        <div className="w-[250px] h-[46px] my-[2rem] flex items-center bg-white rounded-[30px]">
          <button className="w-[50%] h-full text-[13px] font-[500] text-[#18470D] bg-[#ffffff] rounded-[30px]">
            Client
          </button>
          <button className="w-[50%] h-full text-[13px] font-[500] text-[#18470D] bg-[#CBEC5E] border-[2px] border-[#ffffff] rounded-[30px]">
            Talent
          </button>
        </div>
        <div className="w-[276px] h-[384px] rounded-[25px] bg-white">

        </div>
      </div>
    </div>
  );
}

export default stepsofsuccess;
