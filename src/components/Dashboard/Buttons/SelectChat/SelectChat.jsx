import React, { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SelectChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Chat1");
    const dropdownRef = useRef(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex gap-x-2.5 items-center max-smallmobile:justify-between border border-[#CFD3D8] outline-none py-2 px-3 rounded-2xl text-sm text-[#220B35] hover:bg-[#3BC1C5] hover:text-white"
            >
                <span>{selectedOption}</span>
                <MdOutlineKeyboardArrowDown
                    className={`transition-transform text-lg ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-20">
                    <ul className="py-2 text-gray-700">
                        {["Chat1", "Chat2", "Chat3", "Chat4"].map((option) => (
                            <li
                                key={option}
                                className="px-4 py-2 flex items-center gap-2 hover:bg-[#3BC1C5] hover:text-white cursor-pointer"
                                onClick={() => handleSelect(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SelectChat;
