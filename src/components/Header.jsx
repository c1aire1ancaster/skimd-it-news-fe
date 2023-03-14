import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const linkPath = `/articles`;
  return (
    <header className={styles.container__header}>
      <Link className={styles.link__websiteTitle} to={linkPath}>
        <h1 className={styles.title__website}>Skim'd It</h1>
      </Link>
      <img className={styles.image__user} alt="logged in user's avatar" />
    </header>
  );
};

export default Header;
