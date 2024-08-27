'use client'
import React, {useState} from 'react';
import styles from './Header.module.css';
import Link from "next/link";

import {CiMenuBurger} from "react-icons/ci";
import {IoMdClose} from "react-icons/io";
import UIThemeToggle from "@/shared/components/UI/UIThemeToggle/UIThemeToggle";

const Header = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);

    const burgerMenuSwitch = () => {
        setBurgerMenu(!burgerMenu);
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div/>
                <nav className={styles.navContainer}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/" className={styles.link}>About</Link>
                    <Link href="tel:+380930860580" className={styles.link}>Contact</Link>
                </nav>
                <UIThemeToggle/>
            </div>
            {!burgerMenu ?
                <div className={styles.burgerMenuSwitch}>
                    <UIThemeToggle/>
                    <CiMenuBurger
                        className={styles.iconOpen}
                        onClick={burgerMenuSwitch}
                    />
                </div>
                :
                <div className={styles.burgerMenu}>
                    <IoMdClose
                        className={styles.iconClose}
                        onClick={burgerMenuSwitch}
                    />
                    <div className={styles.burgerMenuLinks}>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="/" className={styles.link}>About</Link>
                        <Link href="tel:+380930860580" className={styles.link}>Contact</Link>
                    </div>
                </div>
            }

        </header>
    );
};


export default Header;