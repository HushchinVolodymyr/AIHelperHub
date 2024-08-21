'use client'
import React, {useState} from 'react';
import styles from './Header.module.css';
import Link from "next/link";

import {CiMenuBurger} from "react-icons/ci";
import {IoMdClose} from "react-icons/io";

const Header = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);

    const burgerMenuSwitch = () => {
        setBurgerMenu(!burgerMenu);
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/" className={styles.link}>About</Link>
                <Link href="/" className={styles.link}>Contact</Link>
            </div>
            {!burgerMenu ?
                <CiMenuBurger
                    className={styles.iconOpen}
                    onClick={burgerMenuSwitch}
                />
                :
                <div className={styles.burgerMenu}>
                    <IoMdClose
                        className={styles.iconClose}
                        onClick={burgerMenuSwitch}
                    />
                    <div style={{display: "flex", flexDirection: 'column', marginTop: 10, gap: 10}}>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="/" className={styles.link}>About</Link>
                        <Link href="/" className={styles.link}>Contact</Link>
                    </div>
                </div>
            }

        </header>
    );
};


export default Header;