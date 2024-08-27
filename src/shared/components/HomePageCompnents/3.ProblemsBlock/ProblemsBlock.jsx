import React from 'react';
import styles from './ProblemsBlock.module.css'

import Image1 from '/public/assets/SecondBlock/1.jpg'
import Image2 from '/public/assets/SecondBlock/2.jpg'
import Image3 from '/public/assets/SecondBlock/3.jpg'
import Image4 from '/public/assets/SecondBlock/4.jpg'

import UICardList from "@/shared/components/UI/UICardList/UICardList";

const ProblemsBlock = () => {
    const data = [
        {
            img: Image1,
            text: 'Long Waits',
            description: 'Customers are forced to wait for a long time for responses to their queries.'
        },
        {
            img: Image2,
            text: 'Low efficiency of solutions',
            description: 'Quality of solutions and their accuracy leave much to be desired.',
        },
        {
            img: Image3,
            text: 'Employee overload',
            description: 'Help desk employees experience significant stress due to the large volume of requests.'
        },
        {
            img: Image4,
            text: 'Outdated methods of communication',
            description: 'AI tool could use the modern chatbots with fast responses to answer visitor questions'
        }
    ]
    
    
    return (
        <div className={styles.container}>
            <h1>Problems</h1>
            <UICardList props={data}/>
        </div>
    );
};



export default ProblemsBlock;