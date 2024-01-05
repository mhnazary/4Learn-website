import React, { useState } from "react";

function Dropdown() {
  const [isSubitemsVisible, setSubitemsVisibility] = useState(false);

  return (
    <div className="absolute bg-white mt-1 p-2 text-base font-sans shadow-md">
      <ul>
          <li className="w-36 cursor-pointer hover:bg-gray-100 py-1 px-2">Drop Dowm 1</li>
        <li
          className="w-40 relative group"
          onMouseEnter={() => setSubitemsVisibility(true)}
          onMouseLeave={() => setSubitemsVisibility(false)}
        >
          <div className="cursor-pointer hover:bg-gray-100 py-1 pl-3">Deep Drop Dowm</div>
          <ul
            className={`absolute right-full top-0 bg-white mt-0.5 p-2 text-base font-sans shadow-md ${
              isSubitemsVisible ? "block" : "hidden"
            }`}
          >
            <li className="w-44 cursor-pointer hover:bg-gray-100 py-1 px-2">Deep Drop Dowm 1</li>
            <li className="w-44 cursor-pointer hover:bg-gray-100 py-1 px-2">Deep Drop Dowm 2</li>
            <li className="w-44 cursor-pointer hover:bg-gray-100 py-1 px-2">Deep Drop Dowm 3</li>
            <li className="w-44 cursor-pointer hover:bg-gray-100 py-1 px-2">Deep Drop Dowm 4</li>
            <li className="w-44 cursor-pointer hover:bg-gray-100 py-1 px-2">Deep Drop Dowm 5</li>
          </ul>
        </li>
        <li className="w-36 cursor-pointer hover:bg-gray-100 py-1 px-2">Drop Dowm 2</li>
        <li className="w-36 cursor-pointer hover:bg-gray-100 py-1 px-2">Drop Dowm 3</li>
        <li className="w-36 cursor-pointer hover:bg-gray-100 py-1 px-2">Drop Dowm 4</li>
      </ul>
    </div>
  );
}

export default Dropdown;
