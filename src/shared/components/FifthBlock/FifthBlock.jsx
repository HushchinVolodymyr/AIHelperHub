import React from 'react';
import styles from './FifthBlock.module.css';
import {FaMoneyBillTrendUp, FaPeopleGroup} from "react-icons/fa6";
import {CiTimer} from "react-icons/ci";
import {MdCurrencyExchange, MdEmojiPeople} from "react-icons/md";

const FifthBlock = () => {
    return (
        <div className={styles.container}>
            <h1>Benefits of automation</h1>
            <div className={styles.gridContainerPC}>
                <div className={styles.firstRow}>
                    <div className={styles.cardContainer}>
                        <FaPeopleGroup className={styles.cardIcon}/>
                        <h1 className={styles.cardText}>Reduced workload for employees</h1>
                    </div>
                    <div className={styles.cardContainer}>
                        <CiTimer className={styles.cardIcon}/>
                        <h1 className={styles.cardText}>Reduced response time</h1>
                    </div>
                    <div className={styles.cardContainer}>
                        <MdCurrencyExchange className={styles.cardIcon}/>
                        <h1 className={styles.cardText}>Increased Efficiency and Accuracy</h1>
                    </div>
                </div>
                <div className={styles.secondRow}>
                    <div className={styles.cardContainer}>
                        <MdEmojiPeople className={styles.cardIcon}/>
                        <h1 className={styles.cardText}>Increased customer satisfaction</h1>
                    </div>
                    <div className={styles.cardContainer}>
                        <FaMoneyBillTrendUp className={styles.cardIcon}/>
                        <h1 className={styles.cardText}>Saving time and resources</h1>
                    </div>
                </div>
            </div>
            <div className={styles.gridContainerM}>
                <div className={styles.cardContainer}>
                    <FaPeopleGroup className={styles.cardIcon}/>
                    <h1 className={styles.cardText}>Reduced workload for employees</h1>
                </div>
                <div className={styles.cardContainer}>
                    <CiTimer className={styles.cardIcon}/>
                    <h1 className={styles.cardText}>Reduced response time</h1>
                </div>
                <div className={styles.cardContainer}>
                    <MdCurrencyExchange className={styles.cardIcon}/>
                    <h1 className={styles.cardText}>Increased Efficiency and Accuracy</h1>
                </div>
                <div className={styles.cardContainer}>
                    <MdEmojiPeople className={styles.cardIcon}/>
                    <h1 className={styles.cardText}>Increased customer satisfaction</h1>
                </div>
                <div className={styles.cardContainer}>
                    <FaMoneyBillTrendUp className={styles.cardIcon}/>
                    <h1 className={styles.cardText}>Saving time and resources</h1>
                </div>
            </div>
        </div>
    );
};

export default FifthBlock;
