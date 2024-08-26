import React from 'react';
import styles from './not-found.module.css'
import Link from "next/link";

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>Page not found!</h1>
            <Link href='/' className={styles.btn}>Return to Home Page</Link>
        </div>
    );
};

export default NotFound;