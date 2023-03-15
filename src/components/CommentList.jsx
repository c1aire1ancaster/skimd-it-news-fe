import styles from '../styles/CommentList.module.css';
import { useEffect, useState } from 'react';
import { getComments } from '../utils/api';
import CommentCard from './CommentCard';

const CommentList = ({ article_id, comment_count }) => {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id).then((comments) => {
      setCommentList(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className={styles.section__commentContainer}>
      <h2 className={styles.h2__commentsTitle}>Comments</h2>
      <ul className={styles.ul__comments}>
        {commentList.map((comment) => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </ul>
    </section>
  );
};

export default CommentList;
