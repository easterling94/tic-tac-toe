import styles from './footer.module.scss';
import { v4 as uuid } from 'uuid';
import { useAppDispatch } from '../../store/store-config';
import { gamesSlice } from '../../store/slicers/gamesSlicer';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Ваш ID:</p>
      <p>ID</p>
      <CreateNewGame />
    </footer>
  );
};

const CreateNewGame = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    const TABLE_ID = uuid();
    dispatch(gamesSlice.actions.createNewGame(TABLE_ID));
  };
  return (
    <div>
      <button type='submit' onClick={handleClick}>
        Создать стол
      </button>
    </div>
  );
};
