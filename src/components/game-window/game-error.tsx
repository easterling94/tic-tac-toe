import styles from './game-window.module.scss';

export const ErrorPage = () => {
  return (
    <section className={styles.sectionRight}>
      <div>Похоже, что этой игры не существует</div>
    </section>
  );
};
