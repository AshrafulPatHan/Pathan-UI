import React, { useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { IoCopyOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import Google from '../../../assets/icon/Google.svg';

const Old = () => {
    const [copied, setCopied] = useState(false);
    const [showCode, setShowCode] = useState(false);

    const code = `
<button className='w-40 h-16 bg-[#e6e2ee] text-[#997777] rounded-lg font-semibold border-4 border-[#ded6e9] cursor-pointer '>Button1</button>
<button className='w-40 h-16 bg-blue-600 text-white rounded-lg font-semibold cursor-pointer '>Button2</button>
<button className='w-40 h-16 bg-gradient-to-tl from-blue-700 to-blue-600 text-white rounded-lg font-semibold cursor-pointer '>Button3</button>
<button className='p-5 bg-gradient-to-tl from-[#141414] to-[#0b3847] text-white rounded-lg font-semibold flex items-center justify-center cursor-pointer '><img src={Google} alt="google" /></button>    
`;

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col items-center gap-14 mt-24 mb-28">
            <div className="flex flex-col gap-5 p-7 rounded-2xl shadow-xl bg-white w-[90%] lg:w-[60%] max-w-5xl">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Basic Buttons</h2>
                    <button
                        onClick={() => setShowCode(!showCode)}
                        className="flex items-center gap-1 bg-gray-600 px-3 py-1 rounded text-white transition hover:bg-gray-700"
                    >
                        <MdKeyboardArrowDown
                            className={`transform transition-transform ${showCode ? "rotate-180" : "rotate-0"}`}
                        />
                        Code
                    </button>
                </div>

                <hr className="text-[#00000049]" />

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-8">
                    <button className="w-40 h-16 bg-[#e6e2ee] text-[#997777] rounded-lg font-semibold border-4 border-[#ded6e9] cursor-pointer hover:scale-105 transition">Button1</button>
                    <button className="w-40 h-16 bg-blue-600 text-white rounded-lg font-semibold cursor-pointer hover:scale-105 transition">Button2</button>
                    <button className="w-40 h-16 bg-gradient-to-tl from-blue-700 to-blue-600 text-white rounded-lg font-semibold cursor-pointer hover:scale-105 transition">Button3</button>
                    <button className="p-5 bg-gradient-to-tl from-[#141414] to-[#0b3847] text-white rounded-lg font-semibold flex items-center justify-center cursor-pointer hover:scale-105 transition">
                        <img src={Google} alt="google" />
                    </button>
                </div>

                {/* Code Block */}
                {showCode && (
                    <div className="show-code mt-5">
                        <div className="relative bg-gradient-to-tl from-[#252B37] to-[#383e49] w-full text-[#fff5f5] p-5 rounded-xl">
                            {/* Scrollable Code */}
                            <div className="overflow-y-auto max-h-[300px] pt-2 pr-2 scrollbar-thin">
                                <pre>{code}</pre>
                            </div>

                            {/* Top Circles */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                <FaCircle className="text-red-500 text-sm" />
                                <FaCircle className="text-yellow-400 text-sm" />
                                <FaCircle className="text-green-500 text-sm" />
                            </div>

                            {/* Copy Button */}
                            <button
                                onClick={handleCopy}
                                className="absolute top-4 right-4 flex gap-1 bg-gray-600 px-3 py-1 rounded text-sm items-center text-white hover:bg-gray-700 transition"
                            >
                                <IoCopyOutline />
                                {copied ? "Copied" : "Copy"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Old;
