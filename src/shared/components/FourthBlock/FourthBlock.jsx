﻿import React from 'react';
import styles from "@/shared/components/SecondBlock/SecondBlock.module.css";
import UICardList from "@/shared/components/UI/UICardList/UICardList";

const FourthBlock = () => {
    const data = [
        {
        img: '',
        text: 'Automatic resolution of recurring requests',
        description: 'The system will be able to independently recognize and resolve recurring customer requests, freeing help desk employees from monotonous work.'
        },
        {
            img: '',
            text: 'Proposing solutions based on historical data analysis',
            description: 'The system will analyze the request history and propose the most likely solutions based on accumulated experience'
        },
        {
            img: '',
            text: 'Personalized customer experience',
            description: 'Using data from previous customer interactions, the system will be able to offer personalized solutions and recommendations.',
        },
        {
            img: '',
            text: 'Automatic knowledge base update',
            description: 'The system will automatically update the help desk knowledge base based on new data and feedback from customers.'
        },
        {
            img: '',
            text: 'Multichannel',
            description: 'Your assistant can be connected to various communication channels such as your website, WhatsApp, Instagram and Telegram.'
        },
        {
            img: '',
            text: 'AI',
            description: 'The introduction of an artificial intelligence system will allow us to significantly increase the efficiency of the help desk, reduce response time to customer requests and improve the quality of services provided.'
        }
    ]

    return (<div className={styles.container} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Key functions that the AI system will perform include</h1>
            {/*<UICardList props={data}/>*/}
        </div>);
};

export default FourthBlock;