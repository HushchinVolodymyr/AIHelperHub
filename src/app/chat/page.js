import React, {Suspense} from 'react';
import InputSendBlock from "@/shared/components/ChatComponents/InputSendBlock/InputSendBlock";
import styles from './page.module.css'


const Chat = () => {
    return (
        <div className={styles.container}>
            <InputSendBlock/>
        </div>
    );
};

export default Chat;