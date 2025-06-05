import { FaCircle } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";

const CodeShowCard = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1e293b] w-[90vw] text-white rounded-md shadow-lg overflow-hidden max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#0f172a]">
        <h2 className="font-bold text-white text-lg">
          <span className="text-blue-500">Code</span> Showcase
        </h2>
        <div className="flex gap-2">
          <FaCircle className="text-red-500 text-sm" />
          <FaCircle className="text-yellow-400 text-sm" />
          <FaCircle className="text-green-500 text-sm" />
        </div>
      </div>

      {/* Language Tabs */}
      <div className="flex gap-2 px-4 py-2 bg-[#0f172a]">
        <span className="bg-white text-black text-sm px-2 py-1 rounded">Javascript</span>
        <span className="bg-gray-700 text-white text-sm px-2 py-1 rounded">Typescript</span>
      </div>

      {/* Code Block */}
      <div className="relative p-4 bg-[#0f172a] font-mono text-sm">
        <pre>{code}</pre>
        <button
          onClick={handleCopy}
          className="absolute top-1 right-4 bg-gray-700 text-white text-sm px-3 py-1 rounded flex items-center gap-1 hover:bg-gray-600"
        >
          <FiCopy />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 bg-gray-100 text-gray-600 text-xs flex justify-between items-center">
        <span>Language: javascript</span>
        <span>Lines: 6</span>
      </div>
    </div>
  );
};

export default CodeShowCard;
