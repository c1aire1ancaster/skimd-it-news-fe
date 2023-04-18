import styles from '../styles/ArticleSearch.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TfiMenu } from 'react-icons/tfi';
import { getTopics } from '../api/api';

const ArticleSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopicList(topics);
    });
  }, []);

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
          {topicList.map((topic) => {
            return (
              <Link
                to={`/articles?topic=${topic.slug}`}
                className={styles.link__topic}
                key={topic.slug}
              >
                <li className={styles.li__topic}>{topic.slug}</li>
              </Link>
            );
          })}
        </ul>
      ) : null}
    </nav>
  );
};

export default ArticleSearch;
