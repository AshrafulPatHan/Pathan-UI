import React from 'react';
import Drawer from '../components/ui/Drawer';
import StartMenu from '../components/ui/menu/startMenu';

const Menu = () => {
    return (
        <div>
            <Drawer/>
            <div>
                <div>
                    <StartMenu/>
                </div>
            </div>
        </div>
    );
};

export default Menu;