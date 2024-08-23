import React from 'react';
import styles from './FirstBlock.module.css'

const FirstBlock = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainText}>Business case</h1>
            <p className={styles.description}>With the development of technology and time, customers who contact support services want quick
                communication and communication to solve their problems. Help desks play a key role in providing
                customer support and solving user problems. However, as the number of customers and the volume of
                requests increases, many service desks are faced with serious problems such as longer wait times,
                decreased quality of service, and overloaded employees. In such a situation, it is necessary to apply
                innovative approaches to optimize the work of the help desk.</p>
        </div>
    );
};

export default FirstBlock;