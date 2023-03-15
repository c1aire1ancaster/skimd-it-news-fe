import { useParams } from 'react-router-dom';
import styles from '../styles/IndividualArticle.module.css';
import { useEffect, useState } from 'react';
import { getArticleById, getUser } from '../utils/api';
import formatDate from '../utils/ArticleCard.utils';
import { upVoteArticle, downVoteArticle } from '../utils/api';
import {
  TfiTag,
  TfiComment,
  TfiAngleDown,
  TfiAngleUp,
  TfiTrash,
} from 'react-icons/tfi';

const IndividualArticle = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [article, setArticle] = useState({});
  const [userAvatarImg, setUserAvatarImg] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((article) => {
      const { author } = article;
      setArticle(article);
      setIsLoading(false);
      getUser(author).then((userAvatarUrl) => {
        setUserAvatarImg(userAvatarUrl);
      });
    });
  }, [article_id]);

  const upVote = () => {
    setArticle((currentArticle) => {
      return { ...currentArticle, votes: article.votes + 1 };
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
    setArticle((currentArticle) => {
      return { ...currentArticle, votes: article.votes - 1 };
    });
    downVoteArticle(article.article_id).catch(() => {
      setIsError(true);
      setArticle((currentArticle) => {
        return { ...currentArticle, votes: article.votes + 1 };
      });
      return article;
    });
    return article;
  };

  return isLoading ? (
    <h2>Loading</h2>
  ) : (
    <section className={styles.container}>
      <section className={styles.section__articleContainer}>
        <h2 className={styles.h2__articleTitle}>{article.title}</h2>
        <h3 className={styles.h3__articleAuthor}>{article.author}</h3>
        <h4 className={styles.h4__articleDate}>
          {formatDate(article.created_at)}
        </h4>
        <div className={styles.div__articleImgWrapper}>
          <img
            className={styles.img__articleImg}
            src={article.article_img_url}
            alt={article.title}
          />
        </div>
        <section className={styles.div__articleInfo}>
          {isError ? (
            <div className={styles.div__errorMessage}>
              {isError ? (
                <p className={styles.p__errorMessage}>Vote problemo!</p>
              ) : null}
            </div>
          ) : (
            <div className={styles.container__articleVotes}>
              <button
                className={styles.btn__downVote}
                aria-label="down vote article"
                onClick={() => downVote()}
              >
                <TfiAngleDown className={styles.svg__downVote} />
              </button>
              <span className={styles.counter__numberVote}>
                {article.votes}
              </span>
              <button
                className={styles.btn__upVote}
                aria-label="up vote article"
                onClick={() => upVote()}
              >
                <TfiAngleUp className={styles.svg__upVote} />
              </button>
            </div>
          )}

          <div className={styles.link__commentCount}>
            <TfiComment className={styles.svg__commentCount} />
            <p className={styles.p__commentCount}>{article.comment_count}</p>
          </div>

          <div className={styles.link__topic}>
            <TfiTag className={styles.svg__topicTag} />
            <h4 className={styles.h4__articleTopic}>{article.topic}</h4>
          </div>

          <div className={styles.form__articleDelete}>
            <p className={styles.btn__articleDelete}>
              <TfiTrash className={styles.svg__articleDelete} />
            </p>
          </div>
        </section>
        <p className={styles.p__articleBody}>{article.body}</p>
        <div className={styles.div__author}>
          <img
            className={styles.image__user}
            src={userAvatarImg}
            alt="logged in user's avatar"
          />
          <h3 className={styles.h3__articleAuthor}>{article.author}</h3>
        </div>
        <section className={styles.div__articleInfo}>
          {isError ? (
            <div className={styles.div__errorMessage}>
              {isError ? (
                <p className={styles.p__errorMessage}>Vote problemo!</p>
              ) : null}
            </div>
          ) : (
            <div className={styles.container__articleVotes}>
              <button
                className={styles.btn__downVote}
                aria-label="down vote article"
                onClick={() => downVote()}
              >
                <TfiAngleDown className={styles.svg__downVote} />
              </button>
              <span className={styles.counter__numberVote}>
                {article.votes}
              </span>
              <button
                className={styles.btn__upVote}
                aria-label="up vote article"
                onClick={() => upVote()}
              >
                <TfiAngleUp className={styles.svg__upVote} />
              </button>
            </div>
          )}

          <div className={styles.link__commentCount}>
            <TfiComment className={styles.svg__commentCount} />
            <p className={styles.p__commentCount}>{article.comment_count}</p>
          </div>

          <div className={styles.link__topic}>
            <TfiTag className={styles.svg__topicTag} />
            <h4 className={styles.h4__articleTopic}>{article.topic}</h4>
          </div>

          <div className={styles.form__articleDelete}>
            <p className={styles.btn__articleDelete}>
              <TfiTrash className={styles.svg__articleDelete} />
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default IndividualArticle;
