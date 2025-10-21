import React, { useState, type JSX } from 'react';
import { FaCircle } from 'react-icons/fa';
import { IoCopyOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import Google from '../../../assets/icon/Google.svg';
// import { preview } from 'vite';

const UILibrary = () => {
  // 🔹 JSON Data (UI preview + code in one place)
  const componentsData = [
    {
      title: "Basic Buttons",
      code: `
<button className='w-40 h-16 bg-[#e6e2ee] text-[#997777] rounded-lg font-semibold border-4 border-[#ded6e9]'>Button1</button>
<button className='w-40 h-16 bg-blue-600 text-white rounded-lg font-semibold'>Button2</button>
<button className='w-40 h-16 bg-gradient-to-tl from-blue-700 to-blue-600 text-white rounded-lg font-semibold'>Button3</button>
<button className='p-5 bg-gradient-to-tl from-[#141414] to-[#0b3847] text-white rounded-lg font-semibold flex items-center justify-center'><img src={Google} alt="google" /></button>    
      `,
      preview: [
        <button className='w-40 h-16 bg-[#e6e2ee] text-[#997777] rounded-lg font-semibold border-4 border-[#ded6e9] hover:scale-105 transition'>Button1</button>,
        <button className='w-40 h-16 bg-blue-600 text-white rounded-lg font-semibold hover:scale-105 transition'>Button2</button>,
        <button className='w-40 h-16 bg-gradient-to-tl from-blue-700 to-blue-600 text-white rounded-lg font-semibold hover:scale-105 transition'>Button3</button>,
        <button className='p-5 bg-gradient-to-tl from-[#141414] to-[#0b3847] text-white rounded-lg font-semibold flex items-center justify-center hover:scale-105 transition'><img src={Google} alt="google" /></button>
      ]
    },
    {
      title: "Color Buttons",
      code: `
<button className="w-40 h-12 bg-gray-100 text-gray-700 rounded-lg font-semibold border-2 border-gray-200 hover:bg-gray-200 transition-colors">
    Default
</button>

<button className="w-40 h-12 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
    Primary
</button>

<button className="w-40 h-12 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
    Success
</button>

<button className="w-40 h-12 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
    Danger
</button>
        `,
      preview: [
        <button className="w-40 h-12 bg-gray-100 text-gray-700 rounded-lg font-semibold border-2 border-gray-200 hover:bg-gray-200 transition-colors">
          Default
        </button>,
        <button className="w-40 h-12 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Primary
        </button>,
        <button className="w-40 h-12 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
          Success
        </button>,
        <button className="w-40 h-12 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
          Danger
        </button>
      ]
    },
    {
      title: "Gradient Buttons",
      code: `
<button className="w-40 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
    Purple Pink
</button>

<button className="w-40 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all">
    Blue Cyan
</button>

<button className="w-40 h-12 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-semibold hover:from-green-500 hover:to-blue-600 transition-all">
    Green Blue
</button>

<button className="w-40 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all">
    Yellow Orange
</button>
        `,
      preview: [
        <button className="w-40 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
          Purple Pink
        </button>,
        <button className="w-40 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all">
          Blue Cyan
        </button>,
        <button className="w-40 h-12 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-semibold hover:from-green-500 hover:to-blue-600 transition-all">
          Green Blue
        </button>,
        <button className="w-40 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all">
          Yellow Orange
        </button>
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

export default UILibrary;
