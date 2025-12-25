
import { Link } from "react-router";
import { useState } from "react";
import Drawer from "../components/ui/Drawer";

const Ui = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const uiComponents = [
        { path: '/code', name: 'Code', icon: '💻', category: 'Development' },
        { path: '/template', name: 'Template', icon: '📋', category: 'Layout' },
        { path: '/button', name: 'Button', icon: '🔘', category: 'Interactive' },
        { path: '/card', name: 'Card', icon: '🃏', category: 'Layout' },
        { path: '/navbar', name: 'Navbar', icon: '🧭', category: 'Navigation' },
        { path: '/footer', name: 'Footer', icon: '🚧', category: 'Layout' },
        { path: '/hero', name: 'Hero', icon: '🌟', category: 'Layout' },
        { path: '/form', name: 'Form', icon: '📝', category: 'Interactive' },
        { path: '/input', name: 'Input', icon: '⌨️', category: 'Interactive' },
        { path: '/login', name: 'Login', icon: '🔐', category: 'Authentication' },
        { path: '/registration', name: 'Registration', icon: '📋', category: 'Authentication' },
        { path: '/admin-page', name: 'Admin Page', icon: '👑', category: 'Pages' },
        { path: '/dropdown', name: 'Dropdown', icon: '📋', category: 'Interactive' },
        { path: '/menu', name: 'Menu', icon: '☰', category: 'Navigation' },
        { path: '/image-shape', name: 'Image Shape', icon: '🖼️', category: 'Visual' },
        { path: '/contact', name: 'Contact', icon: '📞', category: 'Pages' },
        { path: '/slider', name: 'Slider', icon: '🎚️', category: 'Interactive' },
        { path: '/image', name: 'Image', icon: '🖼️', category: 'Visual' },
        { path: '/shape', name: 'Shape', icon: '🔷', category: 'Visual' },
        { path: '/header-text', name: 'Header Text', icon: '📰', category: 'Typography' },
        { path: '/paragraph-text', name: 'Paragraph Text', icon: '📄', category: 'Typography' },
        { path: '/modal', name: 'Modal', icon: '🪟', category: 'Interactive' },
        { path: '/color', name: 'Color Palette', icon: '🎨', category: 'Design' },
        { path: '/color-text', name: 'Color Text', icon: '🌈', category: 'Typography' },
        { path: '/font', name: 'Font Family', icon: '🔤', category: 'Typography' },
        { path: '/flex', name: 'Flexbox', icon: '📐', category: 'Layout' },
        { path: '/grid', name: 'Grid Layout', icon: '⚏', category: 'Layout' },
        { path: '/animation', name: 'Animation', icon: '✨', category: 'Effects' },
        { path: '/nav-animation', name: 'Navbar Animation', icon: '🎭', category: 'Effects' },
        { path: '/scroll-animation', name: 'Scroll Animation', icon: '📜', category: 'Effects' },
        { path: '/javascript', name: 'JavaScript', icon: '⚡', category: 'Development' },
        { path: '/express', name: 'Express', icon: '🚄', category: 'Development' },
        { path: '/tutorial', name: 'Tutorial', icon: '📚', category: 'Learning' }
    ];

    const categories = [...new Set(uiComponents.map(comp => comp.category))];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
            <Drawer />
            
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <main className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
                        UI Components
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Explore our comprehensive collection of beautiful, responsive UI components and design elements
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    </div>
                </div>

                {/* Component Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {uiComponents.map((component, index) => (
                            <Link
                                key={component.path}
                                to={component.path}
                                className="group relative"
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className={`
                                    relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 
                                    backdrop-blur-sm border border-white/10 p-6 h-32
                                    transition-all duration-500 ease-out
                                    hover:scale-105 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20
                                    hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/25
                                    ${hoveredCard === index ? 'transform -translate-y-2' : ''}
                                `}>
                                    {/* Animated background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-pink-400/0 to-blue-400/0 group-hover:from-purple-400/10 group-hover:via-pink-400/10 group-hover:to-blue-400/10 transition-all duration-500"></div>
                                    
                                    {/* Content */}
                                    <div className="relative z-10 h-full flex flex-col justify-between">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                                {component.icon}
                                            </span>
                                            <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300 group-hover:bg-purple-400/20 group-hover:text-purple-200 transition-all duration-300">
                                                {component.category}
                                            </span>
                                        </div>
                                        
                                        <div>
                                            <h3 className="text-white font-semibold text-sm group-hover:text-purple-200 transition-colors duration-300">
                                                {component.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Hover effect overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-pink-400/0 group-hover:from-purple-400/5 group-hover:to-pink-400/5 rounded-2xl transition-all duration-500"></div>
                                    
                                    {/* Animated border */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/0 via-pink-400/0 to-blue-400/0 group-hover:from-purple-400/50 group-hover:via-pink-400/50 group-hover:to-blue-400/50 opacity-0 group-hover:opacity-100 transition-all duration-500" 
                                         style={{
                                             background: 'linear-gradient(90deg, transparent, transparent)',
                                             maskImage: 'linear-gradient(white, white) content-box, linear-gradient(white, white)',
                                             maskComposite: 'xor',
                                             WebkitMaskComposite: 'xor',
                                             padding: '1px'
                                         }}>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="group">
                            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                {uiComponents.length}
                            </div>
                            <div className="text-gray-400 mt-2">Components</div>
                        </div>
                        <div className="group">
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                {categories.length}
                            </div>
                            <div className="text-gray-400 mt-2">Categories</div>
                        </div>
                        <div className="group">
                            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                100%
                            </div>
                            <div className="text-gray-400 mt-2">Responsive</div>
                        </div>
                        <div className="group">
                            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                ∞
                            </div>
                            <div className="text-gray-400 mt-2">Possibilities</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Ui;