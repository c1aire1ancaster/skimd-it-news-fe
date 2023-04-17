import styles from '../styles/CommentCard.module.css';
import { getUser } from '../utils/api';
import { upVoteComment, downVoteComment } from '../utils/api';
import { useState, useEffect } from 'react';
import formatDateAndTime from '../utils/CommentCard.utils';
import {
  TfiAngleDown,
  TfiAngleUp,
  TfiTrash,
  TfiThumbUp,
} from 'react-icons/tfi';

const CommentCard = (singleComment) => {
  const [userAvatarImg, setUserAvatarImg] = useState('');
  const [isError, setIsError] = useState(false);
  const [comment, setComment] = useState(singleComment);
  const [userVote, setUserVote] = useState(0);
  const [isAbleToDelete, setIsAbleToDelete] = useState(false);
  // console.log(loggedInUser, '<in comment card');
  // console.log(comment, '<comment');

  useEffect(() => {
    getUser(comment.author)
      .then((userAvatarUrl) => {
        setUserAvatarImg(userAvatarUrl);
      })
      .then(() => {
        if (comment.author === 'grumpy19') {
          setIsAbleToDelete(true);
        }
      });
  }, [comment.author]);

  const upVote = () => {
    setComment((currentComment) => {
      return { ...currentComment, votes: comment.votes + 1 };
    });
    setUserVote(1);
    setIsError(false);
    upVoteComment(comment.comment_id).catch(() => {
      setUserVote(0);
      setIsError(true);
      setComment((currentComment) => {
        return { ...currentComment, votes: comment.votes };
      });
    });
  };

  const downVote = () => {
    setComment((currentComment) => {
      return { ...currentComment, votes: comment.votes - 1 };
    });
    setUserVote(1);
    setIsError(false);
    downVoteComment(comment.comment_id).catch(() => {
      setIsError(true);
      setUserVote(0);
      setComment((currentComment) => {
        return { ...currentComment, votes: comment.votes };
      });
    });
  };

  const deleteComment = () => {};

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
      <section className={styles.section_commentVoteContainer}>
        <div className={styles.section__commentInfo}>
          <div className={styles.container__commentVotes}>
            <button
              className={styles.btn__downVote}
              aria-label="down vote comment"
              onClick={() => downVote()}
              disabled={userVote !== 0}
            >
              <TfiAngleDown className={styles.svg__downVote} />
            </button>
            <span className={styles.counter__numberVote}>{comment.votes}</span>
            <button
              className={styles.btn__upVote}
              aria-label="up vote comment"
              onClick={() => upVote()}
              disabled={userVote !== 0}
            >
              <TfiAngleUp className={styles.svg__upVote} />
            </button>
          </div>
        </div>

        {isAbleToDelete ? (
          <div className={styles.form__articleDelete}>
            <button
              className={styles.btn__articleDelete}
              aria-label="delete your comment"
              onClick={() => deleteComment()}
            >
              <TfiTrash className={styles.svg__articleDelete} />
            </button>
          </div>
        ) : null}

        {/* <div className={styles.form__articleDelete}>
          <p className={styles.btn__articleDelete}>
            <TfiTrash className={styles.svg__articleDelete} />
          </p>
        </div> */}

        {isError ? (
          <div className={styles.div__errorMessage}>
            <p className={styles.p__errorMessage}>Vote problemo!</p>
          </div>
        ) : null}

        {userVote ? (
          <div className={styles.div__voteSuccess}>
            <p className={styles.p__voteSuccess} aria-label="vote successful">
              <TfiThumbUp /> for vote!
            </p>
          </div>
        ) : null}
      </section>
    </li>
  );
};

export default CommentCard;
