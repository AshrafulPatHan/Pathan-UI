import React from 'react';
import Drawer from '../components/ui/Drawer';
import BasicFrom from '../components/ui/from/basicFrom';

const Form = () => {
    return (
        <div>
            <Drawer />
            <div>
                <div>
                    <BasicFrom />
                </div>
            </div>
        </div>
    );
};

export default Form;