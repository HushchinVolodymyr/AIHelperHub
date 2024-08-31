'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from "./InputSendBlock.module.css";

import { IoIosSend } from "react-icons/io";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const InputSendBlock = ({ getMessage, sendRequest, message }) => {
    const [chatVersionDropdown, setChatVersionDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleEnterDown = (event) => {
        if (event.key === "Enter") {
            sendRequest();
        }
    };
    
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setChatVersionDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.dropDownContainer} ref={dropdownRef}>
                <button
                    className={styles.dropDownToggle}
                    onClick={() => setChatVersionDropdown(!chatVersionDropdown)}
                >
                    {chatVersionDropdown ? <FaChevronDown /> : <FaChevronUp />}
                </button>
                
                {chatVersionDropdown && (
                    <div className={styles.dropDownMenu}>
                        <div onClick={() => console.log("Option 1 selected")}>1</div>
                        <div onClick={() => console.log("Option 2 selected")}>2</div>
                        <div onClick={() => console.log("Option 3 selected")}>3</div>
                        <div onClick={() => console.log("Option 4 selected")}>4</div>
                    </div>
                )}
                
            </div>
            
            <input
                type="text"
                value={message}
                className={styles.textInput}
                onChange={(event) => getMessage(event.target.value)}
                onKeyDown={handleEnterDown}
                placeholder='Message...'
            />
            
            <button
                type="submit"
                onClick={sendRequest}
                className={styles.sendBtn}
            >
                <IoIosSend />
            </button>
        </div>
    );
};

export default InputSendBlock;
