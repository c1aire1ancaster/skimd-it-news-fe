import styles from '../styles/ArticleSearchByTopic.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../api/api';

const ArticleSearchByTopic = () => {
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopicList(topics);
    });
  }, []);

  return (
    <nav className={styles.nav__searchOptions}>
      <ul className={styles.ul__topics}>
        <Link className={styles.link__topic} to="/articles">
          <li className={styles.li__topic}>all</li>
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
    </nav>
  );
};

export default ArticleSearchByTopic;
