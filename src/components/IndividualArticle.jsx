import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ViewIndividualArticle from './ViewIndividualArticle';
import styles from '../styles/IndividualArticle.module.css';

const IndividualArticle = () => {
  const [individualArticle, setIndividualArticle] = useState({});
  const { article_id } = useParams();
  // console.log(article_id);

  return (
    <section className={styles.container}>
      <ViewIndividualArticle article_id={article_id} />
    </section>
  );
};

export default IndividualArticle;
