import { useEffect, useState } from 'react';
import { getArticles, getUser } from '../utils/api';
import styles from '../styles/ViewIndividualArticle.module.css';
import formatDate from '../utils/ArticleCard.utils';
import {
  TfiTag,
  TfiComment,
  TfiAngleDown,
  TfiAngleUp,
  TfiTrash,
} from 'react-icons/tfi';

const ViewIndividualArticle = ({ article_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [individualArticle, setIndividualArticle] = useState({});
  const [date, setDate] = useState('');
  const [userAvatarImg, setUserAvatarImg] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getArticles(article_id).then((article) => {
      const { created_at, author } = article;
      setIndividualArticle(article);
      setIsLoading(false);
      setDate(formatDate(created_at));
      getUser(author).then((userAvatarUrl) => {
        setUserAvatarImg(userAvatarUrl);
      });
    });
  }, [article_id]);

  const { title, author, body, comment_count, article_img_url, topic, votes } =
    individualArticle;

  return isLoading ? (
    <h2>Loading</h2>
  ) : (
    <section className={styles.section__articleContainer}>
      <h2 className={styles.h2__articleTitle}>{title}</h2>
      <h3 className={styles.h3__articleAuthor}>{author}</h3>
      <h4 className={styles.h4__articleDate}>{date}</h4>
      <div className={styles.div__articleImgWrapper}>
        <img
          className={styles.img__articleImg}
          src={article_img_url}
          alt="linked to article"
        />
      </div>
      <section className={styles.div__articleInfo}>
        <div className={styles.container__articleVotes}>
          <p className={styles.btn__downVote}>
            <TfiAngleDown className={styles.svg__downVote} />
          </p>
          <span className={styles.counter__numberVote}>{votes}</span>
          <p className={styles.btn__upVote}>
            <TfiAngleUp className={styles.svg__upVote} />
          </p>
        </div>

        <div className={styles.link__commentCount}>
          <TfiComment className={styles.svg__commentCount} />
          <p className={styles.p__commentCount}>{comment_count}</p>
        </div>

        <div className={styles.link__topic}>
          <TfiTag className={styles.svg__topicTag} />
          <h4 className={styles.h4__articleTopic}>{topic}</h4>
        </div>

        <div className={styles.form__articleDelete}>
          <p className={styles.btn__articleDelete}>
            <TfiTrash className={styles.svg__articleDelete} />
          </p>
        </div>
      </section>
      <p className={styles.p__articleBody}>{body}</p>
      <div className={styles.div__author}>
        <img
          className={styles.image__user}
          src={userAvatarImg}
          alt="logged in user's avatar"
        />
        <h3 className={styles.h3__articleAuthor}>{author}</h3>
      </div>
      <section className={styles.div__articleInfo}>
        <div className={styles.container__articleVotes}>
          <p className={styles.btn__downVote}>
            <TfiAngleDown className={styles.svg__downVote} />
          </p>
          <span className={styles.counter__numberVote}>{votes}</span>
          <p className={styles.btn__upVote}>
            <TfiAngleUp className={styles.svg__upVote} />
          </p>
        </div>

        <div className={styles.link__commentCount}>
          <TfiComment className={styles.svg__commentCount} />
          <p className={styles.p__commentCount}>{comment_count}</p>
        </div>

        <div className={styles.link__topic}>
          <TfiTag className={styles.svg__topicTag} />
          <h4 className={styles.h4__articleTopic}>{topic}</h4>
        </div>

        <div className={styles.form__articleDelete}>
          <p className={styles.btn__articleDelete}>
            <TfiTrash className={styles.svg__articleDelete} />
          </p>
        </div>
      </section>
    </section>
  );
};

export default ViewIndividualArticle;
