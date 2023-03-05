import { useEffect } from 'react';
import { Header } from '../header/header';
import { GameWindow } from '../game-window/game-window';
import { Footer } from '../footer/footer';
import { useLocation } from '../../../node_modules/react-router-dom/dist/index';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import styles from './app.module.scss';
import { fakeGames } from '../../store/fake-games-store';
import { checkIfNewUser, checkIfGameIsOn } from '../../services/local-storage';
import { useAppDispatch } from '../../store/store-config';
import { gamesSlice } from '../../store/slicers/gamesSlicer';

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (checkIfGameIsOn()) {
      const game: string = localStorage.getItem('currentUserGame')!;
      dispatch(gamesSlice.actions.createNewGame(game));
    } // should be hydrated in the first DB request, not here
    checkIfNewUser();
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const currentGame = fakeGames.filter(
      (el) => el.name === location.pathname.substring(1)
    );
    if (currentGame.length === 1 || location.pathname === '/') {
    } else {
      navigate('/error');
    }
  }, []);
  return (
    <div className={styles.app}>
      <Header />
      <GameWindow />
      <Footer />
    </div>
  );
};
