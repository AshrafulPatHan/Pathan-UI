import React from 'react';
import Drawer from '../components/ui/Drawer';
import StartDrop from '../components/ui/dropdown/startDrop';

const Dropdown = () => {
    return (
        <div>
            <Drawer/>
            <div>
                <div>
                    <StartDrop/>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;