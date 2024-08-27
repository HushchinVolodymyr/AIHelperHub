import React from 'react';
import styles from "./InputSendBlock.module.css";

import { IoIosSend } from "react-icons/io";


const InputSendBlock = () => {
    return (
        <div className={styles.container}>
            <input type="text" className={styles.textInput}/>
            <button className={styles.sendBtn}><IoIosSend />
            </button>
        </div>
    );
};

export default InputSendBlock;