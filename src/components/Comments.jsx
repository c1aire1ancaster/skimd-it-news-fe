import styles from '../styles/Comments.module.css';
import { useEffect, useState, useContext } from 'react';
import { getComments } from '../api/api';
import CommentCard from './CommentCard';
import PostComment from './PostComment';
import { TfiAngleRight, TfiAngleLeft } from 'react-icons/tfi';

const Comments = ({ article_id, commentCount, setCommentCount }) => {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [maxPageNum, setMaxPageNum] = useState(Math.ceil(commentCount / 10));

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id).then((comments) => {
      setCommentList(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  const goToNextPage = () => {
    setPageNum((currentPageNum) => {
      return currentPageNum + 1;
    });
  };

  const goToPreviousPage = () => {
    setPageNum((currentPageNum) => {
      return currentPageNum - 1;
    });
  };

  if (isLoading) {
    return (
      <div className={styles.container__loading}>
        <h2 className={styles.h2__loading}>Loading...</h2>
      </div>
    );
  }

  return (
    <section>
      <PostComment
        article_id={article_id}
        setCommentList={setCommentList}
        setCommentCount={setCommentCount}
      />
      <section className={styles.section__commentContainer}>
        <h2 className={styles.h2__commentsTitle}>{commentCount} Comments</h2>
        <ul className={styles.ul__comments}>
          {commentList.map((comment) => {
            return (
              <CommentCard key={comment.comment_id} singleComment={comment} />
            );
          })}
        </ul>
      </section>

      <section className={styles.container__pagination}>
        <div className={styles.container__previous}>
          {pageNum === 1 ? (
            <></>
          ) : (
            <button
              className={styles.button__previous}
              aria-label="go to previous page of comments"
              onClick={goToPreviousPage}
            >
              <TfiAngleLeft className={styles.svg__previousArticles} />
            </button>
          )}
        </div>
        <div className={styles.container__next}>
          {pageNum === maxPageNum ? (
            <></>
          ) : (
            <button
              className={styles.button__next}
              aria-label="go to next page of comments"
              onClick={goToNextPage}
            >
              <TfiAngleRight className={styles.svg__nextArticles} />
            </button>
          )}
        </div>
      </section>
    </section>
  );
};

export default Comments;
