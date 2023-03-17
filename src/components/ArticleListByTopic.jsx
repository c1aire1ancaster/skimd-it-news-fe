import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getArticlesByTopic } from '../utils/api';
import ArticleCard from './ArticleCard';
import ArticleSearch from './ArticleSearch';
import styles from '../styles/ArticleList.module.css';

const ArticleListByTopic = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticlesByTopic(topic).then((articles) => {
      setArticleList(articles);
      setIsLoading(false);
    });
  }, [topic]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className={styles.container__section}>
      <ArticleSearch />
      <ul className={styles.ul__articles}>
        {articleList.map((article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </ul>
    </section>
  );
};
export default ArticleListByTopic;