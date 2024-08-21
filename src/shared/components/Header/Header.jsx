import React from 'react';
import styles from './Header.module.css';
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.container}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/" className={styles.link}>About</Link>
            <Link href="/" className={styles.link}>Contact</Link>
        </header>
    );
};


export default Header;