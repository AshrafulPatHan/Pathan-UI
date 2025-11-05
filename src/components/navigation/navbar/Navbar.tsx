import Drawer from "../../ui/Drawer";
import NormalNav from "./NormalNav";

const Navbar = () => {
    return (
        <div>
            <Drawer/>
            <div>
                <div>
                    <NormalNav/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;