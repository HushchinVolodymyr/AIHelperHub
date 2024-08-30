'use client'
import React, { useState } from 'react';
import InputSendBlock from "@/shared/components/ChatComponents/InputSendBlock/InputSendBlock";
import styles from './page.module.css'
import ChatBlock from "@/shared/components/ChatComponents/ChatBlock/ChatBlock";
import axios from "axios";


const Chat = () => {
    const [message, setMessage] = useState('')
    const [chatHistory, setChatHistory] = useState([])

    const getMessage = (newMessage) => {
        setMessage(newMessage);
    };

    const updateChatHistory = (message) => {
        setChatHistory(prevHistory => [...prevHistory, message]);
    }

    const sendRequest = async () => {
        if (message.trim() !== "") {
            const newMessage = {
                id: chatHistory.length + 1,
                messageType: "user",
                message: message
            };
            
            updateChatHistory(newMessage);

            try {
                const response = await axios.post('http://127.0.0.1:8000', {
                    message: message  
                });

                console.log(response.data);

                const botMessage = {
                    id: chatHistory.length + 1,
                    messageType: "bot",
                    message: response.data  
                };

                updateChatHistory(botMessage);

                setMessage('');

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className={styles.container}>
            <ChatBlock messages={chatHistory} />
            <InputSendBlock
                message={message}
                getMessage={getMessage}
                sendRequest={sendRequest}
            />
        </div>
    );
};

export default Chat;
