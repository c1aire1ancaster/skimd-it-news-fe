import styles from '../styles/ArticleCard.module.css';
import {
  TfiComment,
  TfiAngleDown,
  TfiAngleUp,
  TfiTrash,
} from 'react-icons/tfi';

const ArticleCard = ({ title, author, created_at, votes, article_img_url }) => {
  return (
    <li className={styles.card__articleContainer}>
      <h2 className={styles.h2__articleTitle}>{title}</h2>
      <h3 className={styles.h3__articleAuthor}>{author}</h3>
      <h4 className={styles.h4__articleDate}>{created_at}</h4>
      <div className={styles.div__articleImgWrapper}>
        <img
          className={styles.img__articleImg}
          src={article_img_url}
          alt={title}
        />
      </div>
      <section className={styles.div__articleInfo}>
        <article className={styles.container__articleVotes}>
          <p className={styles.btn__downVote}>
            <TfiAngleDown className={styles.svg__downVote} />
          </p>
          <span className={styles.counter__numberVote}>00</span>
          <p className={styles.btn__upVote}>
            <TfiAngleUp className={styles.svg__upVote} />
          </p>
        </article>

        <article className={styles.link__commentCount}>
          <TfiComment className={styles.svg__commentCount} />
          <p className={styles.p__commentCount}>00</p>
        </article>

        <article className={styles.form__articleDelete}>
          <p className={styles.btn__articleDelete}>
            <TfiTrash className={styles.svg__articleDelete} />
          </p>
        </article>

      </section>
    </li>
  );
};

export default ArticleCard;
