import styles from '../styles/CommentList.module.css';
import { useEffect, useState } from 'react';
import { getComments } from '../utils/api';
import CommentCard from './CommentCard'

const CommentList = () => {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getComments().then((comments) => {
      setCommentList(comments);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className={styles.section__commentContainer}>
      <ul className={styles.ul__comments}>
        {commentList.map((comment) => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </ul>
    </section>
  )
}

export default CommentList;