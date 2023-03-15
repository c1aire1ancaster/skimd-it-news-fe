import styles from '../styles/CommentCard.module.css';
import { getUser } from '../utils/api';
import { upVoteComment, downVoteComment } from '../utils/api';
import { useState, useEffect } from 'react';
import formatDateAndTime from '../utils/CommentCard.utils';
import { TfiAngleDown, TfiAngleUp } from 'react-icons/tfi';

const CommentCard = (singleComment) => {
  const [userAvatarImg, setUserAvatarImg] = useState('');
  const [isError, setIsError] = useState(false);
  const [comment, setComment] = useState(singleComment);

  useEffect(() => {
    getUser(comment.author).then((userAvatarUrl) => {
      setUserAvatarImg(userAvatarUrl);
    });
  }, [comment.author]);

  const upVote = () => {
    setComment((currentComment) => {
      return { ...currentComment, votes: comment.votes + 1 };
    });
    upVoteComment(comment.comment_id).catch(() => {
      setComment((currentComment) => {
        setIsError(true);
        return { ...currentComment, votes: comment.votes - 1 };
      });
      return comment;
    });
    return comment;
  };

  const downVote = () => {
    setComment((currentComment) => {
      return { ...currentComment, votes: comment.votes - 1 };
    });
    downVoteComment(comment.comment_id).catch(() => {
      setIsError(true);
      setComment((currentComment) => {
        return { ...currentComment, votes: comment.votes + 1 };
      });
      return comment;
    });
    return comment;
  };

  const formattedDateAndTime = formatDateAndTime(comment.created_at);

  return (
    <li className={styles.card__commentContainer}>
      <div className={styles.div__commentAuthor}>
        <img
          className={styles.image__commentAuthorAvatar}
          src={userAvatarImg}
          alt="logged in user's avatar"
        />
        <h3 className={styles.h3__commentAuthor}>{comment.author}</h3>
      </div>
      <p className={styles.p__commentBody}>{comment.body}</p>
      <h4 className={styles.h4__commentDate}>{formattedDateAndTime}</h4>
      <section>
        {isError ? (
          <div className={styles.div__errorMessage}>
            {isError ? (
              <p className={styles.p__errorMessage}>Vote problemo!</p>
            ) : null}
          </div>
        ) : (
          <div className={styles.section__commentInfo}>
            <div className={styles.container__commentVotes}>
              <button
                className={styles.btn__downVote}
                aria-label="down vote comment"
                onClick={() => downVote()}
              >
                <TfiAngleDown className={styles.svg__downVote} />
              </button>
              <span className={styles.counter__numberVote}>
                {comment.votes}
              </span>
              <button
                className={styles.btn__upVote}
                aria-label="up vote comment"
                onClick={() => upVote()}
              >
                <TfiAngleUp className={styles.svg__upVote} />
              </button>
            </div>
          </div>
        )}
      </section>
    </li>
  );
};

export default CommentCard;
