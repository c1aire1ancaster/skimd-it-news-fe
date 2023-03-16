import styles from '../styles/ArticleCard.module.css';
import formatDate from '../utils/ArticleCard.utils';
import { Link } from 'react-router-dom';
import {
  TfiComment,
  TfiAngleDown,
  TfiAngleUp,
  TfiTag,
  TfiThumbUp,
} from 'react-icons/tfi';
import { upVoteArticle, downVoteArticle } from '../utils/api';
import { useState } from 'react';

const ArticleCard = (singleArticle) => {
  const [article, setArticle] = useState(singleArticle);
  const [isError, setIsError] = useState(false);
  const [userVote, setUserVote] = useState(0);
  const formattedDate = formatDate(article.created_at);

  const downVote = () => {
    setArticle((currentArticle) => {
      return { ...currentArticle, votes: article.votes - 1 };
    });
    setUserVote(1);
    setIsError(false);
    downVoteArticle(article.article_id).catch(() => {
      setUserVote(0);
      setIsError(true);
      setArticle((currentArticle) => {
        return { ...currentArticle, votes: article.votes };
      });
    });
  };

  const upVote = () => {
    setArticle((currentArticle) => {
      return { ...currentArticle, votes: article.votes + 1 };
    });
    setUserVote(1);
    setIsError(false);
    upVoteArticle(article.article_id).catch(() => {
      setUserVote(0);
      setIsError(true);
      setArticle((currentArticle) => {
        return { ...currentArticle, votes: article.votes };
      });
    });
  };

  const linkPathToArticle = `/article/${article.article_id}`;
  const linkPathToArticlesByTopic = `/articles/topic/${article.topic}`;

  return (
    <li className={styles.card__articleContainer}>
      <Link className={styles.link__articleTitle} to={linkPathToArticle}>
        <h2 className={styles.h2__articleTitle}>{article.title}</h2>
        <h3 className={styles.h3__articleAuthor}>{article.author}</h3>
        <h4 className={styles.h4__articleDate}>{formattedDate}</h4>
      </Link>
      <div className={styles.div__articleImgWrapper}>
        <img
          className={styles.img__articleImg}
          src={article.article_img_url}
          alt={`related to ${article.title}`}
        />

        {isError ? (
          <p className={styles.p__errorMessage}>Vote problemo!</p>
        ) : null}

        {userVote ? (
          <div className={styles.div__voteSuccess}>
            <p className={styles.p__voteSuccess} aria-label="vote successful">
              <TfiThumbUp /> for vote!
            </p>
          </div>
        ) : null}
      </div>
      <section className={styles.section__articleInfo}>
        <div className={styles.container__articleVotes}>
          <button
            className={styles.btn__downVote}
            aria-label="down vote article"
            onClick={() => downVote()}
            disabled={userVote !== 0}
          >
            <TfiAngleDown className={styles.svg__downVote} />
          </button>
          <span className={styles.counter__numberVote}>{article.votes}</span>
          <button
            className={styles.btn__upVote}
            aria-label="up vote article"
            onClick={() => upVote()}
            disabled={userVote !== 0}
          >
            <TfiAngleUp className={styles.svg__upVote} />
          </button>
        </div>

        <div className={styles.link__commentCount}>
          <TfiComment className={styles.svg__commentCount} />
          <p className={styles.p__commentCount}>{article.comment_count}</p>
        </div>

        <Link
          className={styles.link__articleTopicTag}
          to={linkPathToArticlesByTopic}
        >
          <div
            className={styles.link__topic}
            aria-label={`link to list of ${article.topic} articles`}
          >
            <TfiTag className={styles.svg__topicTag} />
            <h4 className={styles.h4__articleTopic}>{article.topic}</h4>
          </div>
        </Link>
      </section>
    </li>
  );
};

export default ArticleCard;
