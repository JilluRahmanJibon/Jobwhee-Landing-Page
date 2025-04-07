"use client";

import Image from "next/image";
import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { IoMdPlayCircle } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";

export default function Banner ()
{
    const [ isTalentOpen, setIsTalentOpen ] = useState(false);
    const [ selectedTalent, setSelectedTalent ] = useState("talent");

    const talents = [
        {
            icon: <HiOutlineUserGroup className="text-black" />,
            code: "talent",
            name: "Talent",
            description: "Hire professionals effortlessly.",
        },
        {
            icon: <FaUser className="text-black" />,
            code: "client",
            name: "Client",
            description: "Apply to jobs posted by clients",
        },
    ];

    const handleTalentSelect = (code) =>
    {
        setSelectedTalent(code);
        setIsTalentOpen(false);
    };

    return (
        <div className="relative lg:min-h-[715px] lg:px-6 px-4 pt-8 pb-6
         flex flex-col justify-between">
            <Image
                src="/banner.png"
                alt="Banner Background"
                layout="fill"
                objectFit="cover"
                className="z-0 rounded-4xl"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 80% 100%, 50% 90%, 50% 100%, 50% 90%, 20% 100%, 0 100%)" }}
            />
            <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl gap-4">
                <div>
                    <div
                        className="bg-[rgba(95,92,92,0.4)] backdrop-blur-md p-6 rounded-[28px]  text-white"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%)",
                        }}
                    >
                        <h2 className="text-2xl md:text-[40px] font-bold mb-2   uppercase leading-tight">
                            Find the <span className="text-[#CBEC5E]">Talent</span>, Sign Up <br /> & Get The{" "}
                            <span className="text-[#CBEC5E]">Job</span> Done
                        </h2>
                    </div>
                </div>
                <div className="relative mt-8 md:mt-12">
                    <div
                        className="w-full bg-[rgba(95,92,92,0.4)] backdrop-blur-md p-8 rounded-[28px] text-white"
                        style={{
                            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 50%)",
                        }}
                    >
                        <h2 className="text-lg md:text-[40px] font-semibold uppercase">
                            We'll{" "}
                            <span className="text-[#CBEC5E]">
                                {selectedTalent === "talent" ? "Handle" : "Support"}
                            </span>{" "}
                            That
                        </h2>
                    </div>
                    <div className="absolute bottom-[-20px] left-6 flex items-center space-x-2">
                        <p className="bg-[#CBEC5E] text-black rounded-full px-6 py-2 text-sm md:text-base">
                            Sign Up for Contract
                        </p>
                        <IoMdPlayCircle className="text-white text-4xl md:text-6xl" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="w-full relative max-w-3xl flex items-center bg-white rounded-full shadow-lg mt-12">
                    <div className="flex items-center justify-center pl-2">
                        <div className="bg-black border-2 border-[#CBEC5E] p-2 rounded-full">
                            <FaSearch className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    <input
                        type="text"
                        placeholder="Find a job, talent or service"
                        className="flex-1 z-0 h-[60px] p-4 text-black outline-none"
                    />

                    <div className="relative mr-2">
                        <button
                            onClick={() => setIsTalentOpen(!isTalentOpen)}
                            className="border-2 border-gray-400 bg-[#CDCDCD] py-2 px-3 rounded-full flex items-center space-x-2 text-black"
                        >
                            <span>{talents.find((talent) => talent.code === selectedTalent)?.name}</span>
                            <MdKeyboardArrowDown className="text-xl" />
                        </button>

                        {isTalentOpen && (
                            <div className="absolute mt-2 bg-white border border-gray-300 rounded-xl shadow-xl w-64 z-50 divide-y divide-gray-200">
                                {talents.map((talent) => (
                                    <button
                                        key={talent.code}
                                        onClick={() => handleTalentSelect(talent.code)}
                                        className="flex items-start space-x-3 px-4 py-3 w-full text-left hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        <div className="text-xl pt-1">{talent.icon}</div>
                                        <div className="flex flex-col text-black">
                                            <span className="font-semibold text-sm">{talent.name}</span>
                                            <span className="text-xs text-gray-600">{talent.description}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="relative w-full flex justify-center mt-4">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#CBEC5E] cursor-pointer transition-all duration-200 hover:bg-opacity-80"></div>
                        <div className="w-3 h-3 rounded-full bg-[#CBEC5E6B] cursor-pointer transition-all duration-200 hover:bg-opacity-80"></div>
                        <div className="w-3 h-3 rounded-full bg-[#CBEC5E6B] cursor-pointer transition-all duration-200 hover:bg-opacity-80"></div>
                        <div className="w-3 h-3 rounded-full bg-[#CBEC5E6B] cursor-pointer transition-all duration-200 hover:bg-opacity-80"></div>
                        <div className="w-3 h-3 rounded-full bg-[#CBEC5E6B] cursor-pointer transition-all duration-200 hover:bg-opacity-80"></div>
                    </div>
                </div>

                <div className="pt-5 z-50">
                    <h1 className="bg-white text-xl md:text-4xl font-bold rounded-[61px] px-8 py-3 text-center">
                        Education and Tutoring
                    </h1>
                </div>
            </div>
        </div>
    );
}