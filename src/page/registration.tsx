import React from 'react';
import Drawer from '../components/ui/Drawer';
import StartRegister from '../components/ui/registration/startRegis';

const Registration = () => {
    return (
        <div>
            <Drawer/>
            <div>
                <div>
                    <StartRegister/>
                </div>
            </div>
        </div>
    );
};

export default Registration;