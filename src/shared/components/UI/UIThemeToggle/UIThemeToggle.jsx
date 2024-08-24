'use client'
import React, {useEffect, useState} from 'react';
import styles from './UIThemeToggle.module.css'
import {IoSunny} from "react-icons/io5";
import {MdNightlightRound} from "react-icons/md";

const UiThemeToggle = () => {
    const [theme, setTheme] = useState('dark');
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light');
        setTheme(storedTheme);
        document.documentElement.setAttribute('data-theme', storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div onClick={toggleTheme} className={styles.container}>
            {theme === 'dark' ? <MdNightlightRound className={styles.darkIcon}/> :
                <IoSunny className={styles.lightIcon}/>}
        </div>
    );
};

export default UiThemeToggle;