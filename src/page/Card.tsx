import Drawer from '../components/ui/Drawer';
import Type2Card from '../components/ui/card/Type2Card';
import Type3Card from '../components/ui/card/Type3Card';
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
                {/* 3 */}
                <Type3Card/>
            </div>
        </div>
    );
};

export default Card;