import React, { useState } from 'react';
import { IoCopyOutline } from "react-icons/io5";



const GigCode = () => {
const [copied, setCopied] = useState(false);


const code = `
function Name(){
    return("Hello world")
};

Name()
`

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


    return (
        <div>
            <div className='relative bg-gradient-to-tl from-[#252B37] w-[35vw] to-[#383e49] text-[#f1eaea] p-5 overflow-hidden rounded-xl '>
                <pre>{code}</pre>
                <button onClick={handleCopy} className='absolute top-4 right-4 flex gap-1 bg-gray-600 px-3 py-1 rounded text-sm items-center text-white '>
                    <IoCopyOutline />
                    {copied ? "Copied" : "Copy"}
                </button>
            </div>
        </div>
    );
};

export default GigCode;
