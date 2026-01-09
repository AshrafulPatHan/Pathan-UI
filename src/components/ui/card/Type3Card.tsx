import React, { useState, type JSX } from 'react';
import { FaCircle } from 'react-icons/fa';
import { IoCopyOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const Type3Card = () => {

    // css
    const borderStyle = {
        boxShadow: `
            inset 0 1px 2px #ffffff30,
            0 4px 6px #00000030,
            0 4px 10px #00000015
`
    };


    // 🔹 JSON Data (UI preview + code in one place)
    const componentsData = [
        {
            title: "Basic Card",
            code: `
// css
const borderStyle = {
    boxShadow: '
        inset 0 1px 2px #ffffff30,
        0 4px 10px #00000030,
        0 6px 10px #00000015
    '
};

// card


            `,
            preview: [
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 '>
                    <div style={borderStyle} className='px-6 py-4 rounded-2xl flex flex-col gap-3' >
                        <div className='flex items-center gap-2'>
                            <div className='bg-blue-100 hover:bg-blue-500 w-8 h-8 p-2 rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-alarm-clock-icon lucide-alarm-clock"><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2 2" /><path d="M5 3 2 6" /><path d="m22 6-3-3" /><path d="M6.38 18.7 4 21" /><path d="M17.64 18.67 20 21" /></svg>
                            </div>
                            <a href="#" className='hover:underline italic text-sm'>Lorem</a>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-blue-100 hover:bg-blue-500 w-8 h-8 p-2 rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-apple-icon lucide-apple"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"/><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"/></svg>
                            </div>
                            <a href="#" className='hover:underline italic text-sm'>Lorem</a>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-blue-100 hover:bg-blue-500 w-8 h-8 p-2 rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-battery-full-icon lucide-battery-full"><path d="M10 10v4"/><path d="M14 10v4"/><path d="M22 14v-4"/><path d="M6 10v4"/><rect x="2" y="6" width="16" height="12" rx="2"/></svg>
                            </div>
                            <a href="#" className='hover:underline italic text-sm'>Lorem</a>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-blue-100 hover:bg-blue-500 w-8 h-8 p-2 rounded-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-image-icon lucide-book-image"><path d="m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><circle cx="10" cy="8" r="2"/></svg>
                            </div>
                            <a href="#" className='hover:underline italic text-sm'>Lorem</a>
                        </div>
                    </div>
                    <div style={borderStyle} className='rounded-2xl flex flex-col items-center py-2 px-3    ' >
                        <div className='relative'>
                            <input type="email" name="email" id="email-your_id" placeholder='Email' className='bg-blue-100/50 h-8 rounded-lg px-2 ' />
                            <button className='bg-blue-600 w-8 p-1 rounded-sm absolute top-0 right-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search-icon lucide-search "><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                            </button>
                        </div>
                        <div className='flex mt-2 gap-3 text-sm'>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                            <p>lorem</p>
                        </div>
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
                <div className="flex flex-row items-center justify-center gap-8">
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

export default Type3Card;