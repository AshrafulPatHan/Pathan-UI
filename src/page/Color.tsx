import React from 'react';
import ColorPalate from '../assets/UI/Section.svg';
import ColorPalateG from '../assets/UI/Section(1).svg';
import Drawer from '../components/ui/Drawer';



const Color = () => {
    return (
        <div>
            <Drawer/>
            <div>
                <img src={ColorPalate} alt="color" />
                <div>
                    <hr />
                </div>
                <img src={ColorPalateG} alt="gradin" />
            </div>
        </div>
    );
};

export default Color;