import styles from '../styles/Comments.module.css';
import { useEffect, useState } from 'react';
import { getComments } from '../api/api';
import CommentCard from './CommentCard';
import PostComment from './PostComment';

const Comments = ({ article_id, comment_count, loggedInUser }) => {
  const [commentList, setCommentList] = useState([]);
  const [commentCount, setCommentCount] = useState(comment_count);
  const [isLoading, setIsLoading] = useState(true);

  const { username } = loggedInUser;

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
    <section>
      <PostComment
        article_id={article_id}
        setCommentList={setCommentList}
        setCommentCount={setCommentCount}
        loggedInUser={loggedInUser}
      />
      <section className={styles.section__commentContainer}>
        <h2 className={styles.h2__commentsTitle}>{commentCount} Comments</h2>
        <ul className={styles.ul__comments}>
          {commentList.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                singleComment={comment}
                username={username}
              />
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default Comments;
