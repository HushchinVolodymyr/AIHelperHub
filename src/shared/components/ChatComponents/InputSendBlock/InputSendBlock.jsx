import React from 'react';
import styles from "./InputSendBlock.module.css";

import { IoIosSend } from "react-icons/io";


const InputSendBlock = ({getMessage}) => {
    return (
        <div className={styles.container}>
            <input 
                type="text" 
                className={styles.textInput}
                onChange={getMessage}
                placeholder='Message...'
            />
            <button 
                className={styles.sendBtn}
            >
                <IoIosSend />
            </button>
        </div>
    );
};

export default InputSendBlock;