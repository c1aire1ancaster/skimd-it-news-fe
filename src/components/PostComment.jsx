import styles from '../styles/PostComment.module.css';
import { postComment } from '../utils/api';
import { useState } from 'react';

const PostComment = ({
  article_id,
  setCommentList,
  setCommentCount,
  loggedInUser,
}) => {
  const [commentBody, setCommentBody] = useState('');
  const [isError, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [postSuccessful, setPostSuccessful] = useState(false);

  let author = loggedInUser.username;

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsError(false);
    setIsPending(true);
    postComment({ author, body: commentBody }, Number(article_id))
      .then((newCommentFromApi) => {
        setIsPending(false);
        setPostSuccessful(true);
        setTimeout(() => {
          setPostSuccessful(false);
        }, 6000);
        setCommentList((currentCommentList) => [
          ...currentCommentList,
          newCommentFromApi,
        ]);
        setCommentCount((currentCommentCount) => {
          return currentCommentCount + 1;
        });
      })
      .catch(() => {
        setPostSuccessful(false);
        setIsPending(false);
        setIsError(true);
      });
    setCommentBody('');
  };

  return (
    <section className={styles.section__postCommentContainer}>
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

      {isPending ? (
        <p className={styles.p__postPending}>Hmm... Hang on...</p>
      ) : null}

      {postSuccessful ? (
        <p className={styles.p__postSuccessful}>Yay! It's shared</p>
      ) : null}

      {isError ? (
        <p className={styles.p__postError}>Oh dear! Try again...</p>
      ) : null}
    </section>
  );
};

export default PostComment;
