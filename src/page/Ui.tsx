import { Link } from "react-router";
import Drawer from "../components/ui/Drawer";


const Ui = () => {
    return (
        <div className="relative min-h-screen bg-black">
        <Drawer />
            <main className="p-8 grid grid-cols-5 gap-3 pt-28 items-center">
                <Link to='/code' className="Link_card">code</Link>
                <Link to='/template' className="Link_card">Template</Link>
                <Link to='/button' className="Link_card">button</Link>
                <Link to='/card' className="Link_card">card</Link>
                <Link to='/navbar' className="Link_card">navbar</Link>
                <Link to='/footer' className="Link_card">footer</Link>
                <Link to='/hero' className="Link_card">hero</Link>
                <Link to='/form' className="Link_card">from</Link>
                <Link to='/input' className="Link_card">input</Link>
                <Link to='/login' className="Link_card">login</Link>
                <Link to='/registration' className="Link_card">registration</Link>
                <Link to='/admin-page' className="Link_card">admin page</Link>
                <Link to='/dropdown' className="Link_card">dropdown</Link>
                <Link to='/menu' className="Link_card">menu</Link>
                <Link to='/image-shape' className="Link_card">image shape</Link>
                <Link to='/contact' className="Link_card">contact</Link>
                <Link to='/slider' className="Link_card">slider</Link>
                <Link to='/image' className="Link_card">image</Link>
                <Link to='/shape' className="Link_card">shape</Link>
                <Link to='/header-text' className="Link_card">heder text</Link>
                <Link to='/paragraph-text' className="Link_card">paragraph text</Link>
                <Link to='/model' className="Link_card">modal</Link>
                <Link to='/color' className="Link_card">color plate</Link>
                <Link to='/color-text' className="Link_card">color text</Link>
                <Link to='/font' className="Link_card">font family</Link>
                <Link to='/flex' className="Link_card">flex box</Link>
                <Link to='/grid' className="Link_card">grid layout</Link>
                <Link to='/animation' className="Link_card">animation</Link>
                <Link to='/nav-animation' className="Link_card">navbar animation</Link>
                <Link to='/scroll-animation' className="Link_card">scroll animation</Link>
                <Link to='/javascript' className="Link_card">javascript</Link>
                <Link to='/express' className="Link_card">express</Link>
                <Link to='/tutorial' className="Link_card">Tutorial</Link>
                {/* <Link to='#' className="Link_card"></Link> */}
            </main>
        </div>
    );
};

export default Ui;