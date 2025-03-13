"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <aside className="bg-gray-200 p-4 w-55 h-170">
      <div className="mb-10">
        <h2 className="font-bold text-[2em]">Menu</h2>
      </div>
      <ul className="list-none p-0">
        {["Dashboard", "Obat", "Penjualan", "Pemilik", "Pelanggan"].map((item, index) => (
          <li key={index}>
            <div
              className="mb-6 font-bold text-[1.2em] flex justify-between items-center cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <span className="text-gray-800 hover:underline flex-1">{item}</span>
              <FaArrowRight
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-90" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              {activeIndex === index && (
                <ul className="list-none pl-4">
                  {["List1", "List2", "List3", "List4", "List5"].map((subItem, subIndex) => (
                    <li key={subIndex} className="mb-2 text-[1em] text-gray-700">
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
