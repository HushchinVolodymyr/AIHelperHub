import React from 'react';
import BannerImg from '@/assets/banner.jpg'
import Image from "next/image";
import styles from "./Banner.module.css";
import {MdArrowOutward} from "react-icons/md";

const Banner = () => {
    return (
        <div className={styles.container}>
            <Image
                src={BannerImg}
                alt="Banner"
                className={styles.imgContainer}
                priority='height'
                width={1000}
                height={300}
            ></Image>
            <div className={styles.overlay}/>
            
            <div className={styles.textContainer}>
                <h1 className={styles.mainText}>AIHelperHub</h1>
                <h2 className={styles.description}>Optimizing support work and improving communication with the client
                    through the introduction of AI Assistant</h2>
                <button className={styles.btn}>Try<MdArrowOutward className={styles.icon}/></button>
            </div>
        </div>
    );
};

export default Banner;