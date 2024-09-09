'use client'
import React, {useEffect, useRef, useState} from 'react';
import styles from './ChatBlock.module.css';
import {GoDependabot} from "react-icons/go";
import {FaAnglesDown} from "react-icons/fa6";

const ChatBlock = ({messages}) => {
    const messageRefContainer = useRef(null);
    const [showScrollButton, setShowScrollButton] = useState(false);

    const scrollToBottom = () => {
        if (messageRefContainer.current) {
            messageRefContainer.current.scrollTo({
                top: messageRefContainer.current.scrollHeight,
                behavior: "smooth",
            });
        }
    };

    const handleScroll = () => {
        if (messageRefContainer.current) {
            const {scrollTop, scrollHeight, clientHeight} = messageRefContainer.current;
            if (scrollTop + clientHeight < scrollHeight - 100) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const container = messageRefContainer.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }
        
        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [messages]);

    const formatText = (text) => {
        return text.replace(/\n/g, '<br/>');
    };
    
    return (
        <div
            className={styles.container}
            ref={messageRefContainer}
        >
            <div
                className={styles.messageContainer}
            >
                <div className={styles.upSeparator}></div>
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={message.messageType ? styles.userMessage : styles.botMessage}
                    >
                        {!message.messageType ? <GoDependabot className={styles.botMessageIcon}/> : null}

                        <p dangerouslySetInnerHTML={{__html: formatText(message.message)}}/>
                    </div>
                ))}
                <div className={styles.chatSeparator}></div>
            </div>
            {showScrollButton ? (
                <button
                    className={styles.scrollDownButton}
                    onClick={scrollToBottom}
                >
                    <FaAnglesDown />
                </button>
            ) : null}
        </div>
    );
};

export default ChatBlock;