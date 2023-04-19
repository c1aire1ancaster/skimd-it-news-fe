import { useEffect, useState } from 'react';
import { getArticles } from '../api/api';
import ArticleCard from './ArticleCard';
import ArticleSearchByTopic from './ArticleSearchByTopic';
import { useSearchParams } from 'react-router-dom';
import { TfiAngleRight, TfiAngleLeft } from 'react-icons/tfi';
import styles from '../styles/ArticleList.module.css';

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [maxPageNum, setMaxPageNum] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get('topic');
  const sortByQuery = searchParams.get('sort_by') || undefined;
  const orderByQuery = searchParams.get('order') || undefined;

  useEffect(() => {
    setIsLoading(true);
    getArticles(topicQuery, sortByQuery, orderByQuery, pageNum).then(
      (articles) => {
        setArticleList(articles.articles);
        setMaxPageNum(Math.ceil(articles.total_count / 10));
        setIsLoading(false);
      }
    );
  }, [topicQuery, sortByQuery, orderByQuery, pageNum]);

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
        <ArticleSearchByTopic />
        <section className={styles.container__sortAndOrder}>
          <label className={styles.label__sortBy}>
            Sort by:{' '}
            <select
              className={styles.select__sortBy}
              value={sortByQuery}
              onChange={(event) => {
                const newSearchParams = new URLSearchParams(searchParams);
                newSearchParams.set('sort_by', event.target.value);
                setSearchParams(newSearchParams);
              }}
            >
              <option className={styles.option__sortAndOrder} value="">
                Date
              </option>
              <option
                className={styles.option__sortAndOrder}
                value="comment_count"
              >
                Comment count
              </option>
              <option className={styles.option__sortAndOrder} value="votes">
                Votes
              </option>
            </select>
          </label>
          <label className={styles.label__orderBy}>
            Order:{' '}
            <select
              className={styles.select__orderBy}
              value={orderByQuery}
              onChange={(event) => {
                const newSearchParams = new URLSearchParams(searchParams);
                newSearchParams.set('order', event.target.value);
                setSearchParams(newSearchParams);
              }}
            >
              <option className={styles.option__sortAndOrder} value="DESC">
                Descending
              </option>
              <option className={styles.option__sortAndOrder} value="ASC">
                Ascending
              </option>
            </select>
          </label>
        </section>
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
            <button
              className={styles.button__previous}
              aria-label="go to previous page of articles"
              onClick={goToPreviousPage}
            >
              <TfiAngleLeft className={styles.svg__previousArticles} />
            </button>
          )}
        </div>
        <div className={styles.container__next}>
          {pageNum === maxPageNum ? (
            <></>
          ) : (
            <button
              className={styles.button__next}
              aria-label="go to next page of articles"
              onClick={goToNextPage}
            >
              <TfiAngleRight className={styles.svg__nextArticles} />
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArticleList;
