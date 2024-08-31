'use client'
import React, {useEffect, useRef, useState} from 'react';
import styles from './Header.module.css';
import Link from "next/link";

import {CiMenuBurger} from "react-icons/ci";
import {IoMdClose} from "react-icons/io";

import UIThemeToggle from "@/shared/components/UI/UIThemeToggle/UIThemeToggle";

const Header = () => {
    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef(null)
    

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdown(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.headerContainerPC}>
                <div></div>
                <nav className={styles.navContainer}>
                    <Link className={styles.link} href='/'>Home</Link>
                    <Link className={styles.link} href='/'>About</Link>
                    <Link className={styles.link} href='/'>Contact</Link>
                </nav>
                <div>
                    <UIThemeToggle/>
                </div>
            </div>
            <div className={styles.headerContainerM} ref={dropdownRef}>
                <div className={styles.startHeader}>
                    <UIThemeToggle/>
                    <button
                        className={styles.dropdownToggle}
                        onClick={() => setDropdown(!dropdown)}
                    >
                        {!dropdown ? <CiMenuBurger/> : <IoMdClose/>}
                    </button>
                    {dropdown && (
                        <div className={styles.dropdownMenu}>
                            <Link className={styles.link} href='/'>Home</Link>
                            <Link className={styles.link} href='/'>About</Link>
                            <Link className={styles.link} href='/'>Contact</Link>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};


export default Header;