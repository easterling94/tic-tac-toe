import styles from './footer.module.scss';
import { v4 as uuid } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../store/store-config';
import { createNewGameAction } from '../../store/slicers/ActionCreators';

export const Footer = () => {
  const gamesState = useAppSelector((state) => state.games);
  return (
    <footer className={styles.footer}>
      {gamesState.currentUserGame ? (
        <>
          <p>Ваш ID: {` ${gamesState.currentUserGame}`}</p>
        </>
      ) : (
        <CreateNewGame />
      )}
    </footer>
  );
};

const CreateNewGame = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    const TABLE_ID = uuid();
    dispatch(createNewGameAction(TABLE_ID));
  };
  return (
    <div>
      <button type='submit' onClick={handleClick} className={styles.btnCreate}>
        Создать новую игру
      </button>
    </div>
  );
};
