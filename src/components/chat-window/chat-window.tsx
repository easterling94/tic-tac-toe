import React from 'react';
import styles from './chat-window.module.scss';
import logo from '../../assets/search_icon_test.png';

export const ChatWindow = () => {
  return (
    <main className={styles}>
      <section className={styles.sectionLeft}>
        <form className={styles.searchForm}>
          <button className={styles.searchBtn} type='submit'>
            <img src={logo} width='20px' height='20px' alt='Search icon'></img>
          </button>
          <input
            className={styles.searchField}
            placeholder='Ввидите ID собеседника'
            type='text'
          ></input>
        </form>
        <nav>
          <div>Флудилка</div>
          <div>1</div>
          <div>1</div>
        </nav>
      </section>
      <section className={styles.sectionRight}>CHAT</section>
    </main>
  );
};
