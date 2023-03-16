import styles from '../styles/ArticleSearch.module.css';
import { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';
import { TfiArrowCircleDown, TfiMenu } from 'react-icons/tfi';

const ArticleSearch = () => {
  const [topicList, setTopicList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopicList(topics);
    });
  }, []);

  // <TfiMenu className={styles.svg__searchArticle} />

  return (
    <nav className={styles.nav__searchOptions}>
      <ul className={styles.ul__searchOptions}>
        {/* {topicList.map((topic) => {
          return (
            <Link>
              <li>{topic.slug}</li>
            </Link>
          );
        })} */}
      </ul>
    </nav>
  );
};

export default ArticleSearch;
