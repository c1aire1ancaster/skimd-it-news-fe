import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';
import ArticleCard from './ArticleCard';
import ArticleSearch from './ArticleSearch';
import styles from '../styles/ArticleList.module.css';

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articles) => {
      setArticleList(articles);
      setIsLoading(false);
    });
  }, []);

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

export default ArticleList;
