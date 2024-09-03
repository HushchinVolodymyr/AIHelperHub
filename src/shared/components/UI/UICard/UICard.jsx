import React from 'react';
import styles from "./UICard.module.css";
import Image from "next/image";

const UICard = (item) => {
    return (
        <div className={styles.card}>
            <Image src={item.props.img} alt='card' width={300} height={300} className={styles.img}/>
            <div className={styles.overlay}/>
            <div className={styles.textContainer}>
                <h1 className={styles.mainText}>{item.props.text}</h1>
                <p>{item.props.description}</p>
            </div>
        </div>
    );
};

export default UICard;