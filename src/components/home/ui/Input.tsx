import React from 'react';

const Input = () => {
    const inputStyles = "w-full max-w-sm px-4 py-2 rounded border shadow-sm focus:outline-none";
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold text-[var(--text-h-color)] '>Input </h2>
                <p className='text-md text-[var(--text-p-color)] font-bold my-[var(--margin-m-top)] '>Input Field</p>
                <div className="space-y-4 mx-auto">

                {/* Search Input with Icon and Shortcut */}
                <label className="flex items-center gap-2 border rounded px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                    <svg
                    className="h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    >
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                    </svg>
                    <input
                    type="search"
                    className="flex-grow outline-none bg-transparent placeholder-gray-400"
                    placeholder="Search"
                    />
                    <div className="flex items-center gap-1 text-xs text-gray-500 border px-1.5 py-0.5 rounded bg-gray-100">
                    ⌘
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 border px-1.5 py-0.5 rounded bg-gray-100">
                    K
                    </div>
                </label>

                {/* File Input with Icon */}
                <label className="flex items-center gap-2 border rounded px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                    <svg
                    className="h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    >
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    </g>
                    </svg>
                    <input
                    type="text"
                    className="flex-grow outline-none bg-transparent placeholder-gray-400"
                    placeholder="index.php"
                    />
                </label>

                {/* Path Input with label and optional badge */}
                <label className="flex items-center gap-2 border rounded px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                    <span className="text-sm text-gray-700">Path</span>
                    <input
                    type="text"
                    className="flex-grow outline-none bg-transparent placeholder-gray-400"
                    placeholder="src/app/"
                    />
                    <span className="text-xs bg-gray-200 text-gray-600 rounded-full px-2 py-0.5">
                    Optional
                    </span>
                </label>
                
                </div>
                <div >
                      <p className='text-md text-[var(--text-p-color)] font-bold my-[var(--margin-m-top)] '>Input Field</p>
                    <div className="space-y-4 flex flex-col gap-4 ">
                        <input
                            type="text"
                            placeholder="Neutral"
                            className={`${inputStyles} border-gray-300 focus:ring-2 focus:ring-gray-500`}
                        />
                        <input
                            type="text"
                            placeholder="Primary"
                            className={`${inputStyles} border-blue-500 focus:ring-2 focus:ring-blue-600`}
                        />
                        <input
                            type="text"
                            placeholder="Secondary"
                            className={`${inputStyles} border-purple-500 focus:ring-2 focus:ring-purple-600`}
                        />
                        <input
                            type="text"
                            placeholder="Accent"
                            className={`${inputStyles} border-pink-500 focus:ring-2 focus:ring-pink-600`}
                        />
                        <input
                            type="text"
                            placeholder="Info"
                            className={`${inputStyles} border-cyan-500 focus:ring-2 focus:ring-cyan-600`}
                        />
                        <input
                            type="text"
                            placeholder="Success"
                            className={`${inputStyles} border-green-500 focus:ring-2 focus:ring-green-600`}
                        />
                        <input
                            type="text"
                            placeholder="Warning"
                            className={`${inputStyles} border-yellow-500 focus:ring-2 focus:ring-yellow-600`}
                        />
                        <input
                            type="text"
                            placeholder="Error"
                            className={`${inputStyles} border-red-500 focus:ring-2 focus:ring-red-600`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Input;