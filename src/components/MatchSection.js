"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaSearch, FaUser, FaBriefcase } from "react-icons/fa";
import { MdKeyboardArrowDown, MdVerifiedUser } from "react-icons/md";
const MatchSection = () =>
{
    const [ isTalentOpen, setIsTalentOpen ] = useState(false);
    const [ selectedTalent, setSelectedTalent ] = useState("talent");

    const talents = [
        {
            icon: <FaUser className="text-black" />,
            code: "talent",
            name: "Talent",
            description: "Hire professionals effortlessly.",
        },
        {
            icon: <FaBriefcase className="text-black" />,
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
        <div className="py-12 px-4 ">
            <div className=" ">
                <div className=" mb-10 flex justify-center  gap-2">
                    <div className="w-3 h-3 mt-4 bg-[#CBEC5E] "></div>
                    <h2 className="text-2xl sm:text-3xl uppercase font-bold md:text-4xl  ">
                        FIND THE PERFECT M<span className=" relative">ATCH IN SECONDS  <span className="absolute left-0 bottom-[-3px] w-full h-1 bg-[#CBEC5E] rounded-full"></span></span>

                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First Column */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl md:text-4xl text-[#18470D] font-bold mb-4">
                                Whether you’re a talent
                                or a client, start your
                                journey now.
                            </h2>
                            <p className="text-sm sm:text-base text-gray-600 mb-6">
                                Easily find the right talent or opportunity.
                                Start your journey with just a click
                            </p>
                        </div>
                        <div>
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
                                        className=" border-2 border-gray-400 bg-[#CDCDCD] py-2 px-3 rounded-full flex items-center space-x-2 text-black "
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
                            <div className="space-x-6 pt-6">
                                <Link
                                    href="/signup"
                                    className="  bg-[#CBEC5E] text-black py-2 px-6 rounded-full"
                                >
                                    Sign Up
                                </Link>
                                <Link
                                    href="/signup"
                                    className="  bg-black text-white py-2 px-6 rounded-full"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                        <ul className="space-y-3 pt-3 text-sm sm:text-base text-gray-700">
                            <li className="flex items-start">
                                <MdVerifiedUser className="mt-1 mr-0.5 text-black" />
                                Access a diverse pool of skilled professionals.
                            </li>
                            <li className="flex items-start">
                                <MdVerifiedUser className="mt-1 mr-0.5 text-black" />
                                Match with clients who value your expertise.
                            </li>
                            <li className="flex items-start">
                                <MdVerifiedUser className="mt-1 mr-0.5 text-black" />
                                Build lasting professional relationships.
                            </li>
                        </ul>
                    </div>

                    {/* Second Column */}
                    <div className="flex relative flex-col space-y-3">
                        {/* Top Images */}
                        <div className="grid grid-cols-2 gap-4  ">
                            <div className="rounded-4xl bg-[#B4D7F0]">
                                <Image
                                    src="/images/m1.png"
                                    alt="Match Image 1"
                                    width={200}
                                    height={200}
                                    className="rounded-lg object-cover w-full h-40 sm:h-[300px]"
                                />
                            </div>
                            <div className="rounded-4xl bg-[#B9AEDB]">
                                <Image
                                    src="/images/m2.png"
                                    alt="Match Image 2"
                                    width={200}
                                    height={200}
                                    className="rounded-lg object-cover w-full h-40 sm:h-[300px]"
                                />
                            </div>
                        </div>
                        <div className="absolute top-12  inset-0 flex items-center justify-center">
                            <div className=" bg-white   p-4 rounded-full bg-opacity-50 flex  justify-center items-center">
                                <div className="w-15 h-15 rounded-full bg-[#CBEC5E]">

                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-black px-4 py-2 rounded-full">
                                    Talent
                                </h3>
                            </div>
                        </div>
                        {/* Bottom Images with Talent Text */}
                        <div className=" rounded-lg p-4">
                            <div className="bg-[#99B185] rounded-4xl grid grid-cols-2 gap-4">
                                <Image
                                    src="/images/m3.png"
                                    alt="Match Image 3"
                                    width={150}
                                    height={150}
                                    className="rounded-lg  w-full h-24 sm:h-[250px]"
                                />
                                <Image
                                    src="/images/m4.png"
                                    alt="Match Image 4"
                                    width={150}
                                    height={150}
                                    className="rounded-lg  w-full h-24 sm:h-[250px]"
                                />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchSection;