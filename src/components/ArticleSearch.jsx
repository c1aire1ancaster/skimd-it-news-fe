import styles from '../styles/ArticleSearch.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiMenu } from 'react-icons/tfi';

const ArticleSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav__searchOptions}>
      <button className={styles.iconButton} onClick={() => setIsOpen(!isOpen)}>
        <TfiMenu className={styles.svg} aria-label="article search options" />
      </button>

      {isOpen ? (
        <ul className={styles.dropdown}>
          <Link className={styles.link__topic} to="/articles">
            <li className={styles.li__topic}>all topics</li>
          </Link>
          <Link className={styles.link__topic} to="/topic/coding">
            <li className={styles.li__topic}>coding</li>
          </Link>
          <Link className={styles.link__topic} to="/topic/football">
            <li className={styles.li__topic}>football</li>
          </Link>
          <Link className={styles.link__topic} to="/topic/cooking">
            <li className={styles.li__topic}>cooking</li>
          </Link>
        </ul>
      ) : null}
    </nav>
  );
};

export default ArticleSearch;
