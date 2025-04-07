import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";

const footer = () => {
  return (
    <footer
      className={`w-full h-[100%] [@media(min-width:500px)]:pb-[3rem] pb-[2rem] mt-[10rem] bg-[#F0F1F4] flex justify-center`}
    >
      <div className="[@media(min-width:1450px)]:!w-[1440px] [@media(min-width:1210px)]:w-[1200px] w-full [@media(min-width:1050px)]:px-[5.5rem] px-[3.5rem] mx-auto bg-white [@media(min-width:866px)]:rounded-[50px] [@media(min-width:440px)]:rounded-[40px] rounded-[30px] relative">
        <div className="absolute left-0 [@media(min-width:1135px)]:top-[-90px] top-[-140px] w-full flex justify-center text-center">
            <p className="[@media(min-width:1135px)]:text-[25px] text-[17px] font-[500] text-[#18470D]">Subscribe now<br/>
            and be the first to know!</p>
        </div>
        <div className="[@media(min-width:1135px)]:relative absolute left-0 [@media(min-width:1135px)]:top-0 top-[-4.8rem] w-full [@media(min-width:1135px)]:pt-[3rem] pt-0 flex flex-col items-center justify-center">
          <div className="w-full flex [@media(min-width:1135px)]:flex-row flex-col justify-center">
            <label className="[@media(min-width:600px)]:w-auto w-[90%]  relative [@media(min-width:1135px)]:mx-0 mx-auto">
              <input
                type="text"
                id="firstName"
                name="firstName"
                autoComplete="off"
                placeholder="First Name Last Name"
                className="[@media(min-width:600px)]:w-[28rem] w-full [@media(min-width:440px)]:text-[14px] text-[12px] text-black rounded-[25px] border-none shadow-[0_6px_30px_2px_#73737326] focus:ring-[#ffffff00] focus:border-[#ffffff00] block px-[25px] [@media(min-width:440px)]:py-[14px] py-[12px] dark:!bg-white dark:border-[#ffffff00] dark:focus:ring-[#ffffff00] dark:focus:border-[#ffffff00] font-[500] outline-none"
              />
              <div className="absolute right-0 top-0 py-[13px] [@media(min-width:440px)]:w-[6rem] w-[5rem] h-full flex items-center">
                <div className="w-[1px] h-full bg-[#737373ae]"></div>
                <div className=" [@media(min-width:440px)]:pl-[1.3rem] pl-[0.6rem] flex items-center">
                  <p className="[@media(min-width:440px)]:text-[13.5px] text-[12px] font-[500] text-[#474747] pr-[7px]">
                    Talent
                  </p>
                  <FaAngleDown className="w-[10px] text-[#474747]" />
                </div>
              </div>
            </label>
            <div className="[@media(min-width:1135px)]:w-[1.8rem] w-0 [@media(min-width:1135px)]:h-0 h-[0.8rem]"></div>
            <label className="[@media(min-width:600px)]:w-auto w-[90%] relative flex items-center [@media(min-width:1135px)]:mx-0 mx-auto">
              <input
                type="text"
                id="firstName"
                name="firstName"
                autoComplete="off"
                placeholder="Enter your email"
                className="[@media(min-width:600px)]:w-[21rem] w-[100%] [@media(min-width:440px)]:text-[14px] text-[12px] text-black rounded-[25px] border-none shadow-[0_6px_30px_2px_#73737326] focus:ring-[#ffffff00] focus:border-[#ffffff00] block [@media(min-width:440px)]:pl-[58px] pl-[48px] pr-[25px] [@media(min-width:440px)]:py-[14px] py-[12px] dark:!bg-white dark:border-[#ffffff00] dark:focus:ring-[#ffffff00] dark:focus:border-[#ffffff00] font-[500] outline-none"
              />
              <div className="absolute [@media(min-width:440px)]:left-[6px] left-[4px] top-0 flex items-center h-full">
                <div className="bg-gradient-to-r from-[#A5EC5E] to-[#BDC502] [@media(min-width:440px)]:w-[38px] w-[36px] [@media(min-width:440px)]:h-[38px] h-[36px] flex items-center justify-center rounded-[50%]">
                  <div className="bg-[#0C0C0C] [@media(min-width:440px)]:w-[36px] w-[34px] [@media(min-width:440px)]:h-[36px] h-[34px] flex items-center justify-center rounded-[50%]">
                    <AiOutlineUser className="text-white [@media(min-width:440px)]:text-[22px] text-[20px]" />
                  </div>
                </div>
              </div>
              <button className="[@media(min-width:440px)]:px-[20px] px-[15px] [@media(min-width:440px)]:h-[49px] h-[43px] [@media(min-width:440px)]:text-[13px] text-[12px] font-[500] text-[#18470D] border-[3px] border-white bg-[#CBEC5E] rounded-[25px] ml-[3px] shadow-[0_6px_30px_2px_#73737326]">
                Subscribe
              </button>
            </label>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-between items-center  [@media(min-width:1135px)]:pt-[4rem] pt-[5.2rem]">
          <div className="[@media(min-width:866px)]:w-[200px] w-full flex-col [@media(min-width:866px)]:justify-start justify-center [@media(min-width:866px)]:mx-0 mx-auto text-center [@media(min-width:866px)]:text-left">
            <a className="flex title-font font-medium items-center [@media(min-width:866px)]:justify-start justify-center text-gray-900">
              <Image
                src="/logo2.png"
                alt="Logo"
                width={171}
                height={20.33}
                className="cursor-pointer  [@media(min-width:910px)]:flex hidden"
              />
              <Image
                src="/logo2.png"
                alt="Logo"
                width={108}
                height={17}
                className="cursor-pointer  [@media(min-width:910px)]:!hidden [@media(min-width:866px)]:flex hidden"
              />
                            <Image
                src="/logo2.png"
                alt="Logo"
                width={171}
                height={20}
                className="cursor-pointer  [@media(min-width:866px)]:hidden flex"
              />
            </a>
            <div className="[@media(min-width:866px)]:flex hidden items-center [@media(min-width:866px)]:justify-start justify-center [@media(min-width:910px)]:pt-[2rem] pt-[1.2rem] [@media(min-width:910px)]:pb-[2rem] pb-[1.2rem] text-black [@media(min-width:866px)]:mx-0 mx-auto">
              <MdEmail className="w-[20px] h-[20px]" />
              <p className="text-[14px] font-[500] pl-[5px]">
                support@Jobwhee.com
              </p>
            </div>
            <div className="w-[90px] h-[40px] rounded-[25px] border-[1px] border-[#94949480]  text-black flex justify-center items-center  [@media(min-width:866px)]:mx-0 mx-auto [@media(min-width:866px)]:mt-0 mt-[1.5rem]">
              <Image
                src="/flag.png"
                alt="Logo"
                width={24}
                height={24}
                className="cursor-pointer rounded-[50%]"
              />
              <p className="text-[13px] font-[500] ml-[11px] mr-[5px]">EN</p>
              <FaAngleDown className="text-[10px] mt-[2px]" />
            </div>
            <div className="[@media(min-width:866px)]:hidden flex items-center justify-center [@media(min-width:910px)]:pt-[2rem] pt-[1.2rem] text-black [@media(min-width:866px)]:mx-0 mx-auto">
              <MdEmail className="[@media(min-width:440px)]:w-[20px] w-[18px] [@media(min-width:440px)]:h-[20px] h-[18px]" />
              <p className="[@media(min-width:440px)]:text-[14px] text-[13px] font-[500] pl-[5px]">
                support@Jobwhee.com
              </p>
            </div>
          </div>
          <div className="[@media(min-width:866px)]:w-auto w-[100%] flex [@media(min-width:866px)]:flex-row flex-col [@media(min-width:866px)]:justify-start justify-center text-black [@media(min-width:866px)]:text-left text-center [@media(min-width:866px)]:pt-0 [@media(min-width:440px)]:pt-[1.8rem] pt-[1rem]">
            <nav className="[@media(min-width:1140px)]:!w-[15rem] [@media(min-width:866px)]:w-[11rem] w-[9rem] [@media(min-width:1140px)]:px-4 px-0 list-none [@media(min-width:866px)]:mx-0 mx-auto">
              <li className="[@media(min-width:440px)]:pb-[1.8rem] pb-[1rem]">
                <a className="[@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">About Us</a>
              </li>
              <li className="[@media(min-width:440px)]:pb-[1.8rem] pb-[1rem]">
                <a className="[@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">FAQ</a>
              </li>
              <li className="">
                <a className="[@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">
                  Steps of Success
                </a>
              </li>
            </nav>
            <nav className="[@media(min-width:1140px)]:!w-[12rem] [@media(min-width:866px)]:w-[11rem] w-[9rem] [@media(min-width:1140px)]:px-4 px-0 list-none [@media(min-width:866px)]:mx-0 mx-auto [@media(min-width:866px)]:pt-0 pt-[1.2rem]">
              <li className="[@media(min-width:440px)]:pb-[1.8rem] pb-[1rem]">
                <a className="[@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">Platform</a>
              </li>
              <li className="[@media(min-width:440px)]:pb-[1.8rem] pb-[1rem]">
                <a className="[@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">Contracts</a>
              </li>
              <li className="">
                <a className="[@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">Advantages</a>
              </li>
            </nav>
            <nav className="[@media(min-width:1140px)]:!w-[15rem] [@media(min-width:866px)]:w-[11rem] w-[9rem] [@media(min-width:1140px)]:px-4 px-0 list-none [@media(min-width:866px)]:mx-0 mx-auto [@media(min-width:866px)]:pt-0 pt-[1.2rem]">
              <li className="[@media(min-width:440px)]:pb-[1.8rem] pb-[1rem]">
                <a className="[@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">Services</a>
              </li>
              <li className="pb-[1.8rem]">
                <a className="[@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">Top Talents</a>
              </li>
              <div className="flex items-center [@media(min-width:866px)]:justify-start justify-center gap-[7px]">
                <div className="w-[28px] h-[28px] rounded-[50%] flex justify-center items-center bg-[#2B2B2B]">
                  <Image
                    src="/social/facebook.png"
                    alt="Logo"
                    width={17}
                    height={17}
                    className="cursor-pointer mx-auto mt-[2px]"
                  />
                </div>
                <div className="w-[28px] h-[28px] rounded-[50%] flex justify-center items-center bg-[#2B2B2B]">
                  <Image
                    src="/social/linkedin.png"
                    alt="Logo"
                    width={17}
                    height={17}
                    className="cursor-pointer mx-auto"
                  />
                </div>
                <div className="w-[28px] h-[28px] rounded-[50%] flex justify-center items-center bg-[#2B2B2B]">
                  <Image
                    src="/social/instagram.png"
                    alt="Logo"
                    width={15}
                    height={15}
                    className="cursor-pointer mx-auto"
                  />
                </div>
                <div className="w-[28px] h-[28px] rounded-[50%] flex justify-center items-center bg-[#2B2B2B]">
                  <Image
                    src="/social/tiktok.png"
                    alt="Logo"
                    width={16}
                    height={16}
                    className="cursor-pointer mx-auto"
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="bg-[#DBDBDB] w-full h-[1px] mt-[3rem]"></div>
        <div className="w-full flex [@media(min-width:866px)]:flex-row flex-col [@media(min-width:866px)]:justify-between justify-center items-center [@media(min-width:866px)]:text-left text-center pt-[1.2rem] pb-[2rem]">
          <p className="[@media(min-width:440px)]:text-[13px] text-[12px] text-[#757575] font-[500] [@media(min-width:866px)]:pb-0 pb-[1.5rem]">
            © 2025 Jobwhee All rights reserved.
          </p>
          <div className="flex [@media(min-width:866px)]:flex-row flex-col items-center [@media(min-width:866px)]:justify-start justify-center">
            <p className="[@media(min-width:440px)]:text-[13px] text-[12px] text-[#757575] font-[500] [@media(min-width:866px)]:pr-[2rem] pr-0 [@media(min-width:866px)]:pb-0 pb-[1.5rem]">
              Terms of Service
            </p>
            <p className="[@media(min-width:440px)]:text-[13px] text-[12px] text-[#757575] font-[500] [@media(min-width:866px)]:pr-[2rem] pr-0 [@media(min-width:866px)]:pb-0 pb-[1.5rem]">
              Privacy Policy
            </p>
            <p className="[@media(min-width:440px)]:text-[13px] text-[12px] text-[#757575] font-[500]  [@media(min-width:866px)]:pb-0 pb-[0.7rem]">Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
