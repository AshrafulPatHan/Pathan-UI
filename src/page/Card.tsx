import React from 'react';
import Drawer from '../components/ui/Drawer';
import NormalCard from '../components/ui/card/normarCard';

const Card = () => {
    return (
        <div>
            <Drawer/>
            <div>
                <div>
                    <NormalCard/>
                </div>
            </div>
        </div>
    );
};

export default Card;