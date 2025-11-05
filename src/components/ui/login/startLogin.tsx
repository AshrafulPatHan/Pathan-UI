import React, { useState, type JSX } from 'react';
import { FaCircle, FaRegHeart, } from 'react-icons/fa';
import { IoCopyOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const StartLogin = () => {
    // 🔹 JSON Data (UI preview + code in one place)
    const componentsData = [
        {
            title: "Basic Navbar",
            code: `
<div>
    
</div>

            `,
            preview: [
                <div>
                    <div
                        id="login"
                        className="w-64 h-80 bg-indigo-50 rounded shadow flex flex-col justify-between p-3"
                    >
                        <form className="text-indigo-500" action="" method="post">
                            <fieldset className="border-4 border-dotted border-indigo-500 p-5">
                                <legend className="px-2 italic -mx-2">Welcome again!</legend>

                                <label
                                    htmlFor="email"
                                    className="text-xs font-bold after:content-['*'] after:text-red-400"
                                >
                                    Mail
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full p-2 mb-2 mt-1 outline-none focus:ring-2 focus:ring-indigo-500"
                                />

                                <label
                                    htmlFor="password"
                                    className="text-xs font-bold after:content-['*'] after:text-red-400"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    className="w-full p-2 mb-2 mt-1 outline-none focus:ring-2 focus:ring-indigo-500"
                                />

                                <a
                                    href="#"
                                    className="block text-right text-xs text-indigo-500 mb-4 hover:underline"
                                >
                                    Forgot Password?
                                </a>

                                <button
                                    type="submit"
                                    className="w-full rounded bg-indigo-500 text-indigo-50 p-2 text-center font-bold hover:bg-indigo-400 transition duration-150"
                                >
                                    Log In
                                </button>
                            </fieldset>
                        </form>
                    </div>
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

export default StartLogin;