const Tutorial = () => {
    return (
        <div className="min-h-screen  bg-gray-800">

            {/* Header */}
            <header className="h-16 bg-gray-900 w-full">
            </header>

            {/* Body */}
            <div className="flex h-[calc(100vh-4rem)]">

                {/* Sidebar */}
                <aside className="w-52 bg-gray-700">
                </aside>

                {/* Main Content */}
                <main className="flex-1 bg-gray-800 p-4 h-full overflow-y-scroll ">
                    <div className="text-white">
                        <div>
                            <h3>Html Tutorial</h3>
                            <iframe width="600" height="400" src="https://www.youtube.com/embed/kUMe1FH4CHE" title="HTML &amp; CSS Full Course - Beginner to Pro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3>CSS Tutorial</h3>
                            <iframe width="600" height="400" src="https://www.youtube.com/embed/OXGznpKZ_sA" title="HTML &amp; CSS Full Course - Beginner to Pro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3>JavaScript Tutorial</h3>
                            <iframe width="600" height="400" src="https://www.youtube.com/embed/lfmg-EJ8gm4" title="HTML &amp; CSS Full Course - Beginner to Pro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div> 
                        <div>
                            <h3>Tailwind css Tutorial</h3>
                            <iframe width="600" height="400" src="https://www.youtube.com/embed/6biMWgD6_JY" title="HTML &amp; CSS Full Course - Beginner to Pro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>

                    <h2 className="text-white text-2xl font-bold mt-10 mb-6">Advance --------------</h2>

                    <div className="text-white">
                        <div>
                            <h3>React JS Tutorial</h3>
                            <iframe width="600" height="400" src="https://www.youtube.com/embed/dCLhUialKPQ" title="HTML &amp; CSS Full Course - Beginner to Pro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div> 
                        <div>
                            <h3>React JS Tutorial</h3>
                            <iframe width="600" height="400" src="https://www.youtube.com/embed/x4rFhThSX04" title="HTML &amp; CSS Full Course - Beginner to Pro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3>Next JS Tutorial</h3>
                            <iframe width="600" height="400" src="https://www.youtube.com/embed/I1V9YWqRIeI" title="HTML &amp; CSS Full Course - Beginner to Pro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>

                </main>

            </div>
        </div>
    );
};

export default Tutorial;
