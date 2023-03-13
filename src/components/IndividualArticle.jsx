import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api';
import ViewIndividualArticle from './ViewIndividualArticle';
import styles from '../styles/IndividualArticle.module.css';

const IndividualArticle = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [article, setArticle] = useState({}),
  // const {article_id} = useParams;

  return (
    <section className={styles.container}>
      <ViewIndividualArticle />
    </section>
  );
};

export default IndividualArticle;
