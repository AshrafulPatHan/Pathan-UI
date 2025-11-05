import React from 'react';
import Drawer from '../ui/Drawer';
import FirstAdmin from './firstAdmin';

const Admin_Page = () => {
    return (
        <div>
            <Drawer/>
            <div>
                <div>
                    <FirstAdmin/>
                </div>
            </div>
        </div>
    );
};

export default Admin_Page;