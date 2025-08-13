import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaDesktop, FaHome, FaInfoCircle, FaCog, FaEnvelope } from "react-icons/fa";
import { FaCircleStop } from "react-icons/fa6";
import { FaLongArrowAltUp } from "react-icons/fa";
import { Link } from "react-router";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mainMenuItems = [
    { to: "/ui", label: "Home", icon: <FaHome className="w-4 h-4" /> },
    { to: "#", label: "About", icon: <FaInfoCircle className="w-4 h-4" /> },
    { to: "#", label: "Services", icon: <FaCog className="w-4 h-4" /> },
    { to: "#", label: "Contact", icon: <FaEnvelope className="w-4 h-4" /> },
  ];

  const componentItems = [
    { to: '/code', label: 'Code', icon: '💻' },
    { to: '/template', label: 'Template', icon: '📋' },
    { to: '/button', label: 'Button', icon: '🔘' },
    { to: '/card', label: 'Card', icon: '🃏' },
    { to: '/navbar', label: 'Navbar', icon: '🧭' },
    { to: '/footer', label: 'Footer', icon: '🦶' },
    { to: '/hero', label: 'Hero', icon: '🌟' },
    { to: '/form', label: 'Form', icon: '📝' },
    { to: '/input', label: 'Input', icon: '⌨️' },
    { to: '/login', label: 'Login', icon: '🔐' },
    { to: '/registration', label: 'Registration', icon: '📋' },
    { to: '/admin-page', label: 'Admin Page', icon: '👑' },
    { to: '/dropdown', label: 'Dropdown', icon: '📋' },
    { to: '/menu', label: 'Menu', icon: '☰' },
    { to: '/image-shape', label: 'Image Shape', icon: '🖼️' },
    { to: '/contact', label: 'Contact', icon: '📞' },
    { to: '/slider', label: 'Slider', icon: '🎚️' },
    { to: '/image', label: 'Image', icon: '🖼️' },
    { to: '/shape', label: 'Shape', icon: '🔷' },
    { to: '/header-text', label: 'Header Text', icon: '📰' },
    { to: '/paragraph-text', label: 'Paragraph Text', icon: '📄' },
    { to: '/model', label: 'Modal', icon: '🪟' },
    { to: '/color', label: 'Color Palette', icon: '🎨' },
    { to: '/color-text', label: 'Color Text', icon: '🌈' },
    { to: '/font', label: 'Font Family', icon: '🔤' },
    { to: '/flex', label: 'Flexbox', icon: '📐' },
    { to: '/grid', label: 'Grid Layout', icon: '⚏' },
    { to: '/animation', label: 'Animation', icon: '✨' },
    { to: '/nav-animation', label: 'Navbar Animation', icon: '🎭' },
    { to: '/scroll-animation', label: 'Scroll Animation', icon: '📜' },
    { to: '/javascript', label: 'JavaScript', icon: '⚡' },
    { to: '/express', label: 'Express', icon: '🚄' },
    { to: '/tutorial', label: 'Tutorial', icon: '📚' }
  ];

  return (
    <>
      {/* Floating Navigation Bar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#ffffff0e] backdrop-blur-[8.2px] border border-white/20 px-6 py-3 rounded-2xl flex items-center justify-center gap-4 shadow-[0_0_10px_rgba(0,0,0,0.3)] ">
        <button
          onClick={() => setIsOpen(true)}
          className="group p-2 rounded-xl transition-all duration-300 hover:bg-purple-400/20 hover:scale-110"
          title="Menu"
        >
          <IoMdMenu className="text-2xl  text-blue-500 group-hover:text-blue-600 transition-colors duration-300"/>
        </button>
        
        <button
          className="group p-2 rounded-xl transition-all duration-300 hover:bg-pink-400/20 hover:scale-110"
          title="Stop"
        >
          <FaCircleStop className="text-xl  text-blue-500 group-hover:text-blue-600 transition-colors duration-300"/>
        </button>
        
        <button
          className="group p-2 rounded-xl transition-all duration-300 hover:bg-blue-400/20 hover:scale-110"
          title="Desktop"
        >
          <FaDesktop className="text-xl text-blue-500 group-hover:text-blue-600 transition-colors duration-300"/>
        </button>
        
        <button
          className="group p-2 rounded-xl transition-all duration-300 hover:bg-green-400/20 hover:scale-110"
          title="Scroll to Top"
        >
          <FaLongArrowAltUp className="text-xl  text-blue-500 group-hover:text-blue-600 transition-colors duration-300"/>
        </button>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-800/95 backdrop-blur-xl border-r border-white/10 shadow-2xl z-50 transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Components
            </h2>
            <p className="text-sm text-gray-400 mt-1">UI Library</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="group p-2 rounded-xl bg-white/5 hover:bg-red-400/20 transition-all duration-300 hover:scale-110"
          >
            <IoMdClose className="text-xl text-gray-300 group-hover:text-red-200 transition-colors duration-300" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="flex flex-col h-[calc(100%-5rem)]">
          {/* Main Menu */}
          <div className="p-6 border-b border-white/10">
            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Main Menu</h3>
            <ul className="space-y-2">
              {mainMenuItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to} 
                    className="group flex items-center gap-3 p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-400/20 hover:to-pink-400/20 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Components List */}
          <div className="flex-1 p-6 overflow-hidden">
            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">UI Components</h3>
            <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-1">
                {componentItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.to} 
                      className="group flex items-center gap-3 p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-400/10 hover:to-pink-400/10 transition-all duration-300 hover:translate-x-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.label}</span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10">
            <div className="text-center">
              <p className="text-xs text-gray-500">
                UI Component Library
              </p>
              <div className="mt-2 w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a855f7, #ec4899);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9333ea, #db2777);
        }
      `}</style>
    </>
  );
};

export default Drawer;
