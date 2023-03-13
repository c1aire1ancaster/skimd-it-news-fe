import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.container__header}>
      <h1 className={styles.title__website}>Skim'd It</h1>
      <img className={styles.image__user} alt="logged in user's avatar" />
    </header>
  );
};

export default Header;
