import styles from '../styles/PostComment.module.css';

const PostComment = ({ articleId }) => {
  return (
    <form className={styles.form__container}>
      <h2 className={styles.h2__postComment}>Share your thoughts...</h2>

      <label className={styles.label__postComment} for="message">
        Scribble here:
        <textarea
          className={styles.textarea__postComment}
          id="message"
        ></textarea>
      </label>

      <button className={styles.btn__postComment}>Submit</button>
    </form>
  );
};

export default PostComment;
