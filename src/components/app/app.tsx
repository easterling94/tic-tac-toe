import React, { useEffect } from 'react';
import { Header } from '../header/header';
import { GameWindow } from '../game-window/game-window';
import { Footer } from '../footer/footer';
import { useLocation } from 'react-router-dom';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import styles from './app.module.scss';
import { fakeGames } from '../../store/fake-games-store';

export const App = () => {
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
