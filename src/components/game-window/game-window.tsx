import React, { SyntheticEvent, useState } from 'react';
import styles from './game-window.module.scss';
import logo from '../../assets/search_icon_test.png';

export const GameWindow = () => {
  const numberOfGames = new Array(10).fill(0);
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(`Sends value ${value} to DB`);
    setValue('');
  };
  return (
    <main className={styles}>
      <section className={styles.sectionLeft}>
        <form className={styles.searchForm} onSubmit={onSubmit}>
          <button className={styles.searchBtn} type='submit'>
            <img src={logo} width='20px' height='20px' alt='Search icon'></img>
          </button>
          <input
            className={styles.searchField}
            placeholder='Ввидите ID игры'
            type='text'
            value={value}
            onChange={onChange}
          ></input>
        </form>
        <nav className={styles.nav}>
          <div className={styles.gameItem}>Компьютер</div>
          {numberOfGames.map((el, i) => {
            console.log(i);
            return (
              <div key={i} className={styles.gameItem}>
                {i}
              </div>
            );
          })}
        </nav>
      </section>
      <section className={styles.sectionRight}>
        <div className={styles.gameWrapper}>
          <div className={styles.cell} id='1'></div>
          <div className={styles.cell} id='2'></div>
          <div className={styles.cell} id='3'></div>
          <div className={styles.cell} id='4'></div>
          <div className={styles.cell} id='5'></div>
          <div className={styles.cell} id='6'></div>
          <div className={styles.cell} id='7'></div>
          <div className={styles.cell} id='8'></div>
          <div className={styles.cell} id='9'></div>
        </div>
      </section>
    </main>
  );
};
