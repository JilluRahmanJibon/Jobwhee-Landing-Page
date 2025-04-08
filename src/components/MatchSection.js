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
            <div className="py-8 px-4 ">
                <div className="">
                {/* Title Section */}
                
                    <div className="mb-8 flex justify-center items-center gap-2 pb-6">
                        <div className="w-3 h-3 mt-2 bg-[#CBEC5E]"></div>
                        <h2 className="text-2xl text-center sm:text-3xl md:text-4xl uppercase font-bold">
                            Find the Perfect M
                            <span className="relative">
                                atch in Seconds
                                <span className="absolute left-0 bottom-[-3px] w-full h-1 bg-[#CBEC5E] rounded-full"></span>
                            </span>
                        </h2>
                    </div>

                    {/* Main Grid */}
                    <div className="flex xl:flex-row flex-col  gap-6">
                        {/* Left Column */}
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                            <h2 className="md:text-[50px] sm:text-[28px] text-[20px] md:leading-[68px] text-[#18470D] font-semibold mb-2">
                                    Whether you’re a talent <br className="hidden md:block"/>
                                or a client, start your <br className="hidden md:block" />
                                    journey now.
                                </h2>
                                <p className="md:text-[24px] sm:text-[16px] md:leading-[38px] text-gray-600">
                                Easily find the right talent or opportunity. <br className="hidden md:block" /> Start your journey with just a click.
                                </p>
                            </div>

                            {/* Search Bar */}
                            <div className="relative flex items-center bg-white rounded-full shadow-lg max-w-lg">
                                <div className="flex items-center pl-2">
                                    <div className="bg-black border-2 border-[#CBEC5E] p-2 rounded-full">
                                        <FaSearch className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Find a job, talent or service"
                                    className="flex-1  p-4 text-black outline-none rounded-full"
                                />
                                <div className="relative mr-2">
                                    <button
                                        onClick={() => setIsTalentOpen(!isTalentOpen)}
                                        className="border-l py-1 px-3  flex items-center space-x-1 text-black"
                                    >
                                        <span>{talents.find((talent) => talent.code === selectedTalent)?.name}</span>
                                        <MdKeyboardArrowDown className="text-lg" />
                                    </button>
                                    {isTalentOpen && (
                                        <div className="absolute mt-2 right-0 bg-white border border-gray-300 rounded-xl shadow-xl w-56 z-50 divide-y divide-gray-200">
                                            {talents.map((talent) => (
                                                <button
                                                    key={talent.code}
                                                    onClick={() => handleTalentSelect(talent.code)}
                                                    className="flex items-start space-x-2 px-3 py-2 w-full text-left hover:bg-gray-100 transition-colors duration-200"
                                                >
                                                    <div className="text-lg pt-1">{talent.icon}</div>
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

                            {/* Buttons and List */}
                            <div className="space-y-4 pb-4">
                                <div className="flex space-x-4">
                                    <Link href="/signup" className="bg-[#CBEC5E] text-black py-3 px-6 rounded-full">
                                        Sign Up
                                    </Link>
                                    <Link href="/contact-us" className="bg-black text-white py-3 px-6 rounded-full">
                                       Contact Us
                                    </Link>
                                </div>
                                <ul className="space-y-4 text-sm sm:text-base text-gray-700">
                                    <li className="flex items-start">
                                        <MdVerifiedUser className="mt-1 mr-1 text-black" />
                                        Access a diverse pool of skilled professionals.
                                    </li>
                                    <li className="flex items-start">
                                        <MdVerifiedUser className="mt-1 mr-1 text-black" />
                                        Match with clients who value your expertise.
                                    </li>
                                    <li className="flex items-start">
                                        <MdVerifiedUser className="mt-1 mr-1 text-black" />
                                        Build lasting professional relationships.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column */}
                    <div className="relative flex flex-col space-y-10 max-w-[594px] mx-auto ">
                            {/* Top Images */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#B4D7F0] sm:w-[291px] sm:h-[319px] rounded-2xl overflow-hidden">
                                    <Image
                                        src="/images/m1.png"
                                        alt="Match Image 1"
                                        width={200}
                                        height={200}
                                        className="object-cover w-full h-full "
                                    />
                                </div>
                                <div className="bg-[#B9AEDB] sm:w-[291px] sm:h-[319px] rounded-2xl overflow-hidden">
                                    <Image
                                        src="/images/m2.png"
                                        alt="Match Image 2"
                                        width={200}
                                        height={200}
                                        className="object-cover w-full h-full "
                                    />
                                </div>
                            </div>

                            {/* Talent Overlay */}
                            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                                <div className="bg-white  p-3 rounded-full bg-opacity-70 ">
                                    <div className="flex border-2  p-3 border-[#CBEC5E] rounded-full items-center space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-[#CBEC5E]"></div>
                                        <h3 className="text-lg pr-3 text-black">Talent</h3>
                                    </div>
                            </div>
                            </div>


                            {/* Bottom Images */}
                            <div className="bg-[#99B185] overflow-hidden rounded-2xl sm:w-[594px] sm:h-[245px]  grid grid-cols-2 gap-4">
                                <Image
                                    src="/images/m3.png"
                                    alt="Match Image 3"
                                    width={150}
                                    height={150}
                                    className="rounded-lg w-full h-full"
                                />
                                <Image
                                    src="/images/m4.png"
                                    alt="Match Image 4"
                                    width={150}
                                    height={150}
                                    className="rounded-lg w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MatchSection;