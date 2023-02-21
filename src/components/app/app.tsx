import React from 'react';
import { ChatWindow } from '../chat-window/chat-window';
import { Footer } from '../footer/footer';
import styles from './app.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <h1>Выберете чат для общения</h1>
      <ChatWindow />
      <Footer />
    </div>
  );
};
