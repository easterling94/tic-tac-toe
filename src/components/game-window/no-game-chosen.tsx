import React from 'react';
import styles from './game-window.module.scss';

export const NoGameChosen = () => {
  return (
    <section className={styles.sectionRight}>
      <div>Выберете игру из доступных в списке или создайте новую</div>
    </section>
  );
};
