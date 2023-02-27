import React from 'react';
import styles from './game-window.module.scss';
import { useParams } from 'react-router-dom';

export const Board = () => {
  const params = useParams();
  console.log(params);
  return (
    <section className={styles.sectionRight}>
      <div className={styles.gameWrapper}>
        <div className={styles.cell} id='1'></div>
        <div className={styles.cell} id='2'></div>
        <div className={styles.cell} id='3'></div>
        <div className={styles.cell} id='4'></div>
        <div className={styles.cell} id='5'></div>
        <div className={styles.cell} id='6'></div>
        <div className={styles.cell} id='7'></div>
        <div className={styles.cell} id='8'></div>
        <div className={styles.cell} id='9'></div>
      </div>
    </section>
  );
};
