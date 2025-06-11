import React, { useState } from 'react';
import { IoCopyOutline } from "react-icons/io5";



const GitCod = () => {
const [copied, setCopied] = useState(false);


const code = `
function name(){
    return("Hello world")
}

name()

`

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


    return (
        <div>
            <div className='relative bg-gradient-to-tl from-[#252B37] to-[#535862] '>
                <pre>{code}</pre>
                <button onClick={handleCopy} className=''>
                    <IoCopyOutline/>
                    {copied ? "Copied" : "Copy"}
                </button>
            </div>
        </div>
    );
};

export default GitCod;