import React from 'react';
import styles from './ThirdBlock.module.css'

const ThirdBlock = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainText}>What we do</h1>
            <p className={styles.description}>We are enhancing customer satisfaction and increasing financial efficiency
                through the AI technologies application via continuously improving support accessibility while reducing
                operational costs. Our mission is to promote AI technologies that enhance service quality without adding
                extra routine tasks for people.</p>
        </div>
    );
};

export default ThirdBlock;