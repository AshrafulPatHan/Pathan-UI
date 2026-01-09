import React, { useState, type JSX } from 'react';
import { FaCircle } from 'react-icons/fa';
import { IoCopyOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const Type2Card = () => {

    // css
    const borderStyle = {
        boxShadow: `
            inset 0 1px 2px #ffffff30,
            0 4px 10px #00000030,
            0 6px 10px #00000015
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
<div style={borderStyle} className='p-4 rounded-2xl flex' >
    <div className='rounded-2xl w-1/2 overflow-hidden '>
        <img src="https://i.ibb.co.com/mFC2WhpZ/pexels-aimbere-elorza-1176843138-27220713.jpg" alt="image" />
    </div>
    <div className='px-6 w-1/2'>
        <div>
            <h2 className='text-2xl font-bold font-serif mb-3'>Title of the card</h2>
            <p className='text-sm text-gray-600 italic '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit corrupti velit iste aperiam alias omnis laborum qui aut architecto.
            </p>
        </div>

        <div className='flex items-center justify-between mt-8 '>
            <div className='flex gap-3'>
                <div className='w-12 h-12 rounded-full overflow-hidden bg-black'>
                    <img src="https://i.ibb.co.com/GvWGMT4T/Screenshot-20250712-211018.png" alt="photo" className='w-full h-full object-center' />
                </div>
                <div className='text-sm'>
                    <h3 className='font-bold'>Name</h3>
                    <p className='font-extralight text-gray-700'>january, 9, 2026</p>
                </div>
            </div>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share-icon lucide-share"><path d="M12 2v13" /><path d="m16 6-4-4-4 4" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /></svg>
            </a>
        </div>
    </div>
</div> 

            `,
            preview: [
                <div style={borderStyle} className='p-4 rounded-2xl flex' >
                    <div className='rounded-2xl w-1/2 overflow-hidden '>
                        <img src="https://i.ibb.co.com/mFC2WhpZ/pexels-aimbere-elorza-1176843138-27220713.jpg" alt="image" />
                    </div>
                    <div className='px-6 w-1/2'>
                        <div>
                            <h2 className='text-2xl font-bold font-serif mb-3'>Title of the card</h2>
                            <p className='text-sm text-gray-600 italic '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit corrupti velit iste aperiam alias omnis laborum qui aut architecto.
                            </p>
                        </div>

                        <div className='flex items-center justify-between mt-8 '>
                            <div className='flex gap-3'>
                                <div className='w-12 h-12 rounded-full overflow-hidden bg-black'>
                                    <img src="/image/Hitler.jpg" alt="photo" className='w-full h-full object-cover' />
                                </div>
                                <div className='text-sm'>
                                    <h3 className='font-bold'>Name</h3>
                                    <p className='font-extralight text-gray-700'>january, 9, 2026</p>
                                </div>
                            </div>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share-icon lucide-share"><path d="M12 2v13" /><path d="m16 6-4-4-4 4" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /></svg>
                            </a>
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

export default Type2Card;