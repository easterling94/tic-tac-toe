import React, { useEffect, useState, SyntheticEvent } from 'react';

import styles from './game-window.module.scss';

// First player goes with X
// Second player goes with O

const FirstPlayer = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);
  return (
    <div className={styles.cellContent}>
      <div
        className={`${styles.line} + ${styles.firstLine} + ${
          state ? styles.firstLineWrite : undefined
        }`}
      ></div>
      <div
        className={`${styles.line} + ${styles.secondLine} + ${
          state ? styles.secondLineWrite : undefined
        }`}
      ></div>
    </div>
  );
};

const SecondPlayer = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);
  return (
    <div className={styles.cellContent}>
      <div className={styles.circle}></div>
      <div className={styles.circleLeft}></div>
      <div className={styles.circleRight}></div>
      <div className={styles.circleInner}></div>
    </div>
  );
};

const Cell = () => {
  const [state, setState] = useState(false);
  const [player, setPlayer] = useState(1);
  const handleClick = (e: SyntheticEvent) => {
    setState(true);
  };
  return (
    <div className={styles.cell} id='2' onClick={handleClick}>
      {player === 1 ? (
        state ? (
          <FirstPlayer />
        ) : (
          ''
        )
      ) : player == 2 ? (
        state ? (
          <SecondPlayer />
        ) : (
          ''
        )
      ) : (
        ''
      )}
    </div>
  );
};

export const Board = () => {
  const array = new Array(9).fill(0);
  return (
    <section className={styles.sectionRight}>
      <div className={styles.gameWrapper}>
        {array.map((el, i) => {
          return <Cell key={i} />;
        })}
      </div>
    </section>
  );
};
