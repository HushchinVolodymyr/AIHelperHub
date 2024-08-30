import React from 'react';
import styles from "./InputSendBlock.module.css";

import { IoIosSend } from "react-icons/io";


const InputSendBlock = ({getMessage, sendRequest, message}) => {
    const handleEnterDown = (event) => {
        if (event.key === "Enter") {
            sendRequest()
        }
    }
    
    return (
        <div className={styles.container}>
            <input 
                type="text" 
                value={message}
                className={styles.textInput}
                onChange={(event) => {getMessage(event.target.value)}}
                onKeyDown={handleEnterDown}
                placeholder='Message...'
            />
            <button 
                type="submit"
                onClick={sendRequest}
                className={styles.sendBtn}
            >
                <IoIosSend />
            </button>
        </div>
    );
};

export default InputSendBlock;