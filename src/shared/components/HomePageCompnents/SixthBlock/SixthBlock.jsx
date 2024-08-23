import React from 'react';
import styles from './SixthBlock.module.css'
import {MdArrowOutward} from "react-icons/md";

const SixthBlock = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainText}>Overall</h1>
            <p className={styles.description}>Help desk automation using artificial intelligence promises to
                significantly improve operational
                efficiency and customer experience, which will be a key competitive advantage for your company.</p>
            <button className={styles.btn}>Try<MdArrowOutward className={styles.icon}/></button>
        </div>
    );
};

export default SixthBlock;