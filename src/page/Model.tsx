import React from 'react';
import StartModal from '../components/ui/modal/StartModal';
import Drawer from '../components/ui/Drawer';

const Modal = () => {
    return (
         <div>
            <Drawer/>
            <div>
                <div>
                   <StartModal/>
                </div>
            </div>
        </div>
    );
};

export default Modal;