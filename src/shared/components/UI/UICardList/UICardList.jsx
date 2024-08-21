'use client'
import React, {useEffect, useRef} from 'react';
import styles from "./UICardList.module.css";
import UICard from "@/shared/components/UI/UICard/UICard";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const UiCardList = (data) => {
    const cardsContainerRef = useRef(null);

    useEffect(() => {
        const handleWheel = (event) => {
            if (cardsContainerRef.current) {
                const container = cardsContainerRef.current;
                const delta = event.deltaY;

                const atStart = container.scrollLeft === 0;
                const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;

                if (!atStart && !atEnd) {
                    event.preventDefault();
                    container.scrollLeft += delta * 2;
                } else if ((atStart && delta < 0) || (atEnd && delta > 0)) {
                    //scrollTimeout = setTimeout(() => {}, 1000)
                } else {

                    event.preventDefault();
                    container.scrollLeft += delta * 2;
                }
            }
        };

        const container = cardsContainerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, {passive: false});

            return () => {
                container.removeEventListener('wheel', handleWheel);
            };
        }
    }, []);
    
    const scrollLeft = () => {
        if (cardsContainerRef.current) {
            cardsContainerRef.current.scrollLeft -= 330;
        }
    }
    
    const scrollRight = () => {
        if (cardsContainerRef.current) {
            cardsContainerRef.current.scrollLeft += 330;
        }
    }
    

    return (
        <div className={styles.container}>
            <div 
                className={styles.leftArrow}
                onClick={scrollLeft}
            ><IoIosArrowBack/></div>
            <div
                className={styles.cardsContainer}
                ref={cardsContainerRef}
            >
                {data.props.map((item, index) => (
                    <UICard props={item} key={index}/>
                ))}
            </div>
            <div 
                className={styles.rightArrow}
                onClick={scrollRight}
            ><IoIosArrowForward/></div>
        </div>

    );
};

export default UiCardList;