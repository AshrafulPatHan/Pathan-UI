import React, { useState, type JSX } from 'react';
import { FaCircle, } from 'react-icons/fa';
import { IoCopyOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const FirstShape = () => {
    // 🔹 JSON Data (UI preview + code in one place)
    const componentsData = [
        {
            title: "Basic Navbar",
            code: `


            `,
            preview: [
                <div className="grid grid-cols-2 md:grid-cols-3 gap-16 p-10 place-items-center">

                    {/* Square */}
                    <div className="w-20 h-20 bg-blue-500" />

                    {/* Circle */}
                    <div className="w-20 h-20 bg-green-500 rounded-full" />

                    {/* Hollow Circle */}
                    <div className="w-20 h-20 rounded-full border-4 border-purple-500" />

                    {/* Half Circle */}
                    <div className="w-20 h-10 bg-red-500 rounded-t-full" />

                    {/* Triangle */}
                    <div className="w-0 h-0 
                    border-l-[40px] border-l-transparent
                    border-r-[40px] border-r-transparent
                    border-b-[70px] border-b-yellow-500"
                    />

                    {/* Star */}
                    <div className="relative w-0 h-0
                    border-l-[40px] border-l-transparent
                    border-r-[40px] border-r-transparent
                    border-b-[70px] border-b-pink-500">
                        <div className="absolute -top-[45px] -left-[40px] w-0 h-0
                        border-l-[40px] border-l-transparent
                        border-r-[40px] border-r-transparent
                        border-t-[70px] border-t-pink-500"
                        />
                    </div>

                    {/* Flower */}
                    <div className="relative w-20 h-20">
                        {[...Array(6)].map((_, i) => (
                            <span
                                key={i}
                                className="absolute w-8 h-8 bg-rose-400 rounded-full"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: `rotate(${i * 60}deg) translate(0, -32px)`
                                }}
                            />
                        ))}
                        <span className="absolute inset-6 bg-yellow-400 rounded-full" />
                    </div>

                    {/* Random Shape */}
                    <div className="w-20 h-20 bg-indigo-500 rounded-[30%_70%_70%_30%]" />

                </div>
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

export default FirstShape;

