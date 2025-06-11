import React from 'react';

const Input = () => {
    return (
        <div>
            <div className="bg-[#b0c4de] min-h-screen flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 p-4">
                    
                    {/* <!-- Search Input --> */}
                    <input
                    type="text"
                    placeholder="Search...."
                    className="px-6 py-3 rounded-full bg-[#b0c4de] text-gray-700 placeholder-gray-500 shadow-[inset_4px_4px_8px_#a1b2c4,inset_-4px_-4px_8px_#c1d6f0] focus:outline-none w-[250px]"
                    />
                    
                    {/* <!-- Button --> */}
                    <button
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#b0c4de] shadow-[4px_4px_8px_#a1b2c4,-4px_-4px_8px_#c1d6f0]"
                    >
                    🔍
                    </button>

                </div>
                <div className='flex items-center gap-2'>
                    <input type="text" name="text" id="" placeholder='Search....' className='w-[250px] h-12 flex items-center px-6 py-3 justify-center rounded-full bg-[#b0c4de] placeholder-gray-500 focus:outline-none shadow-[4px_4px_8px_#a1b2c4,-4px_-4px_8px_#c1d6f0]' />
                    <button
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#b0c4de] text-gray-700  shadow-[inset_4px_4px_8px_#a1b2c4,inset_-4px_-4px_8px_#c1d6f0] focus:outline-none   "
                    >
                    🔍
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Input;