import styles from '../styles/PostComment.module.css';
import { postComment } from '../utils/api';
import { useState } from 'react';

const PostComment = ({ article_id, setCommentList }) => {
  const [commentBody, setCommentBody] = useState('');
  const [newComment, setNewComment] = useState({});
  // console.log(typeof Number(article_id));

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewComment({author: 'grumpy19', body: commentBody});

    postComment(newComment, Number(article_id)).then((newCommentFromApi) => {
      setCommentList((currentCommentList) => [
        ...currentCommentList,
        newCommentFromApi,
      ]);
    });
    // setCommentBody('');
  };

  return (
    <form className={styles.form__container} onSubmit={handleSubmit}>
      <h2 className={styles.h2__postComment}>add a comment...</h2>

      <section className={styles.section__writeComment}>
        <label className={styles.label__postComment} htmlFor="comment">
          Scribble your thoughts here:
          <textarea
            value={commentBody}
            className={styles.textarea__postComment}
            id="comment"
            onChange={(event) => setCommentBody(event.target.value)}
          ></textarea>
        </label>
      </section>

      <button className={styles.btn__postComment} type="submit">
        share
      </button>
    </form>
  );
};

export default PostComment;
