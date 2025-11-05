import Drawer from '../components/ui/Drawer';
import NormalHero from '../components/ui/hero/NormalHero';

const Hero = () => {
    return (
        <div>
            <Drawer/>
            <div>
                <div>
                    <NormalHero/>
                </div>
            </div>
        </div>
    );
};

export default Hero;