'use client'
import React, {useState} from 'react';
import InputSendBlock from "@/shared/components/ChatComponents/InputSendBlock/InputSendBlock";
import styles from './page.module.css'
import ChatBlock from "@/shared/components/ChatComponents/ChatBlock/ChatBlock";


const Chat = () => {
    const [ message, setMessage ] = useState('') 
    const [ chatHistory, setChatHistory ] = useState([])
    
    const getMessage = (event) => {
        setMessage(event.target.value);
    };
    
    return (
        <div className={styles.container}>
            <ChatBlock />
            <InputSendBlock getMessage={getMessage}/>
        </div>
    );
};

export default Chat;