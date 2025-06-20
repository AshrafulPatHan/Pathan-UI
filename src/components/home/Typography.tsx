import React from 'react';

const Typography = () => {
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold text-[var(--text-h-color)] '>Typography</h2>
                <p className='text-md text-[var(--text-p-color)] font-bold my-[var(--margin-m-top)] '>Heading</p>
                <div className='flex flex-col items-start gap-12'>
                    <h1 className='text-9xl font-bold text-black '>The Life of Now UI Kit</h1>
                    <h2 className='text-8xl font-bold text-black '>The Life of Now UI Kit</h2>
                    <h3 className='text-7xl font-bold text-black '>The Life of Now UI Kit</h3>
                    <h4 className='text-6xl font-bold text-black '>The Life of Now UI Kit</h4>
                    <h5 className='text-5xl font-bold text-black '>The Life of Now UI Kit</h5>
                    <h6 className='text-4xl font-bold text-black '>The Life of Now UI Kit</h6>
                    <h6 className='text-3xl font-bold text-black '>The Life of Now UI Kit</h6>
                    <h6 className='text-2xl font-bold text-black '>The Life of Now UI Kit</h6>
                    <h6 className='text-xl font-bold text-black '>The Life of Now UI Kit</h6>
                    <h6 className='text-lg font-bold text-black '>The Life of Now UI Kit</h6>
                </div> 
                <p className='text-md text-[var(--text-p-color)] font-bold my-[var(--margin-m-top)] '>Paragraph</p>
                <div className='flex flex-col items-start gap-12'>
                    <p className='text-3xl font-bold text-black'>The Life of Now UI Kit</p>
                    <p className='text-2xl font-bold text-black'>The Life of Now UI Kit</p>
                    <p className='text-xl font-bold text-black'>The Life of Now UI Kit</p>
                    <p className='text-lg font-bold text-black'>The Life of Now UI Kit</p>
                    <p className='text-md font-bold text-black'>The Life of Now UI Kit</p>
                    <p className='text-sm font-bold text-black'>The Life of Now UI Kit</p>
                </div>
                <p className='text-md text-[var(--text-p-color)] font-bold my-[var(--margin-m-top)] '>Bold</p>
                <div className='flex flex-col items-start gap-12'>
                    <h1 className='text-2xl font-black text-black '>The Life of Now UI Kit</h1>
                    <h1 className='text-2xl font-extrabold text-black '>The Life of Now UI Kit</h1>
                    <h1 className='text-2xl font-bold text-black '>The Life of Now UI Kit</h1>
                    <h1 className='text-2xl font-semibold text-black '>The Life of Now UI Kit</h1>
                    <h1 className='text-2xl font-medium text-black '>The Life of Now UI Kit</h1>
                    <h1 className='text-2xl font-normal text-black '>The Life of Now UI Kit</h1>
                    <h1 className='text-2xl font-light text-black '>The Life of Now UI Kit</h1>
                    <h1 className='text-2xl font-extralight text-black '>The Life of Now UI Kit</h1>
                    <h1 className='text-2xl font-thin text-black '>The Life of Now UI Kit</h1>
                </div> 
            </div>
        </div>
    );
};

export default Typography;