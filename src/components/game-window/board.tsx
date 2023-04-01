import { useEffect, useState, SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/store-config';
import { TBoardRow } from '../../store/slicers/gamesSlicer';
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

const Cell: React.FC<{ value: TBoardRow }> = ({ value }) => {
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
      {value ? value === 'X' ? <FirstPlayer /> : <SecondPlayer /> : ''}
    </div>
  );
};

export const Board = () => {
  const params = useParams();
  const chosenGame = useAppSelector((state) => state.games.games).filter(
    (game) => game.id === params.gameID
  )[0];
  return (
    <section className={styles.sectionRight}>
      <div className={styles.gameWrapper}>
        {chosenGame.board.map((el, i) => {
          return <Cell key={i} value={el} />;
        })}
      </div>
    </section>
  );
};
