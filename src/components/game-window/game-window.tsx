import React, { SyntheticEvent, useState } from 'react';
import styles from './game-window.module.scss';
import logo from '../../assets/search_icon.png';
import { NavLink } from '../../../node_modules/react-router-dom/dist/index';
import { Outlet } from '../../../node_modules/react-router-dom/dist/index';
import { useAppSelector } from '../../store/store-config';

export const GameWindow = () => {
  const games = useAppSelector((state) => state.games.games);
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
            placeholder='Введите ID игры'
            type='text'
            value={value}
            onChange={onChange}
          ></input>
        </form>
        <nav className={styles.nav}>
          <NavLink
            to='/computer'
            className={({ isActive }) =>
              isActive ? styles.gameItemChosen : styles.gameItem
            }
          >
            Компьютер
          </NavLink>
          {games.map((el) => {
            return (
              <NavLink
                key={el.id}
                to={`/${el.id}`}
                className={({ isActive }) =>
                  isActive ? styles.gameItemChosen : styles.gameItem
                }
              >
                {el.name}
              </NavLink>
            );
          })}
        </nav>
      </section>
      <Outlet />
    </main>
  );
};
