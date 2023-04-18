import { useEffect, useState } from 'react';
import { getArticles } from '../api/api';
import ArticleCard from './ArticleCard';
import ArticleSearch from './ArticleSearch';
import { useSearchParams } from 'react-router-dom';
import styles from '../styles/ArticleList.module.css';

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [maxPageNum, setMaxPageNum] = useState(null);
  const [articleCount, setArticleCount] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get('topic');

  useEffect(() => {
    setIsLoading(true);
    getArticles(topicQuery, pageNum).then((articles) => {
      setArticleList(articles.articles);
      setArticleCount(articles.total_count);
      setMaxPageNum(Math.ceil(articles.total_count / 10));
      setIsLoading(false);
    });
  }, [pageNum, topicQuery]);

  const goToNextPage = () => {
    setPageNum((currentPageNum) => {
      return currentPageNum + 1;
    });
  };

  const goToPreviousPage = () => {
    setPageNum((currentPageNum) => {
      return currentPageNum - 1;
    });
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <section className={styles.container__section}>
        <ArticleSearch />
        <ul className={styles.ul__articles}>
          {articleList.map((article) => {
            return <ArticleCard key={article.article_id} {...article} />;
          })}
        </ul>
      </section>
      <section className={styles.container__pagination}>
        <div className={styles.container__previous}>
          {pageNum === 1 ? (
            <></>
          ) : (
            <p className={styles.p__previous} onClick={goToPreviousPage}>
              previous
            </p>
          )}
        </div>
        <div className={styles.container__next}>
          {pageNum === maxPageNum ? (
            <></>
          ) : (
            <p className={styles.p__next} onClick={goToNextPage}>
              next
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArticleList;
