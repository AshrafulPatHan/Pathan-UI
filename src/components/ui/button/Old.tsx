import React from 'react';
import Google from '../../../assets/icon/Google.svg';
import { FaFacebook } from 'react-icons/fa';



const Old = () => {
    return (
        <div>
            <div className='flex flex-col items-center gap-14 mt-24 mb-28'>
                <div>
                    <div className='flex items-center gap-8'>
                        <button className='w-40 h-16 bg-[#e6e2ee] text-[#997777] rounded-lg font-semibold border-4 border-[#ded6e9] cursor-pointer '>Button1</button>
                        <button className='w-40 h-16 bg-blue-600 text-white rounded-lg font-semibold cursor-pointer '>Button2</button>
                        <button className='w-40 h-16 bg-gradient-to-tl from-blue-700 to-blue-600 text-white rounded-lg font-semibold cursor-pointer '>Button3</button>
                        <button className='p-5 bg-gradient-to-tl from-[#141414] to-[#0b3847] text-white rounded-lg font-semibold flex items-center justify-center cursor-pointer '><img src={Google} alt="google" /></button>                     
                    </div>
                    <div></div>
                </div>
                <div>
                    <div className='flex items-center gap-8'>
                        <button className=' h-16  font-semibold flex items-center text-center gap-3 bg-blue-600 text-white  rounded-xl px-4 cursor-pointer'>
                            <FaFacebook className='text-3xl' /> Login With Facebook
                        </button>
                        <button className=' h-16  font-semibold flex items-center text-center gap-3 bg-gradient-to-bl from-blue-700 to-blue-600 text-white  rounded-xl px-4 cursor-pointer '>
                            <FaFacebook className='text-3xl' /> Login With Facebook
                        </button>
                        <button className=' py-4 px-4 font-semibold flex items-center text-center gap-3 bg-blue-600 text-white border-8 border-[#ffffffc9] rounded-xl cursor-pointer '>
                            <FaFacebook className='text-3xl' /> Login With Facebook
                        </button>
                        {/* <button className=' h-16  font-semibold flex items-center text-center gap-3 bg-blue-600 text-white  rounded-xl px-4 cursor-pointer '>
                            <FaFacebook className='text-3xl' /> Login With Facebook
                        </button> */}
                    </div>
                    <div></div>
                </div>
                <div>
                    <div className='flex items-center gap-8'>
                        <div className='bg-[#b0c4de] w-20 h-20 flex items-center justify-center rounded-lg cursor-pointer '>
                            <button
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#b0c4de] shadow-[4px_4px_8px_#a1b2c4,-4px_-4px_8px_#c1d6f0] cursor-pointer ">
                            🔍
                            </button>
                        </div>
                        <div className='bg-[#b0c4de] w-20 h-20 flex items-center justify-center rounded-lg '>
                            <button
                            className="w-12 h-12 flex items-center justify-center rounded-full cursor-pointer bg-[#b0c4de] text-gray-700  shadow-[inset_4px_4px_8px_#a1b2c4,inset_-4px_-4px_8px_#c1d6f0] focus:outline-none   "
                            >
                            🔍
                            </button>
                        </div>
                        <button className='w-40 h-16 font-semibold cursor-pointer'>Button3</button>
                        <button className='w-40 h-16 font-semibold cursor-pointer'>Button4</button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Old;