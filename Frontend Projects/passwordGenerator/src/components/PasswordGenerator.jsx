import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  // Function to generate the password
  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Function to copy password to clipboard
  const copyToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      window.navigator.clipboard.writeText(password);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white text-gray-800">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Password Generator</h1>
        
        {/* Password Display */}
        <div className="relative mb-6">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full p-4 text-xl rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 transition"
          />
          <button
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
            onClick={copyToClipboard}
          >
            Copy
          </button>

          {/* Tooltip when copied */}
          {copied && (
            <span className="absolute bottom-14 right-0 transform -translate-x-1/2 mt-2 px-3 py-1 text-sm text-white bg-green-500 rounded-lg opacity-100 transition-opacity duration-300">
              Copied!
            </span>
          )}
        </div>

        {/* Length and Options */}
        <div className="flex justify-between items-center mb-4">
          <label className="text-sm font-medium">Length</label>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full max-w-xs"
          />
          <span>{length}</span>
        </div>

        {/* Number & Special Character Options */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              id="numbers"
              className="h-5 w-5"
            />
            <label htmlFor="numbers" className="text-sm">Include Numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              id="chars"
              className="h-5 w-5"
            />
            <label htmlFor="chars" className="text-sm">Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
