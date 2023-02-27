import React, { SyntheticEvent, useState } from 'react';
import styles from './game-window.module.scss';
import logo from '../../assets/search_icon_test.png';
import { NavLink, useLocation } from 'react-router-dom';
import { Outlet } from '../../../node_modules/react-router-dom/dist/index';

export const GameWindow = () => {
  const location = useLocation();
  console.log(location.pathname.substring(1));
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
          {location.pathname.substring(1) === 'computer' ? (
            <NavLink to='/computer' className={styles.gameItemChosen}>
              Компьютер
            </NavLink>
          ) : (
            <NavLink to='/computer' className={styles.gameItem}>
              Компьютер
            </NavLink>
          )}
          {numberOfGames.map((el, i) => {
            return (
              <NavLink key={i} to={`/${i}`} className={styles.gameItem}>
                {i}
              </NavLink>
            );
          })}
        </nav>
      </section>
      <Outlet />
    </main>
  );
};
