import React, { useState, useEffect } from "react";
import { DropdownStyle } from "./styled";

const DropdownComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const toggleDropdown = () => {
            const dropdownContent = document.getElementById("dropdown-content");
            dropdownContent.style.display = isOpen ? "block" : "none";
        };

        toggleDropdown();
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleClickOutside = (e) => {
        if (isOpen) {
            const dropdownContent = document.getElementById("dropdown-content");
            if (!dropdownContent.contains(e.target)) {
                setIsOpen(false);
            }
        }
    };

    return (
        <DropdownStyle
            onClick={() => {
                setIsOpen(!isOpen);
            }}
        >
            <span className="placeholder">{props.placeholder}</span>
            <ul id="dropdown-content">{props.children}</ul>
        </DropdownStyle>
    );
};

export default DropdownComponent;
