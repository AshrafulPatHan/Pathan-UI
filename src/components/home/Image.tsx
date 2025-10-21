import React from 'react';
import Photo from '../../assets/image/astronot.jpg';

const Image = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-[var(--text-h-color)] '>Image </h2>
            <p className='text-md text-[var(--text-p-color)] font-bold my-[var(--margin-m-top)] '>Image Shape</p>
            <div className='flex items-center gap-7'>
                <div>
                    <img src={Photo} alt="photo" className='w-40 h-40 object-cover rounded-md ' />
                </div>
                <div>
                    <img src={Photo} alt="photo" className='w-40 h-40 object-cover rounded-full ' />
                </div>
                <div>
                    <img src={Photo} alt="photo" className='w-40 h-40 object-cover shadow-xl/20 rounded-md ' />
                </div>
                <div>
                    <img src={Photo} alt="photo" className='w-40 h-40 object-cover shadow-xl/20 rounded-full ' />
                </div>
            </div> 
            <p className='text-md text-[var(--text-p-color)] font-bold my-[var(--margin-m-top)] '>Image Transition</p>
            <div>
                <div className="w-40 h-40 rounded-full overflow-hidden group">
                    <img src={Photo} alt="photo" className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110 " />
                </div>
            </div>
        </div>
    );
};

export default Image;