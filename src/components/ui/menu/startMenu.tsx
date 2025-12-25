import React, { useState, type JSX } from 'react';
import { FaCircle, } from 'react-icons/fa';
import { IoCopyOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRef, useEffect } from "react";

const StartMenu = () => {

    const [open, setOpen] = useState(false);

    // dropdown menu
    const dropdownRef =  useRef<HTMLDivElement | null>(null);

    // after clikin button dropdown off
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    // 🔹 JSON Data (UI preview + code in one place)
    const componentsData = [
        {
            title: "Basic Menu",
            code: `

import { useState, useRef, useEffect } from "react";

export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // after clikin button dropdown off
    useEffect(() => {
        const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            {/* Button */}
            <button
                onClick={() => setOpen(!open)}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
                Memu
            </button>

            {/* Dropdown */}
            {open && (
                <ul className="absolute right-0 mt-2 w-52 rounded-lg bg-white shadow-lg border border-gray-200">
                <li>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Item 1
                    </button>
                </li>
                <li>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Item 2
                    </button>
                </li>
                </ul>
            )}
        </div>
  );
}

            `,
            preview: [
                <div className="relative inline-block" ref={dropdownRef}>
                    {/* Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                        menu
                    </button>

                    {/* Dropdown */}
                    {open && (
                        <ul className="absolute right-0 mt-2 w-52 rounded-lg bg-white shadow-lg border border-gray-200">
                            <li>
                                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                    Item 1
                                </button>
                            </li>
                            <li>
                                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                    Item 2
                                </button>
                            </li>
                        </ul>
                    )}
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

export default StartMenu;