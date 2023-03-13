import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api';
import styles from '../styles/ViewIndividualArticle.module.css';
import formatDate from '../utils/ArticleCard.utils';
import {
  TfiComment,
  TfiAngleDown,
  TfiAngleUp,
  TfiTrash,
} from 'react-icons/tfi';

const dummyArticle = {
  author: 'jessjelly',
  title: 'Running a Node App',
  body: 'This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.',
  article_id: 1,
  topic: 'coding',
  created_at: '2020-11-07T06:03:00.000Z',
  votes: 0,
  article_img_url:
    'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700',
  comment_count: 8,
};

const ViewIndividualArticle = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [article, setArticle] = useState({}),
  // const {article_id} = useParams;

  // useEffect(() => {
  //   setIsLoading(true);
  //   getArticles(article_id).then((data) => {
  //     // console.log(data, "<in IndividalArticle");
  //     // setArticleList(articles);
  //     setIsLoading(false);
  //   });
  // }, []);

  const formattedDate = formatDate(dummyArticle.created_at);

  return (
    <section className={styles.section__articleContainer}>
      <h2 className={styles.h2__articleTitle}>{dummyArticle.title}</h2>
      <h3 className={styles.h3__articleAuthor}>{dummyArticle.author}</h3>
      <h4 className={styles.h4__articleDate}>{formattedDate}</h4>
      <h4 className={styles.h4__articleTopic}>{dummyArticle.topic}</h4>
      <div className={styles.div__articleImgWrapper}>
        <img
          className={styles.img__articleImg}
          src={dummyArticle.article_img_url}
          alt="linked to article"
        />
      </div>
      <section className={styles.div__articleInfo}>
        <div className={styles.container__articleVotes}>
          <p className={styles.btn__downVote}>
            <TfiAngleDown className={styles.svg__downVote} />
          </p>
          <span className={styles.counter__numberVote}>
            {dummyArticle.votes}
          </span>
          <p className={styles.btn__upVote}>
            <TfiAngleUp className={styles.svg__upVote} />
          </p>
        </div>

        <div className={styles.link__commentCount}>
          <TfiComment className={styles.svg__commentCount} />
          <p className={styles.p__commentCount}>{dummyArticle.comment_count}</p>
        </div>

        <div className={styles.form__articleDelete}>
          <p className={styles.btn__articleDelete}>
            <TfiTrash className={styles.svg__articleDelete} />
          </p>
        </div>
      </section>
      <p className={styles.p__articleBody}>{dummyArticle.body}</p>
      <div className={styles.div__author}>
        <img className={styles.image__user} alt="logged in user's avatar" />
        <h3 className={styles.h3__articleAuthor}>{dummyArticle.author}</h3>
      </div>
      <section className={styles.div__articleInfo}>
        <div className={styles.container__articleVotes}>
          <p className={styles.btn__downVote}>
            <TfiAngleDown className={styles.svg__downVote} />
          </p>
          <span className={styles.counter__numberVote}>
            {dummyArticle.votes}
          </span>
          <p className={styles.btn__upVote}>
            <TfiAngleUp className={styles.svg__upVote} />
          </p>
        </div>

        <div className={styles.link__commentCount}>
          <TfiComment className={styles.svg__commentCount} />
          <p className={styles.p__commentCount}>{dummyArticle.comment_count}</p>
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
