import React from 'react';
import BannerImg from '@/assets/banner.jpg'
import Image from "next/image";
import styles from "./Banner.module.css";
import {MdArrowOutward} from "react-icons/md";
import Link from "next/link";

const Banner = () => {
    return (
        <div className={styles.container}>
            <Image
                src={BannerImg}
                alt="Banner"
                className={styles.imgContainerPC}
                priority
            ></Image>
            <div className={styles.overlay}/>
            
            <div className={styles.textContainer}>
                <h1 className={styles.mainText}>AIHelperHub</h1>
                <h2 className={styles.description}>Optimizing support work and improving communication with the client
                    through the introduction of AI Assistant</h2>
                <Link href='/chat' className={styles.btn}>Try<MdArrowOutward className={styles.icon}/></Link>
            </div>
        </div>
    );
};

export default Banner;