
import CodeShowCard from '../components/ui/code/CodeShowCard';
import GigCode from '../components/ui/code/GigCode';
import GitCod from '../components/ui/code/GitCod';
import MacCode from '../components/ui/code/MacCode';
import Drawer from '../components/ui/Drawer';



const Code = () => {
    return (
        <div>
            <Drawer/>
            <div className='mt-24 mb-28 flex flex-col items-center gap-7'>
                <div>
                    <CodeShowCard/>
                </div>
                <div>
                    <GitCod/>
                </div>
                <div>
                    <GigCode/>
                </div>
                <div>
                    <MacCode/>
                </div>
            </div>
        </div>
    );
};

export default Code;