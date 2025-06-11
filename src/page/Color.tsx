import React from 'react';
import ColorPalate from '../assets/UI/Section.svg';
import Drawer from '../components/ui/Drawer';



const Color = () => {
    return (
        <div>
            <Drawer/>
            <div>
                <img src={ColorPalate} alt="color" />
            </div>
        </div>
    );
};

export default Color;