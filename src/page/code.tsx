import React from 'react';
import CodeShowCard from '../components/ui/code/CodeShowCard';
import Drawer from '../components/ui/Drawer';

const Code = () => {
    return (
        <div>
            <Drawer/>
            <div className='mt-24'>
                <CodeShowCard/>
            </div>
        </div>
    );
};

export default Code;