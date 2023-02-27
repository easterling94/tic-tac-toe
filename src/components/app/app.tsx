import React from 'react';
import { Header } from '../header/header';
import { GameWindow } from '../game-window/game-window';
import { Footer } from '../footer/footer';
import styles from './app.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <GameWindow />
      <Footer />
    </div>
  );
};
