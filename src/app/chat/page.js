'use client'
import React, { useState } from 'react';
import InputSendBlock from "@/shared/components/ChatComponents/InputSendBlock/InputSendBlock";
import styles from './page.module.css'
import ChatBlock from "@/shared/components/ChatComponents/ChatBlock/ChatBlock";
import axios from "axios";
import {MessageDto} from "@/DTOs/messageDto";


const Chat = () => {
    const [message, setMessage] = useState('')
    const [chatHistory, setChatHistory] = useState([])
    const [ selectOptionDropdown, setSelectOptionDropdown] = useState(null)

    const getMessage = (newMessage) => {
        setMessage(newMessage);
    };

    const updateChatHistory = (message) => {
        setChatHistory(prevHistory => [...prevHistory, message]);
    }

    const sendRequest = async () => {
        if (message.trim() !== "") {
            const newMessage = new MessageDto(chatHistory.length + 1, 'user', message); 
            
            updateChatHistory(newMessage);

            try {
                const response = await axios.post(process.env.NEXT_PUBLIC_API_URL, newMessage)
                
                if (response.status === 200) {
                    const botMessage = new MessageDto(chatHistory.length + 2, 
                        'bot', response.data);

                    updateChatHistory(botMessage);
                }

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
