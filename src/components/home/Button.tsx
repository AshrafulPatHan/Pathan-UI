import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router';

const Button = () => {
    return (
        <div>
            <div>
                <h2 className='text-2xl text-[var(--text-h-color)] font-bold mb-4'>Basic Elements</h2>
                <h4 className='text-xl font-light text-[var(--text-h-color)] mb-[var(--margin-bot-sm)] '>Button</h4>
                <p className='text-md text-[var(--text-p-color)] font-bold '>Pick Your Style</p>
                <div className='mt-[var(--margin-m-top)] mb-[var(--margin-m-top)] flex items-center gap-3 '>
                    <button className='py-3 px-6 bg-[#F96332] text-white rounded-sm '>Default</button>
                    <button className='py-3 px-6 bg-[#F96332] text-white rounded-3xl '>Round</button>
                    <button className='py-3 px-6 bg-[#F96332] text-white rounded-3xl flex items-center gap-1 text-lg '><CiHeart/> With icon</button>
                    <button className='py-3 px-3 bg-[#F96332] text-white rounded-full '><CiHeart className='text-lg font-bold'/></button>
                    <button className='py-3 px-6 text-[#F96332] rounded-3xl border border-[#F96332] '>Simple</button>
                </div>
                <p className='text-md text-[var(--text-p-color)] font-bold '>Pick Your Size</p>
                <div className='mt-[var(--margin-m-top)] mb-[var(--margin-m-top)] flex items-center gap-3 '>
                    <button className='py-1 px-6 bg-[#F96332] text-white rounded-sm '>Default</button>
                    <button className='py-2 px-6 bg-[#F96332] text-white rounded-sm '>Default</button>
                    <button className='py-3 px-6 bg-[#F96332] text-white rounded-sm '>Default</button>
                    <button className='py-4 px-6 bg-[#F96332] text-white rounded-sm '>Default</button>
                    <button className='py-5 px-6 bg-[#F96332] text-white rounded-sm '>Default</button>
                </div>
                <p className='text-md text-[var(--text-p-color)] font-bold '>Pick Your Color</p>
                <div className='mt-[var(--margin-m-top)] mb-[var(--margin-m-top)] flex items-center gap-3 '>
                    <button className='py-3 px-6 bg-[#888888] text-white rounded-sm '>Default</button>
                    <button className='py-3 px-6 bg-[#F96332] text-white rounded-sm '>Default</button>
                    <button className='py-3 px-6 bg-[#2CA8FF] text-white rounded-sm '>Default</button>
                    <button className='py-3 px-6 bg-[#18CE0F] text-white rounded-sm '>Default</button>
                    <button className='py-3 px-6 bg-[#ff3636a6] text-white rounded-sm '>Default</button>
                </div> 
                <h4 className='text-xl font-light text-[var(--text-h-color)] mb-[var(--margin-bot-sm)] '>Link</h4>
                <div className='mt-[var(--margin-m-top)] mb-[var(--margin-m-top)] flex items-center gap-3 '>
                   <Link to='/#' className='text-pink-600 text-sm font-medium hover:underline' >Default</Link>
                   <Link to='/#' className='text-yellow-500 text-md font-medium hover:underline' >Default</Link>
                   <Link to='/#' className='text-blue-500 text-lg font-medium hover:underline' >Default</Link>
                   <Link to='/#' className='text-green-600 text-xl font-medium hover:underline' >Default</Link>
                   <Link to='/#' className='text-cyan-600 text-2xl font-medium hover:underline' >Default</Link>
                </div>
            </div>
        </div>
    );
};

export default Button;