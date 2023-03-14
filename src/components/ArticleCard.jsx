import styles from '../styles/ArticleCard.module.css';
import formatDate from '../utils/ArticleCard.utils';
import {
  TfiComment,
  TfiAngleDown,
  TfiAngleUp,
  TfiTrash,
} from 'react-icons/tfi';
import { upVoteArticle, downVoteArticle } from '../utils/api';
import { useState } from 'react';

const ArticleCard = (singleArticle) => {
  const [article, setArticle] = useState(singleArticle);
  const [isError, setIsError] = useState(false);
  const formattedDate = formatDate(article.created_at);

  const upVote = () => {
    setArticle((article) => {
      return { ...article, votes: article.votes + 1 };
    });
    upVoteArticle(article.article_id).catch(() => {
      setArticle((currentArticle) => {
        setIsError(true);
        return { ...currentArticle, votes: article.votes - 1 };
      });
      return article;
    });
    return article;
  };

  const downVote = () => {
    setArticle((article) => {
      return { ...article, votes: article.votes - 1 };
    });
    downVoteArticle(article.article_id).catch(() => {
      setArticle((currentArticle) => {
        setIsError(true);
        return { ...currentArticle, votes: article.votes + 1 };
      });
      return article;
    });
    return article;
  };

  return (
    <li className={styles.card__articleContainer}>
      <h2 className={styles.h2__articleTitle}>{article.title}</h2>
      <h3 className={styles.h3__articleAuthor}>{article.author}</h3>
      <h4 className={styles.h4__articleDate}>{formattedDate}</h4>
      <div className={styles.div__articleImgWrapper}>
        <img
          className={styles.img__articleImg}
          src={article.article_img_url}
          alt="linked to article"
        />
      </div>
      <section className={styles.div__articleInfo}>
        <div className={styles.container__articleVotes}>
          <button className={styles.btn__downVote} aria-label='down vote article' onClick={() => downVote()}>
            <TfiAngleDown className={styles.svg__downVote} />
          </button>
          <span className={styles.counter__numberVote}>{article.votes}</span>
          <button className={styles.btn__upVote} aria-label='up vote article' onClick={() => upVote()}>
            <TfiAngleUp className={styles.svg__upVote} />
          </button>
        </div>

        <div className={styles.link__commentCount}>
          <TfiComment className={styles.svg__commentCount} />
          <p className={styles.p__commentCount}>{article.comment_count}</p>
        </div>

        <div className={styles.div__errorMessage}>
          <p className={styles.p__errorMessage}>Problemo with vote</p>
        </div>
      </section>
    </li>
  );
};

export default ArticleCard;
