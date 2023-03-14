import styles from '../styles/ArticleCard.module.css';
import formatDate from '../utils/ArticleCard.utils';
import { Link } from 'react-router-dom';
import {
  TfiComment,
  TfiAngleDown,
  TfiAngleUp,
  TfiTrash,
} from 'react-icons/tfi';

const ArticleCard = ({
  article_id,
  title,
  author,
  created_at,
  votes,
  article_img_url,
  comment_count,
}) => {
  const formattedDate = formatDate(created_at);

  const linkPath = `/articles/read-article/${article_id}`;

  return (
    <li className={styles.card__articleContainer}>
      <Link className={styles.link__articleTitle} to={linkPath}>
        <h2 className={styles.h2__articleTitle}>{title}</h2>
        <h3 className={styles.h3__articleAuthor}>{author}</h3>
        <h4 className={styles.h4__articleDate}>{formattedDate}</h4>
      </Link>
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

        <div className={styles.form__articleDelete}>
          <p className={styles.btn__articleDelete}>
            <TfiTrash className={styles.svg__articleDelete} />
          </p>
        </div>
      </section>
    </li>
  );
};

export default ArticleCard;
