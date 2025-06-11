
import CodeShowCard from '../components/ui/code/CodeShowCard';
import GitCod from '../components/ui/code/GitCod';
import Drawer from '../components/ui/Drawer';

const Code = () => {
    return (
        <div>
            <Drawer/>
            <div className='mt-24'>
                <div>
                    <CodeShowCard/>
                </div>
                <div>
                    <GitCod/>
                </div>
            </div>
        </div>
    );
};

export default Code;