import { useEffect, useState, SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/store-config';

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

const Cell: React.FC<{ position: number }> = ({ position }) => {
  const params = useParams();
  const [state, setState] = useState(false);

  const chosenGame = useAppSelector((state) => state.games.games).filter(
    (game) => game.id === params.gameID
  )[0];

  const isPlayerFirst = chosenGame.isCurrentUserFirst;

  const handleClick = (e: SyntheticEvent) => {
    setState(true);
  };
  return (
    <div className={styles.cell} onClick={handleClick}>
      {isPlayerFirst ? (
        state ? (
          <FirstPlayer />
        ) : (
          ''
        )
      ) : !isPlayerFirst ? (
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
  const params = useParams();
  const chosenGame = useAppSelector((state) => state.games.games).filter(
    (game) => game.id === params.gameID
  )[0];
  const board = chosenGame.board;
  return (
    <section className={styles.sectionRight}>
      <div className={styles.gameWrapper}>
        {board.map((el, i) => {
          return <Cell key={i} position={i} />;
        })}
      </div>
    </section>
  );
};
