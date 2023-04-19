import styles from '../styles/CommentCard.module.css';
import { getUser } from '../api/api';
import { upVoteComment, downVoteComment, deleteCommentById } from '../api/api';
import { useState, useEffect, useContext } from 'react';
import formatDateAndTime from '../utils/CommentCard.utils';
import { LoggedInUserContext } from '../contexts/LoggedInUser';
import {
  TfiAngleDown,
  TfiAngleUp,
  TfiTrash,
  TfiThumbUp,
} from 'react-icons/tfi';

const CommentCard = ({ singleComment }) => {
  const { loggedInUser } = useContext(LoggedInUserContext);
  const [comment, setComment] = useState(singleComment);
  const [userAvatarImg, setUserAvatarImg] = useState('');
  const [userVote, setUserVote] = useState(0);
  const [isVoteError, setIsVoteError] = useState(false);
  const [isAbleToDelete, setIsAbleToDelete] = useState(false);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [isDeleteError, setIsDeleteError] = useState(false);
  const [isDeletePending, setIsDeletePending] = useState(false);

  useEffect(() => {
    getUser(comment.author)
      .then((userAvatarUrl) => {
        setUserAvatarImg(userAvatarUrl);
      })
      .then(() => {
        if (comment.author === loggedInUser) {
          setIsAbleToDelete(true);
        }
      });
  }, [comment.author, loggedInUser]);

  const upVote = () => {
    setComment((currentComment) => {
      return { ...currentComment, votes: comment.votes + 1 };
    });
    setUserVote(1);
    setIsVoteError(false);
    upVoteComment(comment.comment_id).catch(() => {
      setUserVote(0);
      setIsVoteError(true);
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
    setIsVoteError(false);
    downVoteComment(comment.comment_id).catch(() => {
      setIsVoteError(true);
      setUserVote(0);
      setComment((currentComment) => {
        return { ...currentComment, votes: comment.votes };
      });
    });
  };

  const deleteComment = () => {
    setIsDeletePending(true);
    deleteCommentById(comment.comment_id)
      .then(() => {
        setIsDeletePending(false);
        setIsDeleteSuccess(true);
      })
      .catch(() => {
        setIsDeleteSuccess(false);
        setIsDeleteError(true);
      });
  };

  const formattedDateAndTime = formatDateAndTime(comment.created_at);

  return (
    <li className={styles.li__commentCard}>
      {isDeleteSuccess ? (
        <div className={styles.card__deletedCommentContainer}>
          <h2 className={styles.h2__commentDeleted}>Comment Deleted</h2>
        </div>
      ) : (
        <div className={styles.card__commentContainer}>
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
                <span className={styles.counter__numberVote}>
                  {comment.votes}
                </span>
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
                  disabled={isDeletePending}
                  onClick={() => deleteComment()}
                >
                  <TfiTrash className={styles.svg__articleDelete} />
                </button>
              </div>
            ) : null}

            {isVoteError ? (
              <div className={styles.div__voteErrorMessage}>
                <p className={styles.p__voteErrorMessage}>Vote problemo!</p>
              </div>
            ) : null}

            {isDeletePending ? (
              <div className={styles.div__deletePendingMessage}>
                <p className={styles.p__deletePendingMessage}>Deleting...</p>
              </div>
            ) : null}

            {isDeleteError ? (
              <div className={styles.div__deleteErrorMessage}>
                <p className={styles.p__deleteErrorMessage}>Can't delete</p>
              </div>
            ) : null}

            {userVote ? (
              <div className={styles.div__voteSuccess}>
                <p
                  className={styles.p__voteSuccess}
                  aria-label="vote successful"
                >
                  <TfiThumbUp /> for vote!
                </p>
              </div>
            ) : null}
          </section>
        </div>
      )}
    </li>
  );
};

export default CommentCard;
