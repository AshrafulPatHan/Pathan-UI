import React, { useState, type JSX } from 'react';
import { FaCircle, FaRegHeart, } from 'react-icons/fa';
import { IoCopyOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const StartRegister = () => {
    // 🔹 JSON Data (UI preview + code in one place)
    const componentsData = [
        {
            title: "Basic Registration",
            code: `
<div>
    
</div>

            `,
            preview: [
                <form className="px-7 grid justify-center items-center">
                    <div className="grid gap-6" id="form">
                        {/* First & Last Name */}
                        <div className="w-full flex gap-3">
                            <input
                                type="text"
                                id="First-Name"
                                name="First-Name"
                                placeholder="First Name"
                                required
                                className="capitalize shadow-2xl p-3 w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
                            />
                            <input
                                type="text"
                                id="Last-Name"
                                name="Last-Name"
                                placeholder="Last Name"
                                className="p-3 capitalize shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                            />
                        </div>

                        {/* Email & Date */}
                        <div className="grid gap-6 w-full">
                            <input
                                type="email"
                                id="Email"
                                name="email"
                                placeholder="Email"
                                className="p-3 shadow-2xl w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
                            />
                            <input
                                type="date"
                                required
                                className="p-3 shadow-2xl w-full text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                            />
                        </div>

                        {/* Password & Confirm Password */}
                        <div className="flex gap-3">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                required
                                className="p-3 shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                            />
                            <input
                                type="password"
                                placeholder="Confirm password"
                                required
                                className="p-3 shadow-2xl w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="outline-none shadow-2xl w-full p-3 bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px] hover:text-[#035ec5] font-bold transition duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </form>

            ]
        },
    ];

    type Props = {
        title: string;
        code: string;
        preview: JSX.Element[];
    };

    // 🔹 Section Component (inside same file)
    const ComponentSection = ({ title, code, preview }: Props) => {
        const [copied, setCopied] = useState(false);
        const [showCode, setShowCode] = useState(false);

        const handleCopy = () => {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        };

        return (
            <div className="flex flex-col gap-5 p-7 rounded-2xl shadow-xl bg-white w-[90%]">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{title}</h2>
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

                {/* Preview Buttons */}
                <div className="flex flex-col items-center justify-center gap-8">
                    {preview.map((btn: JSX.Element, index: number) => (
                        <React.Fragment key={index}>{btn}</React.Fragment>
                    ))}
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
        );
    };

    // 🔹 Main Render
    return (
        <div className="flex flex-col items-center gap-14 mt-24 mb-28">
            {componentsData.map((item, index) => (
                <ComponentSection
                    key={index}
                    title={item.title}
                    code={item.code}
                    preview={item.preview}
                />
            ))}
        </div>
    );
};

export default StartRegister;