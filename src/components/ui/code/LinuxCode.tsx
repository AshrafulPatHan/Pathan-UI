import React, { useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { IoCopyOutline } from "react-icons/io5";



const LinuxCode = () => {
const [copied, setCopied] = useState(false);


const code = `
import React, { useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { IoCopyOutline } from "react-icons/io5";



const LinuxCode = () => {
const [copied, setCopied] = useState(false);


const code = '

function Name(){
    return("Hello world")
};

Name()
'

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


    return (
        <div>
            <div className='relative bg-gradient-to-tl from-[#252B37] w-[35vw] to-[#383e49] text-[#fff5f5] p-5  rounded-xl '>
                <div className='overflow-y-auto'>
                    <pre>{code}</pre>
                </div>
                <div className="absolute top-4 flex gap-2">
                    <FaCircle className="text-red-500 text-sm" />
                    <FaCircle className="text-yellow-400 text-sm" />
                    <FaCircle className="text-green-500 text-sm" />
                </div>
                <button onClick={handleCopy} className='absolute top-4 right-4 flex gap-1 bg-gray-600 px-3 py-1 rounded text-sm items-center text-white '>
                    <IoCopyOutline />
                    {copied ? "Copied" : "Copy"}
                </button>
            </div>
        </div>
    );
};

export default LinuxCode;


`

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


    return (
        <div>
            <div className='relative bg-gradient-to-tl from-[#252B37] w-[35vw] to-[#383e49] text-[#fff5f5] p-5  rounded-xl '>
                <div className='overflow-y-auto'>
                    <pre>{code}</pre>
                </div>
                <div className="absolute top-4 flex gap-2">
                    <FaCircle className="text-red-500 text-sm" />
                    <FaCircle className="text-yellow-400 text-sm" />
                    <FaCircle className="text-green-500 text-sm" />
                </div>
                <button onClick={handleCopy} className='absolute top-4 right-4 flex gap-1 bg-gray-600 px-3 py-1 rounded text-sm items-center text-white '>
                    <IoCopyOutline />
                    {copied ? "Copied" : "Copy"}
                </button>
            </div>
        </div>
    );
};

export default LinuxCode;
