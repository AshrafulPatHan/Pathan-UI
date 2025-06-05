import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaDesktop } from "react-icons/fa";
import { FaCircleStop } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";
import { Link } from "react-router";




const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="fixed top-2 left-1/2 z-50 bg-[#c0baca] 100 p-4 rounded-3xl flex items-center justify-center gap-12">
      <div>
        <button
        onClick={() => setIsOpen(true)}
        >
          <IoMdMenu className="text-2xl text-black mt-1"/>
        </button>
      </div>
      <div>
        <button
        onClick={() => setIsOpen(true)}
        >
          <FaCircleStop className="text-2xl text-black  mt-1"/>
        </button>
      </div>
      <div>
        <button
        onClick={() => setIsOpen(true)}
        >
          <FaDesktop className="text-2xl text-black mt-1"/>
        </button>
      </div>
      <div>
        <button
        onClick={() => setIsOpen(true)}
        >
          <FaLongArrowAltUp className="text-2xl text-black mt-1"/>
        </button>
      </div>
    </nav>
      {/* Toggle Button */}
      

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-20 bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-600">
            ✕
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-4">
            <li><Link to="/" className="brawer_text">Home</Link></li>
            <li><Link to="#" className="brawer_text">About</Link></li>
            <li><Link to="#" className="brawer_text">Services</Link></li>
            <li><Link to="#" className="brawer_text">Contact</Link></li>
          </ul>
          <hr/>
          <ul className="space-y-4 h-[calc(100vh-15rem)] overflow-y-auto">
            <li><Link to='#' className="brawer_text">code</Link></li>
            <li><Link to='#' className="brawer_text">button</Link></li>
            <li><Link to='#' className="brawer_text">card</Link></li>
            <li><Link to='#' className="brawer_text">navbar</Link></li>
            <li><Link to='#' className="brawer_text">footer</Link></li>
            <li><Link to='#' className="brawer_text">hero</Link></li>
            <li><Link to='#' className="brawer_text">from</Link></li>
            <li><Link to='#' className="brawer_text">input</Link></li>
            <li><Link to='#' className="brawer_text">login</Link></li>
            <li><Link to='#' className="brawer_text">registration</Link></li>
            <li><Link to='#' className="brawer_text">admin page</Link></li>
            <li><Link to='#' className="brawer_text">dropdown</Link></li>
            <li><Link to='#' className="brawer_text">menu</Link></li>
            <li><Link to='#' className="brawer_text">image shape</Link></li>
            <li><Link to='#' className="brawer_text">contact</Link></li>
            <li><Link to='#' className="brawer_text">clider</Link></li>
            <li><Link to='#' className="brawer_text">image</Link></li>
            <li><Link to='#' className="brawer_text">shape</Link></li>
            <li><Link to='#' className="brawer_text">heder text</Link></li>
            <li><Link to='#' className="brawer_text">pragraf text</Link></li>
            <li><Link to='#' className="brawer_text">modal</Link></li>
            <li><Link to='#' className="brawer_text">color plate</Link></li>
            <li><Link to='#' className="brawer_text">color text</Link></li>
            <li><Link to='#' className="brawer_text">font family</Link></li>
            <li><Link to='#' className="brawer_text">flex box</Link></li>
            <li><Link to='#' className="brawer_text">grid layout</Link></li>
            <li><Link to='#' className="brawer_text">animation</Link></li>
            <li><Link to='#' className="brawer_text">navbar animation</Link></li>
            <li><Link to='#' className="brawer_text">scroll animation</Link></li>
            <li><Link to='#' className="brawer_text">javascript</Link></li>
            <li><Link to='#' className="brawer_text">express</Link></li>
            <li><Link to='#' className="brawer_text">Tutorial</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Drawer;
