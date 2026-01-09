import Drawer from '../components/ui/Drawer';
import Type2Card from '../components/ui/card/Type2Card';
import NormalCard from '../components/ui/card/normarCard';

const Card = () => {
    return (
        <div>
            <Drawer />
            <div>
                {/* 1 */}
                <NormalCard />
                {/* 2 */}
                <Type2Card/>
            </div>
        </div>
    );
};

export default Card;