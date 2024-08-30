import React from 'react';
import styles from './ChatBlock.module.css'
import { LuBot } from "react-icons/lu";

const ChatBlock = ({ messages }) => {
    return (
        <div className={styles.container}>
            {messages.map((message, index) => (
                <div 
                    className={message.messageType === "user" ? styles.userMessage : styles.botMessage}
                    key={index}
                >
                    {message.messageType === "bot" ? <LuBot className={styles.botIcon}/> : null}
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    );
};

export default ChatBlock;