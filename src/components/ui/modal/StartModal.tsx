import React, { useEffect, useState, type JSX } from 'react';
import { FaCircle } from 'react-icons/fa';
import { IoCopyOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";



const StartModal = () => {

    // modal code 
    const [open, setOpen] = useState(false);

    // ESC off modal 
    useEffect(() => {
        const handleEsc = (e: { key: string; }) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    // 🔹 JSON Data (UI preview + code in one place)
    const componentsData = [
        {
            title: "Basic Modal",
            code: `
import { useState, useEffect } from "react";

export default function Modal() {
    const [open, setOpen] = useState(false);

    // ESC off modal 
    useEffect(() => {
        const handleEsc = (e) => {
        if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <>
        {/* Open Modal Button */}
        <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
            Open Modal
        </button>

        {/* Modal */}
        {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
            
                {/* Backdrop */}
                <div
                    onClick={() => setOpen(false)}
                    className="absolute inset-0 bg-black/50"
                ></div>

                {/* Modal Box */}
                <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4 text-gray-600">
                    Press ESC key or click outside to close
                    </p>

                    <div className="text-right">
                    <button
                        onClick={() => setOpen(false)}
                        className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                        Close
                    </button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}

            `,
            preview: [
                <div>
                    {/* Open Modal Button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Open Modal
                    </button>

                    {open && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center">

                            {/* Backdrop */}
                            <div
                                onClick={() => setOpen(false)}
                                className="absolute inset-0 bg-black/50"
                            ></div>

                            {/* Modal Box */}
                            <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                                <h3 className="text-lg font-bold">Hello!</h3>
                                <p className="py-4 text-gray-600">
                                    Press ESC key or click outside to close
                                </p>

                                <div className="text-right">
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ]
        }

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
            <div className="flex flex-col gap-5 p-7 rounded-2xl shadow-xl bg-white w-[90%] lg:w-[60%] max-w-5xl">
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
                <div className="flex flex-wrap items-center gap-8">
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

export default StartModal;