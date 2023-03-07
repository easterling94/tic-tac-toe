import { useEffect } from 'react';
import { Header } from '../header/header';
import { GameWindow } from '../game-window/game-window';
import { Footer } from '../footer/footer';
import { useParams } from '../../../node_modules/react-router-dom/dist/index';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import styles from './app.module.scss';
import { checkIfNewUser } from '../../services/local-storage';
import { useAppSelector } from '../../store/store-config';

export const App = () => {
  const games = useAppSelector((state) => state.games.games);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    checkIfNewUser();
  }, []);

  useEffect(() => {
    const test = games.some((el) => el.id === params.gameID);
    if (test) {
      return;
    }
    navigate('/error');
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <GameWindow />
      <Footer />
    </div>
  );
};
